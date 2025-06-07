"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@heroui/theme";

const CaseStudyCard = ({
  title,
  children,
  className,
  icon,
  description,
}: {
  title: string;
  children?: React.ReactNode;
  icon: IconDefinition;
  className?: string;
  description: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "border border-slate-600/50 group/canvas-card flex items-center opacity-0 justify-center bg-gradient-to-b from-black/20 to-black/30  max-w-sm w-full mx-auto p-4 lg:p-0 xl:p-4 relative lg:h-80 rounded-3xl",
        inView && className
      )}
    >
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

      <div className="relative z-20 px-5">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center gap-2 justify-center"
        >
          <h3 className="text-white text-lg">{title}</h3>
          <FontAwesomeIcon icon={icon} className="text-white" />
        </div>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {description}
        </p>
      </div>
    </div>
  );
};
export default CaseStudyCard;
