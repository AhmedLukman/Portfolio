import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";
import { TESTIMONIALS } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const Testimonials = () => {
  return (
    <section className="mt-24 space-y-8">
      <SectionHeader>Testimonials</SectionHeader>
      <InfiniteMovingCards
        items={TESTIMONIALS}
        direction="right"
        speed="slow"
      />
    </section>
  );
};

export default Testimonials;
