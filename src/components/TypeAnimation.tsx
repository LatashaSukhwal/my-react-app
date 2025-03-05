"use client"

import { useState, useEffect } from "react"

interface TypeAnimationProps {
  text: string
  typingSpeed?: number
  startDelay?: number
}

export default function TypeAnimation({ text, typingSpeed = 30, startDelay = 0 }: TypeAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startTyping, setStartTyping] = useState(false)

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStartTyping(true)
    }, startDelay)

    return () => clearTimeout(delayTimer)
  }, [startDelay])

  useEffect(() => {
    if (!startTyping) return

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, typingSpeed)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, typingSpeed, startTyping])

  return (
    <span className="inline-block">
      {displayedText}
      {currentIndex < text.length && startTyping && (
        <span className="inline-block h-4 w-0.5 -mb-0.5 bg-black animate-blink ml-0.5"></span>
      )}
    </span>
  )
}

