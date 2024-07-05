import GradientBorder from '@/components/ui/GradientBorder';
import { cn } from '@nextui-org/react';
import React, { PropsWithChildren } from 'react'

const PageHeader = ({children, className = "max-w-xl"}: PropsWithChildren & {
  className?: string
}) => {
  return (
    <header>
      <h1 className="text-3xl text-slate-200 text-center font-bold tracking-wide mb-1">
        {children}
      </h1>
      <GradientBorder className={cn("mx-auto", className)} />
    </header>
  );
}

export default PageHeader