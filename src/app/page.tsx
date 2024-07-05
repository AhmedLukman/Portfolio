import React from "react";
import PageWrapper from "@/components/ui/PageWrapper";
import Testimonials from "@/components/ui/Testimonials";
import CTA from "@/components/ui/CTA";
import Introduction from "@/components/page/home-page/Introduction";
import TechAndTools from "@/components/page/home-page/TechAndTools";
import AnimatedWords from "@/components/page/home-page/AnimatedWords";
import PageHeader from "@/components/ui/PageHeader";

export default function Home() {
  return (
    <PageWrapper>
      <PageHeader className="max-w-2xl">
        Ahmed Lukman{" "}
        <span className="purple-gradient-text">| Full Stack Developer</span>
      </PageHeader>
      <Introduction />
      <TechAndTools />
      <Testimonials />
      <AnimatedWords />
      <CTA />
    </PageWrapper>
  );
}
