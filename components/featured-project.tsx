"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"

const FeaturedProject = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="section relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="section-title gradient-text">Featured Project</h2>
          </div>

          <Card className="overflow-hidden bg-gradient-card border border-gray-700/50 hover:border-gray-600 transition-all duration-500 project-card">
            <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-video overflow-hidden rounded-lg group"
              >
                <Image
                  src="/Welth.jpg"
                  alt="Welth AI Dashboard"
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <p className="text-white text-sm font-medium">Welth AI Dashboard</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col justify-center"
                ref={ref}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-200 font-mono">Welth AI</h3>
                <p className="text-gray-300 mb-6">
                  A smart finance platform that helps users track spending. When 85% of their set budget is reached,
                  users receive timely alerts. Each transaction input gives instant insight into spending behavior. Also
                  includes OCR-powered receipt scanning. Inngest is used for scheduled background tasks, and Arcjet
                  protects endpoints from bot abuse.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-full border border-gray-700">React</span>
                  <span className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-full border border-gray-700">Next.js</span>
                  <span className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-full border border-gray-700">Prisma</span>
                  <span className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-full border border-gray-700">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-full border border-gray-700">Inngest</span>
                  <span className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-full border border-gray-700">Arcjet</span>
                  <span className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-full border border-gray-700">OCR</span>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" size="sm" className="rounded-full group border-gray-600 hover:bg-gray-700" asChild>
                    <Link href="https://github.com/SVPraveen1/Welth-Ai" target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2 group-hover:text-gray-200 transition-colors" />
                      <span className="group-hover:text-gray-200 transition-colors">GitHub</span>
                    </Link>
                  </Button>
                  <Button size="sm" className="rounded-full bg-gray-700 hover:bg-gray-600 text-gray-100" asChild>
                    <Link href="https://welth-ai-one.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProject
