"use client";

import { CardBody } from "@heroui/card";
import { cn } from "@heroui/theme";
import { PropsWithChildren } from "react";
import { useInView } from "react-intersection-observer";

const MasteryBody = ({ children }: PropsWithChildren) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "absolute z-20 top-14 left-2 right-2 text-white transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100",
        inView ? "opacity-100" : "opacity-0"
      )}
    >
      <CardBody as="p">{children}</CardBody>
    </div>
  );
};

export default MasteryBody;
