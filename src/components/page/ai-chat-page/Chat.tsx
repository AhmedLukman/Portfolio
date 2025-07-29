"use client"

import { PlaceholdersAndVanishInput } from "@/components/ui/PlaceholderAndVanishInput"
import { PAGE_LINKS } from "@/lib/constants"
import { useChat } from "@ai-sdk/react"
import { addToast } from "@heroui/toast"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import ChatIntroduction from "./ChatIntroduction"
import ChatMessages from "./ChatMessages"

const Chat = () => {
  const router = useRouter()
  const [input, setInput] = useState("")

  const { messages, sendMessage, status, error } = useChat({
    onToolCall: ({ toolCall: { toolName, input } }) => {
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
      }
    },
  })

  useEffect(() => {
    if (error) console.error(error)
  }, [error])

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ]

  return (
    <div className="flex h-full w-full flex-col justify-between py-10 text-white xl:py-12">
      {messages.length === 0 && <ChatIntroduction />}
      {messages.length > 0 && (
        <ChatMessages messages={messages} status={status} />
      )}
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        status={status}
        onSubmit={(e) => {
          e.preventDefault()
          sendMessage({ text: input })
          setInput("")
        }}
        onChange={(e) => {
          setInput(e.currentTarget.value)
        }}
      />
    </div>
  )
}

export default Chat
