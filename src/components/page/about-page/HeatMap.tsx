"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeatMap = () => {
  const [points, setPoints] = useState<
    { x: number; y: number; intensity: number }[]
  >([]);

  const generatePoints = (count: number) => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      intensity: Math.random(),
    }));
  };

  useEffect(() => {
    setPoints(generatePoints(30));
  }, []);

  if (points.length === 0) return null;

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
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default HeatMap;
