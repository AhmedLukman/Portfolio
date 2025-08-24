/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { cn } from "@heroui/theme"
import React from "react"
import { useInView } from "react-intersection-observer"

type Props = {
  children: React.ReactNode
  index: number
  as?: any
  className?: string
}

const ItemWrapper = ({
  children,
  index,
  as: Component = "li",
  className,
}: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  })

  return (
    <Component
      ref={ref}
      className={cn(
        "z-10 opacity-0",
        {
          "animate-slide-in-from-left": inView && index % 2 === 0,
          "animate-slide-in-from-right": inView && index % 2 !== 0,
        },
        className,
      )}
    >
      {children}
    </Component>
  )
}

export default ItemWrapper
