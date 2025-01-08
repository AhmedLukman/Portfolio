import { WEB_QUALITIES } from "@/app/lib/data";
import React from "react";
import { FlipWords } from "./FlipWords";

const AnimatedWords = () => {
  return (
    <section className="mt-24">
      <p className="text-slate-400 text-2xl">
        Let&apos;s build <br />
        <FlipWords words={WEB_QUALITIES} />
      </p>
    </section>
  );
};

export default AnimatedWords;
