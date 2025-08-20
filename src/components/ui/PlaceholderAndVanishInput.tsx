/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Button } from "@heroui/button"
import { cn } from "@heroui/react"
import { ChatStatus } from "ai"
import { AnimatePresence, motion } from "framer-motion"
import { useCallback, useEffect, useRef, useState } from "react"

export function PlaceholdersAndVanishInput({
  placeholders,
  onChangeAction,
  onSubmitAction,
  status,
}: {
  placeholders: string[]
  onChangeAction: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmitAction: (e: React.FormEvent<HTMLFormElement>) => void
  status: ChatStatus
}) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const startAnimation = useCallback(() => {
    if (intervalRef.current) return
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length)
    }, 3000)
  }, [placeholders.length])
  const handleVisibilityChange = useCallback(() => {
    if (document.visibilityState !== "visible" && intervalRef.current) {
      clearInterval(intervalRef.current) // Clear the interval when the tab is not visible
      intervalRef.current = null
    } else if (document.visibilityState === "visible") {
      startAnimation() // Restart the interval when the tab becomes visible
    }
  }, [startAnimation])

  useEffect(() => {
    startAnimation()
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [handleVisibilityChange, placeholders, startAnimation])

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const newDataRef = useRef<any[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState("")
  const [animating, setAnimating] = useState(false)

  const draw = useCallback(() => {
    if (!inputRef.current) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 800
    canvas.height = 800
    ctx.clearRect(0, 0, 800, 800)
    const computedStyles = getComputedStyle(inputRef.current)

    const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"))
    ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`
    const headingColor = computedStyles.getPropertyValue("--color-heading")
    ctx.fillStyle = headingColor
    ctx.fillText(value, 16, 40)

    const imageData = ctx.getImageData(0, 0, 800, 800)
    const pixelData = imageData.data
    const newData: any[] = []

    for (let t = 0; t < 800; t++) {
      const i = 4 * t * 800
      for (let n = 0; n < 800; n++) {
        const e = i + 4 * n
        if (
          pixelData[e] !== 0 &&
          pixelData[e + 1] !== 0 &&
          pixelData[e + 2] !== 0
        ) {
          newData.push({
            x: n,
            y: t,
            color: [
              pixelData[e],
              pixelData[e + 1],
              pixelData[e + 2],
              pixelData[e + 3],
            ],
          })
        }
      }
    }

    newDataRef.current = newData.map(({ x, y, color }) => ({
      x,
      y,
      r: 1,
      color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
    }))
  }, [value])

  useEffect(() => {
    draw()
  }, [value, draw])

  const animate = (start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr = []
        for (let i = 0; i < newDataRef.current.length; i++) {
          const current = newDataRef.current[i]
          if (current.x < pos) {
            newArr.push(current)
          } else {
            if (current.r <= 0) {
              current.r = 0
              continue
            }
            current.x += Math.random() > 0.5 ? 1 : -1
            current.y += Math.random() > 0.5 ? 1 : -1
            current.r -= 0.05 * Math.random()
            newArr.push(current)
          }
        }
        newDataRef.current = newArr
        const ctx = canvasRef.current?.getContext("2d")
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800)
          newDataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color: color } = t
            if (n > pos) {
              ctx.beginPath()
              ctx.rect(n, i, s, s)
              ctx.fillStyle = color
              ctx.strokeStyle = color
              ctx.stroke()
            }
          })
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8)
        } else {
          setValue("")
          setAnimating(false)
        }
      })
    }
    animateFrame(start)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Enter" &&
      !animating &&
      status === "ready" &&
      inputRef.current &&
      inputRef.current.value.trim().length > 0
    ) {
      vanishAndSubmit()
    }
  }

  const vanishAndSubmit = () => {
    setAnimating(true)
    draw()

    const value = inputRef.current?.value || ""
    if (value && inputRef.current) {
      const maxX = newDataRef.current.reduce(
        (prev, current) => (current.x > prev ? current.x : prev),
        0,
      )
      animate(maxX)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmitAction(e)
    vanishAndSubmit()
  }
  return (
    <form
      className={cn(
        "relative mx-auto h-12 w-full max-w-xl overflow-hidden rounded-full border-2 border-blue-500 p-[1px] shadow-[0px_8px_25px_-5px_rgba(59,130,246,0.3),_0px_4px_12px_-2px_rgba(147,51,234,0.2)] transition-all duration-300 hover:shadow-[0px_12px_35px_-5px_rgba(59,130,246,0.4),_0px_6px_16px_-2px_rgba(147,51,234,0.3)]",
      )}
      onSubmit={handleSubmit}
    >
      <div
        className={cn(
          "relative h-full w-full rounded-2xl border border-white/10 backdrop-blur-xl transition-all duration-300",
          "bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80",
          "shadow-[0_8px_32px_rgba(59,130,246,0.12),_0_4px_16px_rgba(147,51,234,0.08)]",
          value && "bg-slate-800/95",
        )}
      >
        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />

        <canvas
          className={cn(
            "pointer-events-none absolute top-[20%] left-2 origin-top-left scale-50 transform pr-20 text-base sm:left-8",
            !animating ? "opacity-0" : "opacity-100",
          )}
          ref={canvasRef}
        />
        <input
          onChange={(e) => {
            if (!animating) {
              setValue(e.target.value)
              onChangeAction(e)
            }
          }}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          value={value}
          type="text"
          className={cn(
            "text-heading relative z-50 h-full w-full rounded-full border-none bg-transparent pr-20 pl-4 text-sm focus:ring-0 focus:outline-none sm:pl-10 sm:text-base",
            animating && "text-transparent",
          )}
        />

        <Button
          isDisabled={
            !value || status === "streaming" || status === "submitted"
          }
          isIconOnly
          size="sm"
          type="submit"
          className="absolute top-1/2 right-2 z-50 flex -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/80 to-purple-600/80 shadow-lg transition-all duration-200 hover:scale-105 disabled:from-transparent disabled:to-transparent disabled:hover:scale-100"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-heading h-4 w-4"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path
              d="M5 12l14 0"
              initial={{
                strokeDasharray: "50%",
                strokeDashoffset: "50%",
              }}
              animate={{
                strokeDashoffset: value ? 0 : "50%",
              }}
              transition={{
                duration: 0.3,
                ease: "linear",
              }}
            />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </motion.svg>
        </Button>

        <div className="pointer-events-none absolute inset-0 flex items-center rounded-full">
          <AnimatePresence mode="wait">
            {!value && (
              <motion.p
                initial={{
                  y: 5,
                  opacity: 0,
                }}
                key={`current-placeholder-${currentPlaceholder}`}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -15,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "linear",
                }}
                className="w-[calc(100%-2rem)] truncate pl-4 text-left text-sm font-normal text-gray-400 sm:pl-12 sm:text-base"
              >
                {placeholders[currentPlaceholder]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </form>
  )
}
