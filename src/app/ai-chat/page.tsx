import Chat from "@/components/page/ai-chat-page/Chat"
import PageHeader from "@/components/wrappers/PageHeader"
import PageWrapper from "@/components/wrappers/PageWrapper"

const AIChatPage = () => {
  return (
    <PageWrapper>
      <PageHeader>AI Chat</PageHeader>
      <Chat />
    </PageWrapper>
  )
}

export default AIChatPage
