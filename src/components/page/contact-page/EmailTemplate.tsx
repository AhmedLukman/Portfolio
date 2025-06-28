import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Text,
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"
import * as React from "react"

export const EmailTemplate: React.FC<
  Readonly<{ name: string; recipientEmail: string; message: string }>
> = ({ name, recipientEmail, message }) => (
  <Tailwind>
    <Html>
      <Head />
      <Body className="bg-[#262c35]">
        <Container className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-lg">
          <Heading className="text-2xl font-bold text-[#0a0e14]">
            Contact Form Submission
          </Heading>
          <Text className="mt-4 text-slate-600">
            You have a new contact form submission from your portfolio:
          </Text>
          <Text className="mt-6 font-bold text-slate-800">Name:</Text>
          <Text className="text-slate-600">{name}</Text>
          <Text className="mt-4 font-bold text-slate-800">Email:</Text>
          <Text className="text-slate-600">{recipientEmail}</Text>
          <Text className="mt-4 font-bold text-slate-800">Message:</Text>
          <Text className="text-slate-600">{message}</Text>
        </Container>
      </Body>
    </Html>
  </Tailwind>
)
