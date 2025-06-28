"use client"
import Image, { StaticImageData } from "next/image"
import React, { useState } from "react"
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion"
import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const AnimatedTooltip = ({
  items,
}: {
  items: (
    | {
        name: string
        src: StaticImageData
        score?: number
      }
    | {
        name: string
        icon: IconDefinition
        score?: number
      }
  )[]
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const springConfig = { stiffness: 100, damping: 5 }
  const x = useMotionValue(0) // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  )
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  )
  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const target = event.currentTarget as HTMLDivElement
    const halfWidth = target.offsetWidth / 2
    x.set(event.nativeEvent.offsetX - halfWidth) // set the x value, which is then used in transform and rotate
  }

  return (
    <ul className="flex flex-wrap gap-3">
      {items.map(({ name, score, ...rest }, idx) => (
        <li
          className="group relative"
          key={name}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -left-1/2 -top-16 z-50 flex translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                <div className="relative z-30 text-base font-bold text-white">
                  {name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex flex-col items-center justify-center gap-2">
            {"src" in rest ? (
              <Image
                priority
                onMouseMove={handleMouseMove}
                src={rest.src}
                alt={name}
                className="relative !m-0 h-11 w-11 rounded-xl border border-slate-600 object-contain object-center p-1.5 transition duration-500 group-hover:z-30 group-hover:scale-105"
              />
            ) : (
              <span
                onMouseMove={handleMouseMove}
                className="relative h-11 w-11 rounded-xl border border-slate-600 p-1.5 transition duration-500 group-hover:z-30 group-hover:scale-105"
              >
                <FontAwesomeIcon
                  icon={rest.icon}
                  className="!h-full !w-full text-body"
                />
              </span>
            )}

            {score && <span className="text-sm text-pink-200">{score}</span>}
          </div>
        </li>
      ))}
    </ul>
  )
}
