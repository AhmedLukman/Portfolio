"use client"

import { motion } from "framer-motion"

function createPoints() {
  // A fixed seed gives the server and browser the same animated pattern.
  let seed = 42
  const next = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0
    return seed / 2 ** 32
  }

  return Array.from({ length: 30 }, () => ({
    x: next() * 100,
    y: next() * 100,
    intensity: next(),
    delay: next() * 2,
  }))
}

const points = createPoints()

const HeatMap = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-transparent">
      {points.map((point, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            width: "30px",
            height: "30px",
            opacity: point.intensity * 0.5,
            filter: "blur(10px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [
              point.intensity * 0.3,
              point.intensity * 0.6,
              point.intensity * 0.3,
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: point.delay,
          }}
        />
      ))}
    </div>
  )
}

export default HeatMap
