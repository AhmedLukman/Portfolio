import React from "react";
import { BackgroundGradient } from "./BackgroundGradient";
import { Button, Link } from "@nextui-org/react";

const CTA = () => {
  return (
    <section className="mt-24">
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-black/70 flex flex-col items-center gap-3">
        <h2 className="text-xl text-slate-200 font-bold text-center">
          Let&apos;s Work Together
        </h2>
        <p className="text-lg text-slate-300 text-center mb-2 max-w-prose">
          Excited to start a new project? Collaborate on an existing one? Or
          just have a chat? Get in touch today!
        </p>
        <Button as={Link} href="/contact">Contact me now</Button>
      </BackgroundGradient>
    </section>
  );
};

export default CTA;
