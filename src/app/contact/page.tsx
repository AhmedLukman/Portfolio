import ContactForm from "@/components/page/contact/ContactForm";
import PageWrapper from "@/components/ui/PageWrapper";
import Image from "next/image";
import React from "react";
import PageHeader from "@/components/ui/PageHeader";

const ContactPage = () => {
  return (
    <PageWrapper>
      <PageHeader>Contact me</PageHeader>
      <ContactForm />
      <Image
        src="/assets/images/shakehands.png"
        className="object-contain absolute right-0 top-24"
        priority
        width={300}
        height={480}
        alt="Shaking hands with contract illustration"
      />
    </PageWrapper>
  );
};

export default ContactPage;
