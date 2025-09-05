"use client"

import { PlaceholdersAndVanishInput } from "@/components/ui/PlaceholderAndVanishInput"
import { PAGE_LINKS, SOCIAL_LINKS } from "@/lib/constants"
import { CERTIFICATIONS } from "@/lib/data"
import { useChat } from "@ai-sdk/react"
import { Button } from "@heroui/button"
import { Spinner } from "@heroui/spinner"
import { addToast } from "@heroui/toast"
import { UIDataTypes, UIMessage, UITools } from "ai"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { z } from "zod"
import ChatIntroduction from "./ChatIntroduction"
import ChatMessages from "./ChatMessages"

const CHAT_STORAGE_KEY = "ai-chat-messages"

const NavigatorInputSchema = z.object({
  route: z.enum(PAGE_LINKS.map((link) => link.path)),
})

const ExternalLinkInputSchema = z.object({
  link: z.enum(SOCIAL_LINKS.map((link) => link.path)),
})

const CertificateDownloaderInputSchema = z.object({
  fileName: z.enum(CERTIFICATIONS.map((cert) => cert.file)),
})

const saveChatMessages = (
  messages: UIMessage<unknown, UIDataTypes, UITools>[],
) => {
  try {
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages))
  } catch (error) {
    console.error("Failed to save chat messages:", error)
  }
}

const loadChatMessages = () => {
  try {
    const stored = localStorage.getItem(CHAT_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error("Failed to load chat messages:", error)
    return []
  }
}

const Chat = () => {
  const router = useRouter()
  const [input, setInput] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  const { messages, sendMessage, status, error, setMessages } = useChat({
    onToolCall: async ({ toolCall: { toolName, input } }) => {
      if (toolName === "navigator") {
        const result = NavigatorInputSchema.safeParse(input)
        if (!result.success) {
          console.error(`Invalid navigator input:`, result.error)
          addToast({
            title: "Navigation failed: Invalid route",
            color: "danger",
            hideIcon: true,
            variant: "flat",
            classNames: {
              base: "bg-heading",
            },
          })
          return
        }

        const { route } = result.data
        router.push(route)
        addToast({
          title: `Navigated to ${route}`,
          color: "secondary",
          hideIcon: true,
          variant: "flat",
          classNames: {
            base: "bg-heading",
          },
        })
      } else if (toolName === "externalLinkOpener") {
        const result = ExternalLinkInputSchema.safeParse(input)
        if (!result.success) {
          console.error(`Invalid external link input:`, result.error)
          addToast({
            title: "Failed to open link: Invalid URL",
            color: "danger",
            hideIcon: true,
            variant: "flat",
            classNames: {
              base: "bg-heading",
            },
          })
          return
        }

        const { link } = result.data
        window.open(link, "_blank", "noopener,noreferrer")
        addToast({
          title: `Opened ${link}`,
          color: "secondary",
          hideIcon: true,
          variant: "flat",
          classNames: {
            base: "bg-heading",
          },
        })
      } else if (toolName === "certificateDownloader") {
        const result = CertificateDownloaderInputSchema.safeParse(input)
        if (!result.success) {
          console.error(`Invalid certificate downloader input:`, result.error)
          addToast({
            title: "Download failed: Invalid filename",
            color: "danger",
            hideIcon: true,
            variant: "flat",
            classNames: {
              base: "bg-heading",
            },
          })
          return
        }

        const { fileName } = result.data
        const link = document.createElement("a")
        link.href = `/assets/files/${fileName}.pdf`
        link.download = fileName
        link.click()
        addToast({
          title: `Downloaded ${fileName}`,
          color: "secondary",
          hideIcon: true,
          variant: "flat",
          classNames: {
            base: "bg-heading",
          },
        })
      }
    },
    onFinish: ({ message }) => {
      message.parts.forEach((part) => {
        if (part.type === "tool-emailSender") {
          const hasError = part.state === "output-error"
          addToast({
            title: hasError ? part.errorText : "Email sent successfully",
            color: hasError ? "danger" : "success",
            hideIcon: true,
            variant: "flat",
            classNames: {
              base: "bg-heading",
            },
          })
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
    setIsLoaded(true)
  }, [setMessages])

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
    addToast({
      title: "Chat history cleared",
      color: "secondary",
      hideIcon: true,
      variant: "flat",
      classNames: {
        base: "bg-heading",
      },
    })
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
              className="border border-gray-600/50 bg-gray-800/70 text-sm text-gray-300 transition-colors hover:bg-gray-700/70 hover:text-white"
            >
              Clear chat
            </Button>
          </div>
        )}
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          status={status}
          onSubmitAction={(e) => {
            e.preventDefault()
            sendMessage({ text: input })
            setInput("")
          }}
          onChangeAction={(e) => {
            setInput(e.currentTarget.value)
          }}
        />
      </div>
    </div>
  )
}

export default Chat
