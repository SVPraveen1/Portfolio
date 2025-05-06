"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "Sensai AI",
    description: "AI-powered career assistant with resume building, interview prep, and real-time career insights.",
    tags: ["React", "Next.js", "OpenAI", "Tailwind CSS", "Prisma", "PostgreSQL"],
    github: "https://github.com/SVPraveen1/sensei-ai",
    demo: "https://sensai-ai-eta.vercel.app/",
  },
  {
    id: 2,
    title: "Health AI",
    description: "AI-driven health assistant for personalized fitness and nutrition recommendations.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Gemini API"],
    github: "https://github.com/SVPraveen1/health-ai",
    demo: "https://health-ai-three.vercel.app/",
  },
  {
    id: 3,
    title: "VaultX",
    description: "Secure password manager using Clerk for auth and encryption for safe credential storage.",
    tags: ["React", "Clerk", "PostgreSQL", "Encryption", "TypeScript"],
    github: "https://github.com/SVPraveen1/VaultX",
    demo: "https://vault-x-sigma.vercel.app/",
  },
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="section bg-gray-900/30 relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Other Projects</h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full flex flex-col bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300 project-card">
                <CardContent className="flex-grow p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary font-mono">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-gray-800 p-6">
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="rounded-full group" asChild>
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2 group-hover:text-primary transition-colors" />
                        <span className="group-hover:text-primary transition-colors">GitHub</span>
                      </Link>
                    </Button>
                    <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90" asChild>
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300">
            To know more about my work, check my{" "}
            <Link
              href="https://github.com/SVPraveen1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
