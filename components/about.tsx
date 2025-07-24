"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section bg-gradient-card relative">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="section-title gradient-text">About Me</h2>

          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-600/30 p-1 bg-gradient-card">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/Profile.jpeg"
                      alt="KSV Praveen"
                      width={250}
                      height={250}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </Card>
              </motion.div>
            </div>

            <div className="md:col-span-3 space-y-6 text-lg text-gray-300">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Passionate full stack developer who builds AI-driven and automation-first applications.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Experienced in full-stack development with expertise in React, Next.js, Python, Node.js, and modern web technologies. Proficient in AI integration, database management, and cloud platforms.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                As a final-year B.Tech CSE student at IIITDM Kancheepuram (2022-2026), I combine theoretical knowledge
                with practical experience to create efficient, user-friendly applications. I'm particularly interested
                in leveraging AI to solve real-world problems and improve user experiences.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                I'm currently seeking full-time opportunities where I can contribute my skills in full-stack development
                and continue growing as a developer.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="pt-4"
              >
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-gray-800/50 rounded-full text-gray-300 text-sm border border-gray-700">
                    <span className="font-mono">B.Tech CSE</span>
                  </div>
                  <div className="px-4 py-2 bg-gray-800/50 rounded-full text-gray-300 text-sm border border-gray-700">
                    <span className="font-mono">IIITDM Kancheepuram</span>
                  </div>
                  <div className="px-4 py-2 bg-gray-800/50 rounded-full text-gray-300 text-sm border border-gray-700">
                    <span className="font-mono">2022 - 2026</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
