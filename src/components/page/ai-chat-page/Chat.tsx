"use client"

import { PlaceholdersAndVanishInput } from "@/components/ui/PlaceholderAndVanishInput"
import { PAGE_LINKS } from "@/lib/constants"
import { useChat } from "@ai-sdk/react"
import { Button } from "@heroui/button"
import { Spinner } from "@heroui/spinner"
import { addToast } from "@heroui/toast"
import { UIDataTypes, UIMessage, UITools } from "ai"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import ChatIntroduction from "./ChatIntroduction"
import ChatMessages from "./ChatMessages"

// Chat persistence utilities
const CHAT_STORAGE_KEY = "ai-chat-messages"

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

const clearChatMessages = () => {
  try {
    localStorage.removeItem(CHAT_STORAGE_KEY)
  } catch (error) {
    console.error("Failed to clear chat messages:", error)
  }
}

const Chat = () => {
  const router = useRouter()
  const [input, setInput] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  const { messages, sendMessage, status, error, setMessages } = useChat({
    onToolCall: async ({ toolCall: { toolName, input } }) => {
      if (toolName === "navigator") {
        type PagePath = (typeof PAGE_LINKS)[number]["path"]
        const { route } = input as { route: PagePath }
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
        const { link } = input as { link: string }
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
        const { fileName } = input as { fileName: string }
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
      } else if (toolName === "emailSender") {
        // TODO: Handle email sent notif and error
      }
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

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    if (isLoaded) {
      saveChatMessages(messages)
    }
  }, [messages, isLoaded])

  useEffect(() => {
    if (error) console.error(error)
  }, [error])

  const handleClearChat = () => {
    setMessages([])
    clearChatMessages()
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
    "What technologies have you worked with?",
    "Tell me about your experience.",
    "Can I see some of your projects?",
    "How to contact you?",
    "Do you have any certificates I can download?",
  ]  

  const [hasAccess, setHasAccess] = useState(false)
  const [numberOfTimesClicked, setNumberOfTimesClicked] = useState(0)

  const handleClick = () => {
    setNumberOfTimesClicked(prevState => prevState + 1)
  }

  useEffect(() => {
    if (numberOfTimesClicked === 4) {
      setHasAccess(true)
    }
  }, [numberOfTimesClicked])


  return (
    <>
      {!hasAccess && (
        <div className="flex h-full w-full items-center gap-3 justify-center">
          <p>You do not have access yet!</p>
          <svg
            onClick={handleClick}
            role="button"
            width="50"
            height="50"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="#ff4d4f"
              stroke="#000"
              strokeWidth="5"
            />
            <rect x="20" y="45" width="60" height="10" fill="#fff" />
          </svg>
        </div>
      )}
      {hasAccess && (
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
      )}
    </>
  )
}

export default Chat
