"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "JavaScript", level: 90 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Prisma", level: 75 },
  { name: "PostgreSQL", level: 70 },
  { name: "Python", level: 75 },
  { name: "Node.js", level: 80 },
  { name: "Express", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "Material UI", level: 80 },
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="section relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Skills</h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="mb-2 flex justify-between items-center">
                  <span className="text-sm font-medium font-mono">{skill.name}</span>
                  <span className="text-xs text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden skill-bar">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-600 to-blue-500"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">C/C++</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">Flask</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">Bootstrap</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">SQL</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">NumPy</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">Pandas</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">Matplotlib</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">Scikit-Learn</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">OpenAI API</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">Hugging Face</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">VS Code</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center">
              <span className="text-sm font-mono text-gray-300">Git</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
