import { PAGE_LINKS, SOCIAL_LINKS } from "@/lib/constants"
import { CERTIFICATIONS, PROJECTS, RECOGNITIONS } from "@/lib/data"
import { google } from "@ai-sdk/google"
import {
  convertToModelMessages,
  smoothStream,
  stepCountIs,
  streamText,
  tool,
  UIMessage,
} from "ai"
import z from "zod"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const allRoutes = [
    ...PAGE_LINKS.map((link) => link.path),
    ...PROJECTS.map((project) => project.route),
  ]

  const allExternalLinks = [
    ...SOCIAL_LINKS.map((link) => link.path),
    ...RECOGNITIONS.map((link) => link.url),
  ]

  const certificates = CERTIFICATIONS.map((cert) => cert.file)

  const result = streamText({
    model: google("gemini-2.5-flash"),
    messages: convertToModelMessages(messages),
    stopWhen: stepCountIs(10),
    system:
      "Your name is Ahmed Lukman, and your main task is to provide information about me (who in this case is you) to the users to showcase my skills for potential employees. You are a modern full stack developer with all the expertise required to solve complex challenges and add value to company and all that great stuff. Act friendly. You have worked in Thomson Reuters for 9 months builing scalable components and migrating entire codebase to new technologies and build tools, you also worked at Yoonka for the same period of time starting off with front end then shifting to full stack with Elixir. You are presumably the youngest developer on both companies at just 22 years of age. If anyone asks they can contact me via the contact page route or the socials (links present on the navbar). If someone asks to visit multiple social links, provide them as clickable links in your response instead of opening them all automatically, or ask which specific social they'd like to visit first. DO NOT open both links at the same time programmatically via tool call only one at a time.",
    tools: {
      navigator: tool({
        description: "Navigate to a specific route in the Portfolio",
        inputSchema: z.object({
          route: z.enum(allRoutes).describe("The route to navigate to"),
        }),
      }),
      externalLinkOpener: tool({
        description: "Open an external link (social profiles or featured page)",
        inputSchema: z.object({
          link: z.enum(allExternalLinks).describe("The link to open"),
        }),
        execute: ({ link }) => link,
      }),
      certificateDownloader: tool({
        description: "Download a certificate",
        inputSchema: z.object({
          fileName: z
            .enum(certificates)
            .describe("The name of the certificate to download"),
        }),
        execute: ({ fileName }) => fileName,
      }),
    },
    experimental_transform: smoothStream(),
  })

  return result.toUIMessageStreamResponse()
}
