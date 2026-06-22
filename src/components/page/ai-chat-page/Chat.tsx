"use client"

import { PlaceholdersAndVanishInput } from "@/components/ui/PlaceholderAndVanishInput"
import { Ripple } from "m3-ripple"
import {
  loadChatMessages,
  loadPromptSession,
  PROMPT_LIMIT,
  saveChatMessages,
  savePromptSession,
} from "@/lib/chat-session"
import { PAGE_LINKS } from "@/lib/constants"
import { CERTIFICATIONS } from "@/lib/data"
import { getAllExternalLinks } from "@/lib/utils"
import { useChat } from "@ai-sdk/react"
import { Button, Spinner, toast } from "@heroui/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { z } from "zod"
import ChatIntroduction from "./ChatIntroduction"
import ChatMessages from "./ChatMessages"

const NavigatorInputSchema = z.object({
  route: z.enum(PAGE_LINKS.map((link) => link.path)),
})

const ExternalLinkInputSchema = z.object({
  link: z.enum(getAllExternalLinks()),
})

const CertificateDownloaderInputSchema = z.object({
  fileName: z.enum(CERTIFICATIONS.map((cert) => cert.file)),
})

const Chat = () => {
  const router = useRouter()
  const [input, setInput] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)
  const [promptsRemaining, setPromptsRemaining] = useState<number | undefined>(
    undefined,
  )

  const isPromptSessionLoaded = promptsRemaining !== undefined

  const { messages, sendMessage, status, error, setMessages } = useChat({
    onToolCall: async ({ toolCall: { toolName, input } }) => {
      if (toolName === "navigator") {
        const result = NavigatorInputSchema.safeParse(input)
        if (!result.success) {
          console.error(`Invalid navigator input:`, result.error)
          toast.danger("Navigation failed: Invalid route", { indicator: null })
          return
        }

        const { route } = result.data
        router.push(route)
        toast.info(`Navigated to ${route}`, { indicator: null })
      } else if (toolName === "externalLinkOpener") {
        const result = ExternalLinkInputSchema.safeParse(input)
        if (!result.success) {
          console.error(`Invalid external link input:`, result.error)
          toast.danger("Failed to open link: Invalid URL", { indicator: null })
          return
        }

        const { link } = result.data
        window.open(link, "_blank", "noopener,noreferrer")
        toast.info(`Opened ${link}`, { indicator: null })
      } else if (toolName === "certificateDownloader") {
        const result = CertificateDownloaderInputSchema.safeParse(input)
        if (!result.success) {
          console.error(`Invalid certificate downloader input:`, result.error)
          toast.danger("Download failed: Invalid filename", { indicator: null })
          return
        }

        const { fileName } = result.data
        const link = document.createElement("a")
        link.href = `/assets/files/${fileName}.pdf`
        link.download = fileName
        link.click()
        toast.info(`Downloaded ${fileName}`, { indicator: null })
      }
    },
    onFinish: ({ message }) => {
      message.parts.forEach((part) => {
        if (part.type === "tool-emailSender") {
          const hasError = part.state === "output-error"
          if (hasError) {
            toast.danger(part.errorText, { indicator: null })
          } else {
            toast.success("Email sent successfully", { indicator: null })
          }
        }
      })
    },
  })

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = loadChatMessages()
    if (savedMessages.length > 0) {
      setMessages(savedMessages)
    }
    queueMicrotask(() => setIsLoaded(true))
  }, [setMessages])

  // Load prompt session on mount
  useEffect(() => {
    queueMicrotask(() => setPromptsRemaining(loadPromptSession()))
  }, [])

  // Save messages to localStorage whenever response has been received
  useEffect(() => {
    if (isLoaded && status === "ready") {
      saveChatMessages(messages)
    }
  }, [messages, status, isLoaded])

  useEffect(() => {
    if (error) console.error(error)
  }, [error])

  const handleClearChat = () => {
    setMessages([])
    toast("Chat history cleared", { indicator: null })
  }

  const placeholders = [
    "Tell me about your experience.",
    "What technologies have you worked with?",
    "How can I contact you?",
    "Can I see some of your projects?",
    "Can I have a look at your certificates?",
  ]

  return (
    <div className="flex h-full w-full flex-col justify-between py-10 text-white xl:py-12">
      {messages.length === 0 && isLoaded && <ChatIntroduction />}
      {!isLoaded && (
        <div className="flex h-full w-full items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {messages.length > 0 && (
        <ChatMessages messages={messages} status={status} />
      )}
      <div className="space-y-4">
        {messages.length > 0 && status === "ready" && (
          <div className="flex justify-center">
            <Button
              onPress={handleClearChat}
              className="h-10! min-w-20! overflow-hidden rounded-[12px]! border border-gray-600/50 bg-gray-800/70 px-4! text-sm! leading-5! font-normal! text-gray-300 transition-colors! duration-150! hover:bg-gray-700/70 hover:text-white"
            >
              <Ripple />
              Clear chat
            </Button>
          </div>
        )}
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          status={status}
          onSubmitAction={(e) => {
            e.preventDefault()
            if (!isPromptSessionLoaded) return

            if (promptsRemaining <= 0) {
              toast.danger(
                "Prompt limit reached. Try again later.",
                { indicator: null },
              )
              return
            }

            const newCount = promptsRemaining - 1
            setPromptsRemaining(newCount)
            savePromptSession(newCount)

            sendMessage({ text: input })
            setInput("")
          }}
          onChangeAction={(e) => {
            setInput(e.currentTarget.value)
          }}
        />
        <p className="text-center text-xs text-gray-500">
          {isPromptSessionLoaded
            ? `${promptsRemaining} / ${PROMPT_LIMIT}`
            : `- / ${PROMPT_LIMIT}`}{" "}
          prompts remaining
        </p>
      </div>
    </div>
  )
}

export default Chat
