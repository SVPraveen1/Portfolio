"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Briefcase, Award, GraduationCap, ExternalLink, MapPin } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const timelineData = [
  {
    id: 1,
    type: "work",
    icon: Briefcase,
    title: "Web Developer Intern",
    company: "GA Digital Solutions",
    period: "May 2025 - July 2025",
    location: "Remote",
    description: [
      "Developing a coding assessment platform similar to HackerRank using React.js and Django, creating a comprehensive evaluation system for technical interviews.",
      "Built recruiter dashboard, candidate IDE, and test workflows with live coding environments to streamline the technical hiring process.",
      "Integrated JWT-based authentication with role management and secure test sessions, ensuring data integrity and user security.",
      "Implemented PostgreSQL backend storage and designed REST APIs with Django REST Framework for efficient data management and scalable architecture.",
      "Developed containerized code execution using Docker and explored Judge0 API for secure and isolated code testing environments.",
      "Contributed to deployment pipeline using Vercel, Render, and CI/CD with GitHub Actions for automated testing and deployment workflows."
    ]
  },
  {
    id: 2,
    type: "work",
    icon: Briefcase,
    title: "Training & Placement Cell Coordinator",
    company: "IIITDM Kancheepuram",
    period: "Aug 2023 - Present",
    location: "Chennai, Tamil Nadu",
    description: [
      "Managed Campus Recruitment: Coordinated with companies to organize campus recruitment drives, handled scheduling, logistics, and ensured a smooth process for students and recruiters.",
      "Skill Development Workshops: Organized workshops, including resume building, interview preparation, and aptitude training, to improve placement readiness.",
      "Internship Coordination: Partnered with industries to source and coordinate internships, providing students with early industry exposure and experience."
    ]
  },
  {
    id: 3,
    type: "education",
    icon: GraduationCap,
    title: "B.Tech in Computer Science and Engineering",
    company: "IIITDM Kancheepuram",
    period: "Nov 2022 – May 2026",
    location: "Chennai, Tamil Nadu",
    description: [
      "B.Tech in Computer Science and Engineering",
      "Relevant Coursework: Data Structures, Algorithms, Database Management, Web Development, Machine Learning"
    ]
  },
  {
    id: 4,
    type: "certification",
    icon: Award,
    title: "Professional Certifications",
    company: "Various Platforms",
    period: "2023 - 2025",
    location: "Online",
    description: [
      "Udemy: Full Stack Web Development",
      "NPTEL: Cloud Computing",
      "NPTEL: Ethical Hacking",
      "NPTEL: Joy of Computing Using Python"
    ]
  }
]

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work': return {
        bg: 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20',
        text: 'text-blue-400',
        border: 'border-blue-500/40',
        glow: 'shadow-blue-500/20'
      };
      case 'education': return {
        bg: 'bg-gradient-to-r from-emerald-500/20 to-green-500/20',
        text: 'text-emerald-400',
        border: 'border-emerald-500/40',
        glow: 'shadow-emerald-500/20'
      };
      case 'certification': return {
        bg: 'bg-gradient-to-r from-purple-500/20 to-violet-500/20',
        text: 'text-purple-400',
        border: 'border-purple-500/40',
        glow: 'shadow-purple-500/20'
      };
      default: return {
        bg: 'bg-gradient-to-r from-gray-500/20 to-slate-500/20',
        text: 'text-gray-400',
        border: 'border-gray-500/40',
        glow: 'shadow-gray-500/20'
      };
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'work': return 'Experience';
      case 'education': return 'Education';
      case 'certification': return 'Certification';
      default: return 'Other';
    }
  }

  return (
    <section id="experience" className="section bg-gradient-card relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="section-title gradient-text mb-4"
          >
            Journey & Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Explore my professional journey, educational background, and continuous learning path
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto" ref={ref}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {timelineData.map((item, index) => {
              const IconComponent = item.icon;
              const colors = getTypeColor(item.type);
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.div
                        whileHover={{ y: -5, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        className="bg-gradient-card border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 cursor-pointer project-card group h-full"
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`p-2 rounded-xl ${colors.bg} ${colors.border} border ${colors.glow} shadow-lg`}
                          >
                            <IconComponent size={20} className={colors.text} />
                          </motion.div>
                          <div className="flex flex-col items-end">
                            <div className={`px-2 py-1 rounded-full text-xs font-medium border ${colors.bg} ${colors.text} ${colors.border} mb-1`}>
                              {getTypeLabel(item.type)}
                            </div>
                            <ExternalLink size={14} className="text-gray-400 group-hover:text-gray-300 transition-colors" />
                          </div>
                        </div>

                        {/* Content Preview */}
                        <h3 className="text-lg font-bold text-gray-200 group-hover:text-gray-100 transition-colors mb-2 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className={`font-medium mb-3 ${colors.text}`}>
                          {item.company}
                        </p>

                        {/* Date and Location */}
                        <div className="flex items-center text-gray-400 text-sm mb-3">
                          <CalendarDays size={14} className="mr-1" />
                          <span>{item.period}</span>
                        </div>

                        {/* Preview Description */}
                        <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                          {item.description[0]}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-500 text-xs">
                            <MapPin size={12} className="mr-1" />
                            <span>{item.location}</span>
                          </div>
                          <p className="text-xs text-gray-500 italic">Click to read more</p>
                        </div>
                      </motion.div>
                    </DialogTrigger>

                    <DialogContent className="bg-gray-900/95 backdrop-blur-md border border-gray-600 max-w-3xl shadow-2xl">
                      <DialogHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`p-3 rounded-xl ${colors.bg} ${colors.border} border ${colors.glow} shadow-lg`}>
                            <IconComponent size={24} className={colors.text} />
                          </div>
                          <div className="flex-1">
                            <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium border ${colors.bg} ${colors.text} ${colors.border} mb-2`}>
                              {getTypeLabel(item.type)}
                            </div>
                            <DialogTitle className="text-2xl font-bold text-gray-100 text-left">
                              {item.title}
                            </DialogTitle>
                          </div>
                        </div>

                        {/* Company/Institution Info */}
                        <div className="text-gray-300 text-lg mb-4 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                          <div className="flex items-center justify-between">
                            <div>
                              <strong className={`${colors.text} text-xl`}>{item.company}</strong>
                              <div className="flex items-center text-gray-400 text-sm mt-2">
                                <CalendarDays size={16} className="mr-2" />
                                <span>{item.period}</span>
                                <span className="mx-2">•</span>
                                <MapPin size={16} className="mr-1" />
                                <span>{item.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Full Description */}
                        <DialogDescription className="text-gray-200 text-base leading-relaxed text-left bg-gray-800/30 rounded-lg p-6 border border-gray-700/50">
                          <div className="space-y-4">
                            {item.description.map((desc, descIndex) => (
                              <motion.div
                                key={descIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: descIndex * 0.1 }}
                                className="flex items-start group/item"
                              >
                                <div className={`w-2 h-2 rounded-full ${colors.bg} ${colors.border} border mr-3 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform`}></div>
                                <span className="text-gray-200 leading-relaxed">
                                  {desc}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
