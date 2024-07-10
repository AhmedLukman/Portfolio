import Introduction from "@/components/page/about/Introduction";
import Mastery from "@/components/page/about/Mastery";
import WhyChoose from "@/components/page/about/WhyChoose";
import { World } from "@/components/ui/Globe";
import PageHeader from "@/components/ui/PageHeader";
import PageWrapper from "@/components/ui/PageWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import React from "react";

const AboutPage = () => {
  return (
    <PageWrapper>
      <PageHeader>About me</PageHeader>
      <Introduction />
    </PageWrapper>
  );
};

export default AboutPage;
