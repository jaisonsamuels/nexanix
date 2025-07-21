"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import MouseCursor from "@/components/mouse-cursor"

export default function PortfolioPage() {
  const projects = [
    {
      title: "360 degree virtual Campus Tour for Mother Terasa Engineering College",
      description:
        "An interactive web application built to showcase the Mother Terasa Engineering College campus through immersive 360° panoramic views. Features include intuitive navigation, responsive design, and seamless user experience across devices.",
      image: "/images/portfolio_tag/mtec(2).png",
      technologies: ["Next.js", "Node.js", "Tailwind CSS"],
      category: "Web Application",
      liveUrl: "https://smtec-campus-tour.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "Admission Website",
      description:
        "An intuitive Admission Website built for SCAD College of Engineering and Technology, streamlining the application process with clear program details, deadlines, and a user-friendly interface for prospective students.",
      image: "/images/portfolio_tag/adm(1).png",
      technologies: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
      category: "Web Application",
      liveUrl: "https://www.scaddigital.org/",
    
    },
    {
      title: "360 degree virtual Campus Tour for SCAD College of Engineering and Technology",
      description:
        "An interactive web application built to showcase the SCAD College of Engineering and Technology campus through immersive 360° panoramic views. Features include intuitive navigation, responsive design, and seamless user experience across devices.",
      image: "/images/portfolio_tag/scad360(2).png",
      technologies: ["Next.js", "Node.js", "Tailwind CSS"],
      category: "Web Application",
      liveUrl: "https://www.scad-campustour.org/",
      githubUrl: "#",
    },
  ]

  const categories = ["All", "Web Application", "Mobile App", "Dashboard"]

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
                Portfolio
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Explore our latest projects and see how we've helped businesses transform their digital presence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  index === 0
                    ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white"
                    : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-200 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-200 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </a>
                      </motion.div>
                    </div>
                  </div>

                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="bg-teal-600/20 text-teal-400 border-teal-600/30">
                        {project.category}
                      </Badge>
                    </div>

                    <motion.h3 className="text-xl font-semibold text-white mb-3" whileHover={{ color: "#14b8a6" }}>
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="border-slate-600 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              Project{" "}
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
                Statistics
              </motion.span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "3", label: "Projects Completed" },
              { number: "3", label: "Happy Clients" },
              { number: "100%", label: "Success Rate" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="text-center"
              >
                {index === 0 ? (
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl p-8">
                    <motion.div
                      className="text-4xl font-bold text-white mb-2"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-blue-100">{stat.label}</div>
                  </div>
                ) : null}
                {index === 1 ? (
                  <div className="bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl p-8">
                    <motion.div
                      className="text-4xl font-bold text-white mb-2"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-blue-100">{stat.label}</div>
                  </div>
                ) : null}
                {index === 2 ? (
                  <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl p-8">
                    <motion.div
                      className="text-4xl font-bold text-white mb-2"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-blue-100">{stat.label}</div>
                  </div>
                ) : null}
                {index === 3 ? (
                  <div className="bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl p-8">
                    <motion.div
                      className="text-4xl font-bold text-white mb-2"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.9 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-blue-100">{stat.label}</div>
                  </div>
                ) : null}
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
              Ready to Start Your Project?
            </motion.h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Your vision, our expertise.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100">
                <a href="/contact">Contact Us Today</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}