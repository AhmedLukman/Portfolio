import ContactForm from "@/components/ui/ContactForm";
import GradientBorder from "@/components/ui/GradientBorder";
import PageWrapper from "@/components/ui/PageWrapper";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <PageWrapper>
      <h1 className="text-3xl text-slate-200 text-center font-bold tracking-wide mb-1">
        Contact me
      </h1>
      <GradientBorder className="max-w-xl mx-auto" />
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
