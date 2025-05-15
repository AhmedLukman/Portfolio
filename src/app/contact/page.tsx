import Image from "next/image";
import type { Metadata } from "next";
import PageWrapper from "@/components/wrappers/PageWrapper";
import PageHeader from "@/components/wrappers/PageHeader";
import ContactForm from "@/components/page/contact-page/ContactForm";
import ShakingHandsImage from "/public/assets/images/shakehands.png"

export const metadata: Metadata = {
  title: "Contact Ahmed Lukman | Full Stack Developer",
  description: "Get in touch with me for collaboration, job opportunities, or to discuss your project needs.",
};

const ContactPage = () => {
  return (
    <PageWrapper>
      <PageHeader>Contact me</PageHeader>
      <ContactForm />
      <Image
        src={ShakingHandsImage}
        className="object-contain absolute right-0 top-24 hidden 2xl:block w-80"
        priority
        alt="Shaking hands with contract illustration"
      />
    </PageWrapper>
  );
};

export default ContactPage;
