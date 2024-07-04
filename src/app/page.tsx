import React from "react";
import PageWrapper from "@/components/ui/PageWrapper";
import Testimonials from "@/components/ui/Testimonials";
import CTA from "@/components/ui/CTA";
import Introduction from "@/components/page/home-page/Introduction";
import GradientBorder from "@/components/ui/GradientBorder";
import TechAndTools from "@/components/page/home-page/TechAndTools";
import AnimatedWords from "@/components/page/home-page/AnimatedWords";

export default function Home() {
  return (
    <PageWrapper>
      <h1 className="text-3xl text-slate-200 text-center font-bold tracking-wide mb-1">
        Ahmed Lukman{" "}
        <span className="purple-gradient-text">| Full Stack Developer</span>
      </h1>
      <GradientBorder className="max-w-2xl mx-auto" />
      <Introduction />
      <TechAndTools />
      <Testimonials />
     <AnimatedWords />
      <CTA />
    </PageWrapper>
  );
}
