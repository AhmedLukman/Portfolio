import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"
import * as React from "react"

export const EmailTemplate: React.FC<
  Readonly<{ name: string; recipientEmail: string; message: string }>
> = ({ name, recipientEmail, message }) => {
  const previewText = `New portfolio message from ${name}`

  return (
    <Html lang="en">
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="m-0 bg-slate-100 px-4 py-10 font-sans">
          <Container className="mx-auto max-w-[640px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Section className="bg-[#111827] px-8 py-7">
              <Text className="m-0 text-xs font-semibold tracking-[0.18em] text-[#d946ef] uppercase">
                Portfolio Contact
              </Text>
              <Heading
                as="h1"
                className="m-0 mt-3 text-2xl leading-8 font-bold text-white"
              >
                New contact form submission
              </Heading>
              <Text className="m-0 mt-3 text-base leading-6 text-slate-300">
                Someone reached out from ahmedlukman.dev.
              </Text>
            </Section>

            <Section className="px-8 py-7">
              <Text className="m-0 text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">
                Sender
              </Text>
              <Text className="m-0 mt-2 text-xl leading-7 font-semibold text-slate-950">
                {name}
              </Text>
              <Link
                href={`mailto:${recipientEmail}`}
                className="mt-1 inline-block text-sm font-medium text-[#7c3aed] no-underline"
              >
                {recipientEmail}
              </Link>

              <Hr className="my-7 border-slate-200" />

              <Text className="m-0 text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">
                Message
              </Text>
              <Section className="mt-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
                <Text className="m-0 text-base leading-7 whitespace-pre-wrap text-slate-800">
                  {message}
                </Text>
              </Section>

              <Link
                href={`mailto:${recipientEmail}?subject=Re: Contact form submission from ${encodeURIComponent(name)}`}
                className="mt-7 inline-block rounded-xl bg-[#7c3aed] px-5 py-3 text-center text-sm font-semibold text-white no-underline"
              >
                Reply to {name}
              </Link>
            </Section>

            <Section className="border-t border-slate-200 bg-slate-50 px-8 py-5">
              <Text className="m-0 text-xs leading-5 text-slate-500">
                Sent from the contact form on Ahmed Lukman&apos;s portfolio.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
