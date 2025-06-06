"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "C", level: 75 },
      { name: "C++", level: 75 },
      { name: "SQL", level: 80 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "Django", level: 75 },
      { name: "DRT", level: 70 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
    ]
  }
]

const additionalSkills = {
  "Tools & Platforms": [
    "Git", "GitHub", "VS Code", "Jupyter Notebook", "Postman", 
    "Docker", "Vercel",  "AWS", "Linux"
  ],
  "Database & APIs": [
    "PostgreSQL", "MongoDB", "MySQL", "SQLite", "Firebase", "Supabase",
    "Prisma", "REST API",
  ],
  "AI & Data": [
    "NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "TensorFlow", "OpenAI API",
     "LangChain",  "Data Analysis", "Data Cleaning"
  ]
}

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
          className="max-w-6xl mx-auto"
        >
          {/* Core Skills with Progress Bars */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div key={categoryIndex} variants={itemVariants}>
                  <h3 className="text-xl font-semibold text-purple-400 mb-6 font-mono">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="mb-2 flex justify-between items-center">
                          <span className="text-sm font-medium font-mono">{skill.name}</span>
                          <span className="text-xs text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden skill-bar">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-600 to-blue-500"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: (categoryIndex * category.skills.length + skillIndex) * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            {Object.entries(additionalSkills).map(([categoryName, skills], categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-lg font-semibold text-blue-400 mb-4 font-mono">
                  {categoryName}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.5 + (categoryIndex * 0.2) + (skillIndex * 0.05) 
                      }}
                      className="px-3 py-2 bg-gray-900/70 rounded-lg text-center hover:bg-gray-800/70 transition-colors border border-gray-800/50 hover:border-purple-500/30"
                    >
                      <span className="text-xs font-mono text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
