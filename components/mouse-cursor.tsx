"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export default function MouseCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Faster, more responsive spring settings
  const springX = useSpring(mouseX, { stiffness: 500, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 500, damping: 25 })
  const trailingSpringX = useSpring(mouseX, { stiffness: 200, damping: 20 })
  const trailingSpringY = useSpring(mouseY, { stiffness: 200, damping: 20 })

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    // Only add mouse events on non-mobile devices
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("resize", checkMobile)
    }
  }, [mouseX, mouseY, isMobile])

  // Don't render on mobile devices
  if (!isVisible || isMobile) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-teal-400/60 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-teal-400/30 rounded-full pointer-events-none z-40 hidden md:block"
        style={{
          x: trailingSpringX,
          y: trailingSpringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  )
}
