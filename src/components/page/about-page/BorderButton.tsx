/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Button as HeroButton } from "@heroui/button"
import { cn } from "@heroui/theme"
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion"
import React, { useRef } from "react"

export function BorderButton({
  borderRadius = "1.75rem",
  children,
  containerClassName,
  borderClassName,
  duration,
  className,
  file,
  ...otherProps
}: {
  borderRadius?: string
  children: React.ReactNode
  as?: any
  containerClassName?: string
  borderClassName?: string
  duration?: number
  className?: string
  file: string
  [key: string]: any
}) {
  return (
    <HeroButton
      as="a"
      href={`/assets/files/${file}`}
      download={file}
      className={cn(
        "relative h-10 w-32 overflow-hidden bg-transparent p-px text-xl",
        containerClassName,
      )}
      style={{
        borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(var(--color-sky-500)_40%,transparent_60%)] opacity-[0.8]",
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/80 text-sm text-white antialiased backdrop-blur-xl",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </HeroButton>
  )
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode
  duration?: number
  rx?: string
  ry?: string
  [key: string]: any
}) => {
  const pathRef = useRef<SVGRectElement | null>(null)
  const progress = useMotionValue<number>(0)

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength()
    if (length) {
      const pxPerMillisecond = length / duration
      progress.set((time * pxPerMillisecond) % length)
    }
  })

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x,
  )
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y,
  )

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  )
}
