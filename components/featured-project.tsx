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

          <Card className="overflow-hidden bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-500 project-card">
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
                <h3 className="text-2xl font-bold mb-4 text-primary font-mono">Welth AI</h3>
                <p className="text-gray-300 mb-6">
                  A smart finance platform that helps users track spending. When 85% of their set budget is reached,
                  users receive timely alerts. Each transaction input gives instant insight into spending behavior. Also
                  includes OCR-powered receipt scanning. Inngest is used for scheduled background tasks, and Arcjet
                  protects endpoints from bot abuse.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">React</span>
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Next.js</span>
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Prisma</span>
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Inngest</span>
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Arcjet</span>
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">OCR</span>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" size="sm" className="rounded-full group" asChild>
                    <Link href="https://github.com/SVPraveen1/Welth-Ai" target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2 group-hover:text-primary transition-colors" />
                      <span className="group-hover:text-primary transition-colors">GitHub</span>
                    </Link>
                  </Button>
                  <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90" asChild>
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
