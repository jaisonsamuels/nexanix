"use client"

import { motion } from "framer-motion"
import { Users, Target, Award, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import MouseCursor from "@/components/mouse-cursor"

export default function AboutPage() {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring their vision becomes reality.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We deliver high-quality solutions that exceed expectations and drive results.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Integrity",
      description: "We build trust through transparency, reliability, and ethical business practices.",
    },
  ]

  const team = [
    {
      name: "Jaison Samuel S",
      role: "CEO & Full-Stack Developer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Jeffrey Ryan R",
      role: "CTO & System Architect",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Hari siva balan ",
      role: "Lead Frontend Developer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Essaki Ponraj M",
      role: "Backend Developer",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden">
      <MouseCursor />

      {/* Faster floating background elements */}
      <motion.div
        className="absolute top-32 right-20 w-24 h-24 bg-teal-500/10 rounded-full blur-xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6"
              whileHover={{ scale: 1.01 }}
            >
              About{" "}
              <motion.span
                className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
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
                Nexanix
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              We are a passionate team of full-stack developers dedicated to creating innovative digital solutions that
              empower businesses to thrive in the digital age.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section with faster animations */}
      <section className="py-16 sm:py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
                whileHover={{ color: "#14b8a6" }}
              >
                Our Story
              </motion.h2>
              <motion.p
                className="text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Founded in 2024, Nexanix emerged from a simple belief: that exceptional software should be accessible to
                businesses of all sizes. Our journey began when our founders, experienced developers   
                recognized the gap between complex enterprise solutions and the needs of growing businesses.
              </motion.p>
              <motion.p
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Today, we've started a dynamic team of full-stack developers, designers, and strategists who share a
                common passion for creating digital experiences that make a difference. We've helped over more clients
                transform their ideas into successful digital products.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "3", label: "Projects Completed", gradient: "from-teal-500 to-cyan-600" },
                  { number: "3", label: "Happy Clients", gradient: "from-cyan-500 to-teal-600" },
                  { number: "1", label: "Years Experience", gradient: "from-teal-500 to-blue-600" },
                  { number: "24/7", label: "Support", gradient: "from-cyan-500 to-teal-600" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.03,
                      rotateY: 5,
                      z: 50,
                    }}
                    whileTap={{ scale: 0.97 }}
                    className={`bg-gradient-to-br ${stat.gradient} p-6 rounded-xl text-white text-center cursor-pointer`}
                    style={{ transformStyle: "preserve-3d" }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="text-3xl font-bold mb-2"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.3,
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section with faster hover effects */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
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
                Values
              </motion.span>
            </motion.h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
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
                  <CardContent className="p-6 text-center relative z-10">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        y: -3,
                      }}
                      transition={{ duration: 0.2 }}
                      className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 text-white mx-auto group-hover:shadow-lg group-hover:shadow-teal-500/25"
                    >
                      {value.icon}
                    </motion.div>
                    <motion.h3 className="text-xl font-semibold text-white mb-3" whileHover={{ color: "#14b8a6" }}>
                      {value.title}
                    </motion.h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with faster animations */}
      <section className="py-16 sm:py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
              whileHover={{ scale: 1.01 }}
            >
              Meet Our{" "}
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
                Team
              </motion.span>
            </motion.h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">The talented individuals behind Nexanix</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                }}
                className="text-center group"
              >
                <div className="relative mb-4">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                    }}
                    className="w-32 sm:w-48 h-32 sm:h-48 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-teal-500 to-cyan-600 p-1 relative"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover bg-slate-700"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Faster floating particles */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-1.5 h-1.5 sm:w-3 sm:h-3 bg-teal-400 rounded-full"
                      animate={{
                        y: [-3, 3, -3],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.1,
                      }}
                    />
                  </motion.div>
                </div>
                <motion.h3 className="text-xl font-semibold text-white mb-2" whileHover={{ color: "#14b8a6" }}>
                  {member.name}
                </motion.h3>
                <motion.p className="text-teal-400" whileHover={{ scale: 1.02 }}>
                  {member.role}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
