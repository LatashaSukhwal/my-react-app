"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import TypeAnimation from "./TypeAnimation"
import CustomCursor from "./CustonCursor"

export default function AboutPage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [hoveredElement, setHoveredElement] = useState<string | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <CustomCursor position={cursorPosition} />

      <div className="container mx-auto px-4 md:px-10 lg:px-24 pt-12 md:pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[10vw] leading-none font-semibold tracking-tight text-black"
        >
          <span className="block">Our</span>
          <span className="italic font-light">philosophy</span>.
        </motion.h1>
      </div>


      <div className="container mx-auto px-4 lg:px-24 py-12 md:py-24 max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="relative aspect-video w-[300px] md:w-[400px] md:h-[400px] h-[300px] xl:w-[500px] xl:h-[500px] overflow-hidden">
            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
              <source src="https://cuberto.com/assets/home/summary/2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div
            className="space-y-6"
            onMouseEnter={() => setHoveredElement("text")}
            onMouseLeave={() => setHoveredElement(null)}
          >
            <motion.div
              className="text-2xl text-black"
              animate={{
                scale: hoveredElement === "text" ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <TypeAnimation
                text="In our team, developers work alongside designers, strategists and analysts. Cuberto doesn't do cookie-cutter solutions and we build products exactly as they were during the design phase, no short cuts or simplifications."
                typingSpeed={20}
              />

              <div className="mt-6">
                <TypeAnimation
                  text="We're driven by user‑centered design that drives productivity and increases revenue. Our expertise and ingenuity are remarkable, yet we always strive to outdo and outperform our previous achievements."
                  startDelay={4000}
                  typingSpeed={20}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

