import { Project } from "@/lib/types";
import React from "react";
import { CanvasRevealEffect } from "./CanvasRevealEffect";
import CaseStudyCard from "./CaseStudyCard";
import {
  faExclamationTriangle,
  faLightbulb,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const CaseStudy = ({ project }: { project: Project }) => {
  return (
    <section className="mt-20">
      <h2 className=" text-2xl text-center text-slate-200 font-bold">
        Case Study
      </h2>
      <div className="mt-10 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <CaseStudyCard
          icon={faExclamationTriangle}
          className="animate-slideInFromBottom"
          title="Problem"
          des="Small retail businesses often struggle with managing their inventory
        efficiently, leading to stockouts or overstock situations. The existing
        manual inventory processes are time-consuming and prone to errors,
        resulting in lost sales and increased operational costs."
        >
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </CaseStudyCard>
        <CaseStudyCard
          icon={faLightbulb}
          className="animate-slideInFromBottom delay-500"
          des="Developed an automated inventory management system that integrates with the point-of-sale system to provide real-time inventory tracking and analytics."
          title="Solution"
        >
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </CaseStudyCard>
        <CaseStudyCard
          icon={faThumbsUp}
          className="animate-slideInFromBottom delay-1000"
          title="Outcome"
          des="Reduced stockouts by 30% and overstock by 20%, saving an average of 15 hours per month in manual inventory management tasks."
        >
          <CanvasRevealEffect
            animationSpeed={4}
            dotSize={2}
            containerClassName="bg-emerald-800 rounded-3xl overflow-hidden"
          />
        </CaseStudyCard>
      </div>
    </section>
  );
};

export default CaseStudy;
