"use client"

import { motion } from "framer-motion"

interface CustomCursorProps {
  position: { x: number; y: number }
}

export default function CustomCursor({ position }: CustomCursorProps) {
  return (
    <motion.div
      className="fixed pointer-events-none z-50 h-4 w-4 rounded-full bg-black"
      animate={{
        x: position.x - 8,
        y: position.y - 8,
      }}
      transition={{
        type: "spring",
        damping: 15, 
        stiffness: 500, 
        mass: 0.3,
      }}
    />
  )
}

