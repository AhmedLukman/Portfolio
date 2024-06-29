import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";
import { TESTIMONIALS } from "@/lib/constants";

const Testimonials = () => {
  return (
    <section className="mt-24 space-y-6">
      <h2 className=" text-xl text-slate-200 font-bold">Testimonials</h2>
      <InfiniteMovingCards
        items={TESTIMONIALS}
        direction="right"
        speed="slow"
      />
    </section>
  );
};

export default Testimonials;
