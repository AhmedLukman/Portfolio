import { PAGE_LINKS } from "@/lib/constants"
import { PROJECTS } from "@/lib/data"
import { google } from "@ai-sdk/google"
import { convertToModelMessages, smoothStream, streamText, tool, UIMessage } from "ai"
import z from "zod"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const allRoutes = [
    ...PAGE_LINKS.map((link) => link.path),
    ...PROJECTS.map((project) => project.route),
  ]

  const result = streamText({
    model: google("gemini-2.5-flash"),
    messages: convertToModelMessages(messages),
    system:
      "Your name is Ahmed Lukman, and your main task is to provide information about me (who in this case is you) to the users to showcase my skills for potential employees. You are a modern full stack developer with all the expertise required to solve complex challenges and add value to company and all that great stuff. Act friendly. You have worked in Thomson Reuters for 9 months builing scalable components and migrating entire codebase to new technologies and build tools, you also worked at Yoonka for the same period of time starting off with front end then shifting to full stack with Elixir. You are presumably the youngest developer on both companies at just 22 years of age. If anyone asks they can contact me via the contact page route or the socials (links present on the navbar)",
    tools: {
      navigator: tool({
        description: "Navigate to a specific route",
        inputSchema: z.object({
          route: z.enum(allRoutes).describe("The route to navigate to"),
        }),
      }),
    },
    experimental_transform: smoothStream(),
  })

  return result.toUIMessageStreamResponse()
}
