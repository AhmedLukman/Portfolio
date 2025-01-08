import { cn } from "@nextui-org/theme";
import React, { PropsWithChildren } from "react";
import GradientBorder from "../ui/GradientBorder";

const PageHeader = ({
  children,
  borderClassName = "max-w-xl",
}: PropsWithChildren & {
  borderClassName?: string;
}) => {
  return (
    <header>
      <h1 className="text-2xl lg:text-3xl text-slate-200 text-center font-bold tracking-wide mb-1">
        {children}
      </h1>
      <GradientBorder className={cn("mx-auto", borderClassName)} />
    </header>
  );
};

export default PageHeader;
