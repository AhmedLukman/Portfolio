"use client";

import { Project } from "@/lib/types";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CanvasRevealEffect } from "./CanvasRevealEffect";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

const CaseStudy = ({ project }: { project: Project }) => {
  return (
    <section className="mt-20">
      <h2 className=" text-2xl text-center text-slate-200 font-bold">
        Case Study
      </h2>
      {/* <p className="text-slate-300 mt-4">
        <span className="font-bold block mb-1">
          <FontAwesomeIcon icon={faStar} className="text-pink-200" />{" "}
          Background:
        </span>{" "}
        Small retail businesses often struggle with managing their inventory
        efficiently, leading to stockouts or overstock situations. The existing
        manual inventory processes are time-consuming and prone to errors,
        resulting in lost sales and increased operational costs.
      </p>
      <p className="text-slate-200 mt-4">
        <span className="font-bold block mb-1">
          <FontAwesomeIcon icon={faStar} className="text-pink-200" />{" "}
          Stakeholders:
        </span>{" "}
        Small retail business owners and their employees.
      </p>
      <p className="text-slate-200 mt-4">
        <span className="font-bold block mb-1">
          <FontAwesomeIcon icon={faStar} className="text-pink-200" /> Solution:
        </span>{" "}
        An effective inventory management system can streamline operations,
        reduce costs, and improve customer satisfaction.
      </p> */}
      <div className="mt-10 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Problem"
          icon={<FontAwesomeIcon icon={faStar} />}
          des="Small retail businesses often struggle with managing their inventory
        efficiently, leading to stockouts or overstock situations. The existing
        manual inventory processes are time-consuming and prone to errors,
        resulting in lost sales and increased operational costs."
        >
          <CanvasRevealEffect
            animationSpeed={4}
            // change bg-black to bg-pink-900
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              // change the colors of the
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          des="Developed an automated inventory management system that integrates with the point-of-sale system to provide real-time inventory tracking and analytics."
          title="Solution"
          icon={<FontAwesomeIcon icon={faStar} />}
        >
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card
          title="Outcome"
          icon={<FontAwesomeIcon icon={faStar} />}
          des="Reduced stockouts by 30% and overstock by 20%, saving an average of 15 hours per month in manual inventory management tasks."
        >
          <CanvasRevealEffect
            animationSpeed={4}
            dotSize={2}
            containerClassName="bg-emerald-800 rounded-3xl overflow-hidden"
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  // add this one for the desc
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // change h-[30rem] to h-[35rem], add rounded-3xl
      className="border border-slate-600/50 group/canvas-card flex items-center justify-center
        bg-gradient-to-b from-black/20 to-black/30  max-w-sm w-full mx-auto p-4 relative lg:h-80 rounded-3xl "
      style={
        {
          //   add these two
          //   you can generate the color from here https://cssgradient.io/
          // background: "rgb(4,7,29)",
          // backgroundColor:
          //   "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }
      }
    >
      {/* change to h-10 w-10 , add opacity-30  */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          // add this for making it center
          // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          <h2 className="text-white">{title}</h2>
        </div>
        {/* <h2
          // change text-3xl, add text-center
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2> */}
        {/* add this one for the description */}
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {des}
        </p>
      </div>
    </div>
  );
};
export default CaseStudy;
