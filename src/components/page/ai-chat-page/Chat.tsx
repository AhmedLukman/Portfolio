"use client"

import { PlaceholdersAndVanishInput } from "@/components/ui/PlaceholderAndVanishInput"
import { PAGE_LINKS } from "@/lib/constants"
import { useChat } from "@ai-sdk/react"
import { faExclamationTriangle, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { addToast } from "@heroui/toast"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import ReactMarkdown from "react-markdown"

const Chat = () => {
  const router = useRouter()
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

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
    console.error(error)
  }, [error])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ]

  return (
    <div className="flex h-full w-full flex-col justify-between py-24 text-white">
      {messages.length === 0 && (
        <div className="flex h-full items-center justify-center">
          <p className="text-heading text-center">
            Meet my AI Self Agent — your one-stop intelligent gateway to learn
            everything about me!
          </p>
        </div>
      )}

      <div className="flex-1 space-y-6 overflow-y-auto px-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {/* AI Avatar */}
            {message.role === "assistant" && (
              <div className="mt-1 flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-violet-600">
                  <span className="text-xs font-semibold text-white">AI</span>
                </div>
              </div>
            )}

            {/* Message Bubble */}
            <div
              className={`max-w-[75%] ${message.role === "user" ? "order-last" : ""}`}
            >
              <div
                className={`rounded-2xl px-4 py-3 ${
                  message.role === "user"
                    ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg"
                    : "border border-gray-700/50 bg-gray-800/70 text-gray-100 shadow-lg backdrop-blur-sm"
                }`}
              >
                <div className="leading-relaxed">
                  {message.parts.map((part, i) => {
                    switch (part.type) {
                      case "text":
                        return (
                          <div key={`${message.id}-${i}`}>
                            <div className="prose prose-invert prose-purple text-heading! [&>p]:text-heading!  max-w-none">
                              <ReactMarkdown>{part.text}</ReactMarkdown>
                            </div>
                          </div>
                        )
                      case "tool-navigator":
                        return (
                          <div key={`${message.id}-${i}`} className="mt-2">
                            <div className="rounded-lg border border-gray-600/30 bg-gray-900/50 p-3">
                              <div className="mb-1 text-sm text-gray-300">
                                Navigation:
                              </div>
                              <pre className="overflow-x-auto text-xs text-purple-300">
                                {JSON.stringify(part, null, 2)}
                              </pre>
                            </div>
                          </div>
                        )
                    }
                  })}
                </div>
              </div>
            </div>

            {/* User Avatar */}
            {message.role === "user" && (
              <div className="mt-1 flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-600">
                  <span className="text-xs font-semibold text-white">You</span>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {status === "streaming" && (
          <div className="flex justify-start gap-3">
            <div className="mt-1 flex-shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-violet-600">
                <span className="text-xs font-semibold text-white">AI</span>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-700/50 bg-gray-800/80 px-4 py-3 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-purple-500"></div>
                  <div
                    className="h-2 w-2 animate-bounce rounded-full bg-purple-500"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="h-2 w-2 animate-bounce rounded-full bg-purple-500"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400">Thinking...</span>
              </div>
            </div>
          </div>
        )}

        {/* Error Indicator */}
        {status === "error" && (
          <div className="flex justify-start gap-3">
            <div className="mt-1 flex-shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600">
                <FontAwesomeIcon icon={faExclamationTriangle} className=" text-white" />
              </div>
            </div>
            <div className="rounded-2xl border border-red-700/50 bg-red-900/20 px-4 py-3 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faTimes} className=" text-red-400" />
                <span className="text-sm text-red-300">
                  Something went wrong. Please try again.
                </span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onSubmit={(e) => {
          e.preventDefault()
          if (input.trim()) {
            sendMessage({ text: input })
            setInput("")
          }
        }}
        onChange={(e) => {
          setInput(e.currentTarget.value)
        }}
      />
    </div>
  )
}

export default Chat
