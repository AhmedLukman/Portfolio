import React from "react";
import SectionHeader from "./SectionHeader";
import { TESTIMONIALS } from "@/app/lib/data";
import { AnimatedTestimonials } from "./AnimatedTestimonials";

const Testimonials = () => {
  return (
    <section className="mt-24 space-y-8">
      <SectionHeader>Testimonials</SectionHeader>
      <AnimatedTestimonials testimonials={TESTIMONIALS} />
    </section>
  );
};

export default Testimonials;
