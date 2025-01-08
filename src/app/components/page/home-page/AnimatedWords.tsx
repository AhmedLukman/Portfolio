import { WEB_QUALITIES } from "@/app/lib/data";
import React from "react";
import { FlipWords } from "./FlipWords";
import SectionWrapper from "../../wrappers/SectionWrapper";

const AnimatedWords = () => {
  return (
    <SectionWrapper>
      <p className="text-slate-400 text-2xl">
        Let&apos;s build <br />
        <FlipWords words={WEB_QUALITIES} />
      </p>
    </SectionWrapper>
  );
};

export default AnimatedWords;
