import ContactForm from "@/components/page/contact/ContactForm";
import ContactHeader from "@/components/page/contact/ContactHeader";
import GradientBorder from "@/components/ui/GradientBorder";
import PageWrapper from "@/components/ui/PageWrapper";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <PageWrapper>
      <ContactHeader />
      <GradientBorder className="max-w-xl mx-auto mt-1" />
      <ContactForm />
      <Image
        src="/assets/images/shakehands.png"
        className="object-contain absolute right-0 bottom-0"
        priority
        width={300}
        height={480}
        alt="Shaking hands with contract illustration"
      />
    </PageWrapper>
  );
};

export default ContactPage;
