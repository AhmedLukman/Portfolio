import ContactForm from "@/components/ui/ContactForm";
import GradientBorder from "@/components/ui/GradientBorder";
import PageWrapper from "@/components/ui/PageWrapper";
import React from "react";

const ContactPage = () => {
  return (
    <PageWrapper>
      <h1 className="text-3xl text-slate-200 text-center font-bold tracking-wide mb-1">
        Contact me
      </h1>
      <GradientBorder className="max-w-xl mx-auto" />
      <ContactForm />
    </PageWrapper>
  );
};

export default ContactPage;
