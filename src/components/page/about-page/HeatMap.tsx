"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const HeatMap = () => {
  // Generate points with delays in useState initializer (allowed to be impure)
  const [points] = useState(() =>
    Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      intensity: Math.random(),
      delay: Math.random() * 2,
    }))
  )

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
