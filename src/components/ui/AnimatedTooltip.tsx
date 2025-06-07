"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AnimatedTooltip = ({
  items,
}: {
  items: (
    | {
        name: string;
        src: StaticImageData;
        score?: number;
      }
    | {
        name: string;
        icon: IconDefinition;
        score?: number;
      }
  )[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = event.currentTarget as HTMLDivElement;
    const halfWidth = target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <ul className="flex gap-3 flex-wrap">
      {items.map(({ name, score, ...rest }, idx) => (
        <li
          className="relative group"
          key={name}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base">
                  {name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className=" flex flex-col items-center justify-center gap-2">
            {"src" in rest ? (
              <Image
                priority
                onMouseMove={handleMouseMove}
                src={rest.src}
                alt={name}
                className="object-contain !m-0 p-1.5 object-center rounded-xl h-11 w-11 border group-hover:scale-105 group-hover:z-30 border-slate-600  relative transition duration-500"
              />
            ) : (
              <span
                onMouseMove={handleMouseMove}
                className="relative h-11 w-11 p-1.5 border border-slate-600 rounded-xl transition duration-500 group-hover:scale-105 group-hover:z-30"
              >
                <FontAwesomeIcon
                  icon={rest.icon}
                  className="!h-full !w-full text-body"
                />
              </span>
            )}

            {score && <span className="text-sm text-pink-200">{score}</span>}
          </div>
        </li>
      ))}
    </ul>
  );
};
