import React from "react";
import PageWrapper from "@/components/ui/PageWrapper";
import Testimonials from "@/components/ui/Testimonials";
import CTA from "@/components/ui/CTA";
import Introduction from "@/components/page/home-page/Introduction";
import TechAndTools from "@/components/page/home-page/TechAndTools";
import AnimatedWords from "@/components/page/home-page/AnimatedWords";
import HomeHeader from "@/components/page/home-page/HomeHeader";

export default function Home() {
  return (
    <PageWrapper>
      <HomeHeader />
      <Introduction />
      <TechAndTools />
      <Testimonials />
      <AnimatedWords />
      <CTA />
    </PageWrapper>
  );
}
