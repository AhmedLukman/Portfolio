import ContactForm from "@/components/page/contact-page/ContactForm"
import PageHeader from "@/components/wrappers/PageHeader"
import PageWrapper from "@/components/wrappers/PageWrapper"
import type { Metadata } from "next"
import Image from "next/image"
import ShakingHandsImage from "/public/assets/images/shakehands.png"

export const metadata: Metadata = {
  title: "Contact Ahmed Lukman | Full Stack Developer",
  description:
    "Get in touch with me for collaboration, job opportunities, or to discuss your project needs.",
}

const ContactPage = () => {
  return (
    <PageWrapper>
      <PageHeader>Contact me</PageHeader>
      <ContactForm />
      <Image
        src={ShakingHandsImage}
        className="absolute right-0 top-24 hidden w-80 object-contain 2xl:block"
        priority
        alt="Shaking hands with contract illustration"
      />
    </PageWrapper>
  )
}

export default ContactPage
