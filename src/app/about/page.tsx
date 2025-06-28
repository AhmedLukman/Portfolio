import Certifications from "@/components/page/about-page/Certifications";
import Experience from "@/components/page/about-page/Experience";
import Introduction from "@/components/page/about-page/Introduction";
import Mastery from "@/components/page/about-page/Mastery";
import WhyStandOut from "@/components/page/about-page/WhyStandOut";
import PageHeader from "@/components/wrappers/PageHeader";
import PageWrapper from "@/components/wrappers/PageWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ahmed Lukman | Skills & Experience",
  description:
    "Learn about my background, skills, and experience as a full stack developer specializing in modern web technologies.",
};

const AboutPage = () => {
  return (
    <PageWrapper>
      <PageHeader>About me</PageHeader>
      <Introduction />
      <Mastery />
      <WhyStandOut />
      <Experience />
      <Certifications />
    </PageWrapper>
  );
};

export default AboutPage;
