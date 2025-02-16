"use client";

import { cn } from "@heroui/theme";
import React from "react";
import { useInView } from "react-intersection-observer";

const ListItemWrapper = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });
  return (
    <li
      ref={ref}
      className={cn("z-10 opacity-0", {
        "animate-slideInFromLeft": inView && index % 2 === 0,
        "animate-slideInFromRight": inView && index % 2 !== 0,
      })}
    >
      {children}
    </li>
  );
};

export default ListItemWrapper;
