"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/navbar"
import MouseCursor from "@/components/mouse-cursor"
import Link from "next/link"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "hello@nexanix.com",
      description: "Send us an email anytime",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: "123 Tech Street, Silicon Valley, CA 94000",
      description: "Come say hello at our office",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: "Mon-Fri: 8am-6pm PST",
      description: "We're here to help",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      <MouseCursor />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 py-16 sm:py-20">
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
              Get In{" "}
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
                Touch
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Ready to transform your ideas into reality? Let's discuss your project and explore how we can help you
              succeed.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-20 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-200 h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.2 }}
                      className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 text-white mx-auto"
                    >
                      {info.icon}
                    </motion.div>
                    <motion.h3 className="text-lg font-semibold text-white mb-2" whileHover={{ color: "#14b8a6" }}>
                      {info.title}
                    </motion.h3>
                    <p className="text-teal-400 font-medium mb-1">{info.details}</p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="pb-20 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8">
                  <motion.h2 className="text-3xl font-bold text-white mb-6" whileHover={{ color: "#14b8a6" }}>
                    Send us a message
                  </motion.h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-white">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-teal-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-white">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-teal-500"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-white">
                        Phone (Optional)
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+1 (555) 123-4567"
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-white">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="Project Discussion"
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        rows={5}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-teal-500"
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-medium py-3">
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                      </motion.div>
                      <p className="text-white font-medium">Interactive Map</p>
                      <p className="text-gray-400 text-sm">Silicon Valley, CA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <motion.h3 className="text-xl font-bold text-white mb-4" whileHover={{ color: "#14b8a6" }}>
                    Frequently Asked Questions
                  </motion.h3>
                  <div className="space-y-4">
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <h4 className="text-teal-400 font-medium mb-1">How long does a typical project take?</h4>
                      <p className="text-gray-400 text-sm">
                        Project timelines vary based on complexity, typically ranging from 4-16 weeks.
                      </p>
                    </motion.div>
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <h4 className="text-teal-400 font-medium mb-1">Do you provide ongoing support?</h4>
                      <p className="text-gray-400 text-sm">
                        Yes, we offer 24/7 support and maintenance packages for all our projects.
                      </p>
                    </motion.div>
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <h4 className="text-teal-400 font-medium mb-1">What technologies do you use?</h4>
                      <p className="text-gray-400 text-sm">
                        We use modern technologies like React, Next.js, Node.js, and cloud platforms.
                      </p>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

{/* CTA Section */}
<section className="py-20 bg-slate-800/50 py-16 sm:py-20">
  <div className="container mx-auto px-4 sm:px-6">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.h2
        className="text-4xl lg:text-5xl font-bold text-white mb-6"
        whileHover={{ scale: 1.01 }}
      >
        Let's Build Something{" "}
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
          Amazing
        </motion.span>
      </motion.h2>

      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Every great project starts with a conversation. We're excited to hear about your ideas and explore how we
        can bring them to life.
      </p>

      {/* Buttons Row */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
            >
              Schedule a Call
            </Button>
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link href="/portfolio">
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent hover:border-teal-400/50"
            >
              View Our Work
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  </div>
</section>

    </div>
  )
}
