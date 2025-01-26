import { cn } from "@heroui/theme";
import React, { PropsWithChildren } from "react";

const SectionHeader = ({
  children,
  className,
}: PropsWithChildren & {
  className?: string;
}) => {
  return (
    <h2 className={cn(" text-xl lg:text-2xl text-slate-200 font-semibold", className)}>
      {children}
    </h2>
  );
};

export default SectionHeader;
