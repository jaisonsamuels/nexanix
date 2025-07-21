"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function LoadingIntro() {
  const [isLoading, setIsLoading] = useState(true)
  const [showText, setShowText] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Show text after logo animation starts
    const textTimer = setTimeout(() => {
      setShowText(true)
    }, 2000)

    // Auto navigate after animation
    const navTimer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => router.push("/home"), 800)
    }, 5000)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(navTimer)
    }
  }, [router])

  const skipIntro = () => {
    setIsLoading(false)
    setTimeout(() => router.push("/home"), 300)
  }

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center"
          >
            {/* Netflix-style pulsing logo */}
            <motion.div
              className="relative flex items-center justify-center mb-16"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Main pulsing logo */}
              <motion.div
                className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center"
                animate={{
                  scale: [1, 1.15, 1],
                  filter: [
                    "drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))",
                    "drop-shadow(0 0 40px rgba(34, 197, 94, 0.8))",
                    "drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))",
                  ],
                }}
                transition={{
                  scale: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: [0.4, 0, 0.6, 1],
                  },
                  filter: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: [0.4, 0, 0.6, 1],
                  },
                }}
              >
                <Image
                  src="/nexanix-n-logo.png"
                  alt="Nexanix Logo"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                  priority
                />
              </motion.div>

              {/* Inner glow effect */}
              <motion.div
                className="absolute w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: [0.4, 0, 0.6, 1],
                }}
                style={{
                  filter: "blur(8px)",
                }}
              >
                <Image
                  src="/nexanix-n-logo.png"
                  alt="Nexanix Logo Glow"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Outer glow */}
              <motion.div
                className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(34, 197, 94, 0.1) 50%, transparent 70%)",
                  filter: "blur(20px)",
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: [0.4, 0, 0.6, 1],
                }}
              />
            </motion.div>

            {/* Company name - appears after logo animation */}
            <AnimatePresence>
              {showText && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="text-center"
                >
                  <motion.h1
                    className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-widest mb-6"
                    animate={{
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    NEXANIX
                  </motion.h1>

                  {/* Subtle underline */}
                  <motion.div
                    className="w-40 h-px mx-auto"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), rgba(34, 197, 94, 0.8), transparent)",
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{
                      delay: 0.5,
                      duration: 1.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  />

                  {/* Tagline */}
                  <motion.p
                    className="text-sm sm:text-base text-gray-400 font-light tracking-wide mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 1,
                      duration: 1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    Full-Stack Solutions & Digital Innovation
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.8 }}
              className="absolute bottom-16 text-center"
            >
              <motion.div
                className="text-xs text-gray-500 font-light tracking-wide"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                Loading Experience
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skip button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        onClick={skipIntro}
        className="fixed top-6 right-6 text-gray-500 hover:text-white transition-all duration-300 text-sm bg-black/40 px-4 py-2 rounded backdrop-blur-sm border border-gray-800 hover:border-blue-500/30"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Skip Intro
      </motion.button>

      {/* Final fade transition */}
      {!isLoading && (
        <motion.div
          className="fixed inset-0 bg-black z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      )}
    </div>
  )
}
