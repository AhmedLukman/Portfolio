import { cn } from "@heroui/theme";
import React from "react";

const GradientBorder = ({
  insetClass = 'inset-x-20',
  pinkHeightClass = 'h-[5px]',
  className
}: {
  insetClass?: string;
  pinkHeightClass?: string;
  className?: string;
}) => {
  return (
    <div className={"relative " + className}>
      <div
        className={cn(
          "absolute top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px]  blur-sm",
          insetClass
        )}
      />
      <div
        className={cn(
          "absolute top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px",
          insetClass
        )}
      />
      <div
        className={cn(
          "absolute inset-x-40 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent blur-sm",
          pinkHeightClass
        )}
      />
      <div className="absolute inset-x-40 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-px" />
    </div>
  );
};

export default GradientBorder;
