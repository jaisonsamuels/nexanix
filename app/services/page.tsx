"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Globe, Database, Cloud, Zap, Shield, Headphones } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import MouseCursor from "@/components/mouse-cursor"

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Full-Stack Development",
      description:
        "Complete web application development from frontend to backend, using modern frameworks like React, Next.js, Node.js, and more.",
      features: ["React & Next.js", "Node.js & Express", "Database Integration", "API Development"],
      price: "Starting at $5,000",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
      price: "Starting at $8,000",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web Solutions",
      description:
        "Responsive websites, e-commerce platforms, and progressive web applications tailored to your business needs.",
      features: ["Responsive Design", "E-commerce", "PWA Development", "SEO Optimization"],
      price: "Starting at $3,000",
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Database Design",
      description: "Scalable database architecture, optimization, and migration services for optimal performance.",
      features: ["Database Design", "Performance Tuning", "Data Migration", "Backup Solutions"],
      price: "Starting at $2,500",
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Services",
      description: "Cloud deployment, infrastructure management, and DevOps solutions for scalable applications.",
      features: ["AWS/Azure/GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Monitoring"],
      price: "Starting at $4,000",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security Solutions",
      description: "Comprehensive security audits, implementation of best practices, and ongoing security monitoring.",
      features: ["Security Audits", "Authentication", "Data Encryption", "Compliance"],
      price: "Starting at $3,500",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Performance Optimization",
      description: "Speed optimization, performance tuning, and scalability improvements for existing applications.",
      features: ["Speed Optimization", "Code Refactoring", "Caching Strategies", "Load Testing"],
      price: "Starting at $2,000",
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: "Consulting & Support",
      description: "Technical consulting, code reviews, and ongoing support for your development projects.",
      features: ["Technical Consulting", "Code Reviews", "24/7 Support", "Training"],
      price: "Starting at $150/hour",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      <MouseCursor />
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
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              whileHover={{ scale: 1.01 }}
            >
              Our{" "}
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
                Services
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Comprehensive full-stack solutions designed to transform your business and accelerate your digital growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-200 h-full">
                  <CardContent className="p-4 sm:p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                      transition={{ duration: 0.2 }}
                      className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 text-white group-hover:shadow-lg group-hover:shadow-teal-500/25 transition-all duration-200"
                    >
                      {service.icon}
                    </motion.div>

                    <motion.h3 className="text-xl font-semibold text-white mb-3" whileHover={{ color: "#14b8a6" }}>
                      {service.title}
                    </motion.h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <div className="text-lg font-bold text-green-400 mb-4">{service.price}</div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
                        >
                          <Link href="/contact">Get Quote</Link>
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" whileHover={{ scale: 1.01 }}>
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
                Process
              </motion.span>
            </motion.h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline" },
              { step: "03", title: "Development", description: "Building your solution with regular updates" },
              { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support" },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto"
                >
                  {phase.step}
                </motion.div>
                <motion.h3 className="text-xl font-semibold text-white mb-2" whileHover={{ color: "#14b8a6" }}>
                  {phase.title}
                </motion.h3>
                <p className="text-gray-400">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl p-12 text-center"
            whileHover={{ scale: 1.01 }}
          >
            <motion.h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" whileHover={{ scale: 1.02 }}>
              Ready to Get Started?
            </motion.h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
