import { cn } from "@nextui-org/react";
import React, { PropsWithChildren } from "react";

const SectionHeader = ({
  children,
  className,
}: PropsWithChildren & {
  className?: string;
}) => {
  return (
    <h2 className={cn(" text-2xl text-slate-200 font-bold", className)}>
      {children}
    </h2>
  );
};

export default SectionHeader;
