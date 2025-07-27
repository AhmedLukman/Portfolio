"use client"

import { PlaceholdersAndVanishInput } from "@/components/ui/PlaceholderAndVanishInput"
import { PAGE_LINKS } from "@/lib/constants"
import { useChat } from "@ai-sdk/react"
import { addToast } from "@heroui/toast"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Chat = () => {
  const router = useRouter()
  const [input, setInput] = useState("")
  const { messages, sendMessage } = useChat({
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

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ]

  return (
    <div className="flex h-full w-full flex-col justify-between py-24 text-white!">
      {messages.length === 0 && (
        <div className="flex h-full items-center justify-center">
          <p className="text-heading text-center">
            {/* Meet My AI Self Agent — the smartest and interactive way to learn all about me! */}
            Meet my AI Self Agent — your one-stop intelligent gateway to learn everything about me!
          </p>
        </div>
      )}

      <div>
        {messages.map((message) => (
          <div key={message.id} className="whitespace-pre-wrap">
            {message.role === "user" ? "User: " : "AI: "}
            {message.parts.map((part, i) => {
              switch (part.type) {
                case "text":
                  return <div key={`${message.id}-${i}`}>{part.text}</div>
                case "tool-navigator":
                  return (
                    <pre key={`${message.id}-${i}`}>
                      {JSON.stringify(part, null, 2)}
                    </pre>
                  )
              }
            })}
          </div>
        ))}
      </div>

      <PlaceholdersAndVanishInput
        placeholders={placeholders}
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
