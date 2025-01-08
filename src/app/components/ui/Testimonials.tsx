import React from "react";
import SectionHeader from "./SectionHeader";
import { TESTIMONIALS } from "@/app/lib/data";
import { AnimatedTestimonials } from "./AnimatedTestimonials";
import SectionWrapper from "../wrappers/SectionWrapper";

const Testimonials = () => {
  return (
    <SectionWrapper>
      <SectionHeader>Testimonials</SectionHeader>
      <AnimatedTestimonials testimonials={TESTIMONIALS} />
    </SectionWrapper>
  );
};

export default Testimonials;
