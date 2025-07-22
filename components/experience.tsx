"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Briefcase, Award } from "lucide-react"

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="section bg-gray-900/30 relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Experience & Education</h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <Card className="bg-gray-900/50 border-gray-800 overflow-hidden hover:border-primary/50 transition-all duration-300 project-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4 text-primary">
                <Briefcase size={20} className="mr-2" />
                <h3 className="text-xl font-bold">Web Developer Intern</h3>
              </div>

              <div className="flex items-center mb-6 text-gray-400 text-sm">
                <CalendarDays size={16} className="mr-2" />
                <span>GA Digital Solutions | May 2025 - July 2025</span>
              </div>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Developing a coding assessment platform similar to HackerRank using React.js and Django, 
                    creating a comprehensive evaluation system for technical interviews.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Built recruiter dashboard, candidate IDE, and test workflows with live coding environments 
                    to streamline the technical hiring process.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Integrated JWT-based authentication with role management and secure test sessions, 
                    ensuring data integrity and user security.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Implemented PostgreSQL backend storage and designed REST APIs with Django REST Framework 
                    for efficient data management and scalable architecture.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Developed containerized code execution using Docker and explored Judge0 API for 
                    secure and isolated code testing environments.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Contributed to deployment pipeline using Vercel, Render, and CI/CD with GitHub Actions 
                    for automated testing and deployment workflows.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 overflow-hidden hover:border-primary/50 transition-all duration-300 project-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4 text-primary">
                <Briefcase size={20} className="mr-2" />
                <h3 className="text-xl font-bold">Training & Placement Cell Coordinator</h3>
              </div>

              <div className="flex items-center mb-6 text-gray-400 text-sm">
                <CalendarDays size={16} className="mr-2" />
                <span>IIITDM Kancheepuram | Aug 2023 - Present</span>
              </div>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Managed Campus Recruitment: Coordinated with companies to organize campus recruitment drives,
                    handled scheduling, logistics, and ensured a smooth process for students and recruiters.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Skill Development Workshops: Organized workshops, including resume building, interview preparation,
                    and aptitude training, to improve placement readiness.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Internship Coordination: Partnered with industries to source and coordinate internships, providing
                    students with early industry exposure and experience.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 overflow-hidden hover:border-primary/50 transition-all duration-300 project-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4 text-primary">
                <Award size={20} className="mr-2" />
                <h3 className="text-xl font-bold">Education</h3>
              </div>

              <div className="flex items-center mb-6 text-gray-400 text-sm">
                <CalendarDays size={16} className="mr-2" />
                <span>IIITDM Kancheepuram, Chennai, Tamil Nadu | Nov 2022 – May 2026</span>
              </div>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>B.Tech in Computer Science and Engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Relevant Coursework: Data Structures, Algorithms, Database Management, Web Development, Machine
                    Learning
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 overflow-hidden hover:border-primary/50 transition-all duration-300 project-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4 text-primary">
                <Award size={20} className="mr-2" />
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Udemy: Full Stack Web Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>NPTEL: Cloud Computing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>NPTEL: Ethical Hacking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>NPTEL: Joy of Computing Using Python</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
