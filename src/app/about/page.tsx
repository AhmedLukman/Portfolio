import Certifications from "@/components/page/about/Certifications";
import Experience from "@/components/page/about/Experience";
import Introduction from "@/components/page/about/Introduction";
import Mastery from "@/components/page/about/Mastery";
import WhyChoose from "@/components/page/about/WhyChoose";
import PageHeader from "@/components/ui/PageHeader";
import PageWrapper from "@/components/ui/PageWrapper";
import React from "react";

const AboutPage = () => {
  return (
    <PageWrapper>
      <PageHeader>About me</PageHeader>
      <Introduction />
      <Mastery />
      <WhyChoose />
      <Experience />
      <Certifications />
    </PageWrapper>
  );
};

export default AboutPage;
