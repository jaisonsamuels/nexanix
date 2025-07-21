"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Smartphone, Globe, Database, Cloud, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import MouseCursor from "@/components/mouse-cursor"

export default function HomePage() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const services = [
    {
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Full-Stack Development",
      description: "End-to-end web applications with modern technologies",
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Web Solutions",
      description: "Responsive websites and progressive web apps",
    },
    {
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Database Design",
      description: "Scalable database architecture and optimization",
    },
    {
      icon: <Cloud className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Cloud Services",
      description: "Cloud deployment and infrastructure management",
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Performance Optimization",
      description: "Speed optimization and performance tuning",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden">
      <MouseCursor />

      {/* Background elements */}
      <motion.div
        className="absolute top-20 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-teal-500/10 rounded-full blur-xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-4 sm:right-10 w-32 h-32 sm:w-48 sm:h-48 bg-cyan-500/10 rounded-full blur-xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 15, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <Navbar />

      {/* Hero Section - Completely fixed for mobile */}
      <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 0.9, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Text Content - Mobile First */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                whileHover={{ scale: 1.01 }}
              >
                Digital
                <motion.span
                  className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent block sm:inline"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  {" "}
                  Innovation
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed"
              >
                We craft exceptional full-stack solutions that transform ideas into powerful digital experiences. From
                concept to deployment, we deliver innovation at every step.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 group w-full sm:w-auto"
                  >
                    <Link href="/portfolio">
                      View Our Work
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent hover:border-teal-400/50 w-full sm:w-auto"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Logo/Image Content - Properly centered and sized */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex-shrink-0 w-full max-w-sm lg:max-w-md xl:max-w-lg flex justify-center"
            >
              <div className="relative w-full max-w-[400px] h-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur-xl opacity-30"
                />

                {/* Orbiting elements */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <div className="absolute -top-3 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-teal-400 rounded-full transform -translate-x-1/2" />
                  <div className="absolute top-1/2 -right-3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full transform -translate-y-1/2" />
                  <div className="absolute -bottom-3 left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full transform -translate-x-1/2" />
                  <div className="absolute top-1/2 -left-3 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full transform -translate-y-1/2" />
                </motion.div>

                <motion.div
                  className="relative z-10 w-full h-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl flex items-center justify-center"
                  whileHover={{
                    scale: 1.03,
                    rotateY: 3,
                    rotateX: 3,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <Image
                      src="/Untitled_design.png"
                      alt="Nexanix Logo"
                      width={400}
                      height={200}
                      className="w-full h-auto max-w-full object-contain"
                      priority
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-slate-800/50 relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
              whileHover={{ scale: 1.01 }}
            >
              Our{" "}
              <motion.span
                className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
                whileHover={{
                  backgroundPosition: ["0% 50%", "100% 50%"],
                }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Services
              </motion.span>
            </motion.h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive full-stack solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  rotateY: 3,
                  z: 50,
                }}
                className="group"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-teal-500/50 transition-all duration-200 h-full relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    initial={false}
                  />
                  <CardContent className="p-4 sm:p-6 relative z-10">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -3, 3, 0],
                        y: -3,
                      }}
                      transition={{ duration: 0.2 }}
                      className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 text-white group-hover:shadow-lg group-hover:shadow-teal-500/25 transition-all duration-200"
                    >
                      {service.icon}
                    </motion.div>
                    <motion.h3
                      className="text-lg sm:text-xl font-semibold text-white mb-3"
                      whileHover={{ color: "#14b8a6" }}
                    >
                      {service.title}
                    </motion.h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-cyan-400/20"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            />
            <div className="relative z-10">
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
                whileHover={{ scale: 1.02 }}
              >
                Ready to Transform Your Ideas?
              </motion.h2>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Let's collaborate to build something extraordinary. Your vision, our expertise.
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-white text-teal-600 hover:bg-gray-100 group"
                >
                  <Link href="/contact">
                    Start Your Project
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
