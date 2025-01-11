"use client";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const getRotateY = (index: number) => {
    // Use a deterministic pattern based on index
    const rotations = [8, -8, 6, -6, 4, -4];
    return rotations[index % rotations.length];
  };

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased px-4 md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 md:grid-cols-2  gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.quote}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: getRotateY(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : getRotateY(index),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: getRotateY(index),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    draggable={false}
                    fill
                    className=" rounded-3xl object-cover object-center"
                    priority={index === 0}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-xl font-bold inline-block purple-gradient">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-slate-300">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-8">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block text-slate-300"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex justify-center sm:justify-start gap-4 pt-12 md:pt-0">
            <Button
              onPress={handlePrev}
              aria-label="Previous testimonial"
              isIconOnly
              className="group/button"
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="group-hover/button:rotate-12 transition-transform duration-300"
              />
            </Button>
            <Button
              isIconOnly
              onPress={handleNext}
              aria-label="Next testimonial"
              className="group/button"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover/button:-rotate-12 transition-transform duration-300"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
