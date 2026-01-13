import { UIDataTypes, UIMessage, UITools } from "ai"

const CHAT_STORAGE_KEY = "ai-chat-messages"
const PROMPT_STORAGE_KEY = "ai-prompt-session"
const PROMPT_SESSION_DURATION = 24 * 60 * 60 * 1000 // 24 hours

export const PROMPT_LIMIT = 30

export const saveChatMessages = (
  messages: UIMessage<unknown, UIDataTypes, UITools>[],
) => {
  try {
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages))
  } catch (error) {
    console.error("Failed to save chat messages:", error)
  }
}

export const loadChatMessages = () => {
  try {
    const stored = localStorage.getItem(CHAT_STORAGE_KEY)
    return stored
      ? (JSON.parse(stored) as UIMessage<unknown, UIDataTypes, UITools>[])
      : []
  } catch (error) {
    console.error("Failed to load chat messages:", error)
    return []
  }
}

export const loadPromptSession = () => {
  try {
    const stored = localStorage.getItem(PROMPT_STORAGE_KEY)
    if (stored) {
      const data = JSON.parse(stored) as {
        promptsRemaining: number
        createdAt: number
      }
      if (Date.now() - data.createdAt < PROMPT_SESSION_DURATION) {
        return data.promptsRemaining
      }
      localStorage.removeItem(PROMPT_STORAGE_KEY)
    }
  } catch (error) {
    console.error("Failed to load prompt session:", error)
  }
  return PROMPT_LIMIT
}

export const savePromptSession = (promptsRemaining: number) => {
  const stored = localStorage.getItem(PROMPT_STORAGE_KEY)
  const createdAt = stored ? JSON.parse(stored).createdAt : Date.now()
  localStorage.setItem(
    PROMPT_STORAGE_KEY,
    JSON.stringify({ promptsRemaining, createdAt }),
  )
}
