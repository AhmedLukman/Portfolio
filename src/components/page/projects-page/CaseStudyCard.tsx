"use client"

import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { cn } from "@heroui/theme"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

const CaseStudyCard = ({
  title,
  children,
  className,
  icon,
  description,
}: {
  title: string
  children?: React.ReactNode
  icon: IconDefinition
  className?: string
  description: string
}) => {
  const [hovered, setHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // md breakpoint
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) setHovered(inView)
    else setHovered(false)
  }, [inView, isMobile])

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      className={cn(
        "group/canvas-card relative mx-auto flex h-56 w-full max-w-sm items-center justify-center rounded-3xl border border-slate-600/50 bg-linear-to-b from-black/20 to-black/30 p-4 opacity-0 lg:h-80 lg:p-0 xl:p-4",
        className,
      )}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-5">
        <div
          className={cn(
            "absolute top-[50%] left-[50%] mx-auto flex min-w-40 translate-x-[-50%] translate-y-[-50%] items-center justify-center gap-2 text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0",
            hovered && isMobile && "-translate-y-4 opacity-0",
          )}
        >
          <h3 className="text-lg text-white">{title}</h3>
          <FontAwesomeIcon icon={icon} className="text-white" />
        </div>
        <p
          className={cn(
            "relative z-10 mt-4 text-center text-sm transition duration-200 group-hover/canvas-card:-translate-y-2 sm:opacity-0 sm:group-hover/canvas-card:opacity-100",
            inView ? "opacity-100" : "opacity-0",
          )}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
export default CaseStudyCard
