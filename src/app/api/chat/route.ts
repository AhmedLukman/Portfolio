import { sendEmailByAI } from "@/lib/actions"
import { PAGE_LINKS, SOCIAL_LINKS } from "@/lib/constants"
import {
  BACKEND_TECHS,
  CERTIFICATIONS,
  DEV_TOOLS,
  EXPERIENCE,
  FRONT_END_TECHS,
  PROJECTS,
  RECOGNITIONS,
  TESTIMONIALS,
} from "@/lib/data"
import { google } from "@ai-sdk/google"
import {
  convertToModelMessages,
  smoothStream,
  streamText,
  tool,
  UIMessage,
} from "ai"
import { z } from "zod"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

// Empty input schema for tools that don't require parameters
const emptyInputSchema = z.object({})

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const allRoutes = [
    ...PAGE_LINKS.map((link) => link.path),
    ...PROJECTS.map((project) => project.route),
  ]

  const allExternalLinks = [
    ...SOCIAL_LINKS.map((link) => link.path),
    ...RECOGNITIONS.map((link) => link.url),
    ...PROJECTS.map((project) => project.overview.source),
    ...PROJECTS.map((project) => project.overview.site),
  ]

  const certificates = CERTIFICATIONS.map((cert) => cert.file)

  const result = streamText({
    model: google("gemini-2.5-flash"),
    messages: await convertToModelMessages(messages),
    system: process.env.SYSTEM_PROMPT,
    tools: {
      certificatesRetriever: tool({
        description: "Retrieve the certificates",
        inputSchema: emptyInputSchema,
        execute: () => CERTIFICATIONS,
      }),
      projectsRetriever: tool({
        description: "Retrieve the projects",
        inputSchema: emptyInputSchema,
        execute: () => PROJECTS,
      }),
      recognitionsRetriever: tool({
        description: "Retrieve the recognitions",
        inputSchema: emptyInputSchema,
        execute: () => RECOGNITIONS,
      }),
      techAndToolsRetriever: tool({
        description: "Retrieve the technologies and tools",
        inputSchema: emptyInputSchema,
        execute: () => [...FRONT_END_TECHS, ...BACKEND_TECHS, ...DEV_TOOLS],
      }),
      testimonialsRetriever: tool({
        description: "Retrieve the testimonials",
        inputSchema: emptyInputSchema,
        execute: () => TESTIMONIALS,
      }),
      experienceRetriever: tool({
        description: "Retrieve the experience",
        inputSchema: emptyInputSchema,
        execute: () => EXPERIENCE,
      }),
      navigator: tool({
        description: "Navigate to a specific route in the Portfolio",
        inputSchema: z.object({
          route: z.enum(allRoutes).describe("The route to navigate to"),
        }),
        execute: ({ route }) => route,
      }),
      externalLinkOpener: tool({
        description:
          "Open an external link. This includes social profiles (GitHub or LinkedIn), places I was featured online, project github repositories and the actual project URLs",
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
      emailSender: tool({
        description: "Send an email from the user",
        inputSchema: z.object({
          recipientEmail: z
            .string()
            .describe(
              "The email address of the sender (must be a valid email format)",
            ),
          name: z.string().describe("The name of the sender"),
          message: z.string().describe("The message to send"),
        }),
        execute: async ({ recipientEmail, name, message }) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(recipientEmail)) {
            throw new Error("Invalid email format")
          }
          try {
            await sendEmailByAI({
              recipientEmail,
              name,
              message,
            })
            return {
              recipientEmail,
              name,
              message,
            }
          } catch (error) {
            throw new Error(
              error instanceof Error ? error.message : "Unknown error occurred",
            )
          }
        },
      }),
    },
    experimental_transform: smoothStream(),
  })

  return result.toUIMessageStreamResponse()
}
