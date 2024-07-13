import Certifications from "@/components/page/about/Certifications";
import Experience from "@/components/page/about/Experience";
import Introduction from "@/components/page/about/Introduction";
import Mastery from "@/components/page/about/Mastery";
import PageHeader from "@/components/ui/PageHeader";
import PageWrapper from "@/components/ui/PageWrapper";
import dynamic from "next/dynamic";
import React from "react";

const WhyChoose = dynamic(
  () => import("@/components/page/about/WhyChoose"),
  {
    ssr: false,
  }
);

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
