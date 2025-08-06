import {
  faExclamationTriangle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ChatStatus, UIDataTypes, UIMessage, UITools } from "ai"
import { useEffect, useRef } from "react"
import ReactMarkdown from "react-markdown"

const ChatMessages = ({
  messages,
  status,
}: {
  messages: UIMessage<unknown, UIDataTypes, UITools>[]
  status: ChatStatus
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])
  return (
    <div className="flex-1 space-y-6 overflow-y-auto">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
        >
          {/* AI Avatar */}
          {message.role === "assistant" && (
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-violet-600">
              <span className="text-xs font-semibold text-white">AI</span>
            </div>
          )}

          {/* Message Bubble */}
          <div
            className={`max-w-[80%] sm:max-w-[75%] ${message.role === "user" ? "order-last" : ""}`}
          >
            <div
              className={`rounded-2xl px-4 py-3 ${
                message.role === "user"
                  ? "bg-gradient-to-r from-purple-700 to-violet-600 shadow-lg"
                  : "border border-gray-700/50 bg-gray-800/70 shadow-lg backdrop-blur-sm"
              }`}
            >
              <div className="space-y-2">
                {message.parts.map((part, i) => {
                  switch (part.type) {
                    case "text":
                      return (
                        <div
                          key={`${message.id}-${i}`}
                          className="prose prose-invert prose-purple text-heading! [&>p]:text-heading! max-w-none"
                        >
                          <ReactMarkdown>{part.text}</ReactMarkdown>
                        </div>
                      )
                    case "tool-emailSender":
                    case "tool-certificateDownloader":
                    case "tool-externalLinkOpener":
                    case "tool-navigator":
                      return (
                        <div key={`${message.id}-${i}`}>
                          <pre className="overflow-x-auto rounded-lg border border-gray-600/30 bg-gray-900/50 p-3 text-xs text-purple-300">
                            {JSON.stringify(part, null, 2)}
                          </pre>
                        </div>
                      )
                  }
                })}
              </div>
            </div>
          </div>

          {/* User Avatar */}
          {message.role === "user" && (
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-600">
              <span className="text-xs font-semibold text-white">You</span>
            </div>
          )}
        </div>
      ))}

      {/* Typing Indicator */}
      {(status === "streaming" || status === "submitted") && (
        <div className="flex gap-3">
          <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-violet-600">
            <span className="text-xs font-semibold text-white">AI</span>
          </div>
          <div className="flex items-center gap-2 rounded-2xl bg-gray-800 px-4 py-3">
            <div className="flex gap-1">
              {[0, 0.1, 0.2].map((delay, i) => (
                <div
                  key={i}
                  className="h-2 w-2 animate-bounce rounded-full bg-purple-500"
                  style={{ animationDelay: `${delay}s` }}
                />
              ))}
            </div>
            <span className="text-body text-sm">
              {status === "submitted" ? "Thinking" : "Typing"}...
            </span>
          </div>
        </div>
      )}

      {/* Error Indicator */}
      {status === "error" && (
        <div className="flex justify-start gap-3">
          <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600">
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className="text-white"
            />
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-red-700/50 bg-red-900/20 px-4 py-3 shadow-lg backdrop-blur-sm">
            <FontAwesomeIcon icon={faTimes} className="text-red-400" />
            <span className="text-sm text-red-300">
              Something went wrong. Please try again.
            </span>
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  )
}

export default ChatMessages
