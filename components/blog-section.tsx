'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Tag, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const insights = [
  {
    title: 'Automated Monthly Reports & Recurring Transactions',
    description:
      'Used Inngest cron jobs to auto-send financial reports and handle recurring transactions. React Email + Resend for rich, personalized email delivery.',
    label: 'welth',
    project: 'Welth AI - Smart Finance Platform',
  },
  {
    title: 'Smart Budget Alerts for Financial Control',
    description:
      'Triggered real-time alerts when user spend neared budget thresholds. Enhanced financial awareness and spending discipline.',
    label: 'welth',
    project: 'Welth AI - Smart Finance Platform',
  },
  {
    title: 'AI Receipt Scanning with OCR Integration',
    description:
      'Used Gemini AI OCR to extract merchant, amount, and date from receipts, then auto-logged them into Supabase transactions.',
    label: 'welth',
    project: 'Welth AI - Smart Finance Platform',
  },
  {
    title: 'Bot Protection & Rate Limiting with Arcjet',
    description:
      'Integrated Arcjet for real-time API protection and abuse prevention. Seamlessly throttled suspicious activity without compromising UX.',
    label: 'welth',
    project: 'Welth AI - Smart Finance Platform',
  },
  {
    title: 'Financial Insights via React Email & Resend',
    description:
      'Crafted visually rich emails with financial summaries using React Email + Resend SMTP. Included embedded graphs and download links.',
    label: 'welth',
    project: 'Welth AI - Smart Finance Platform',
  },
  {
    title: 'Live Career Trends with AI-Powered Analytics',
    description:
      'Sensei delivers real-time salary trends, job market insights, and role growth forecasts—refreshed weekly via AI data pipelines.',
    label: 'sensei',
    project: 'Sensei AI - Career Assistant',
  },
  {
    title: 'AI Resume Builder with Markdown Editing',
    description:
      'Built a resume generator with ATS optimization, intelligent suggestions, and live Markdown preview—designed for job-seeking efficiency.',
    label: 'sensei',
    project: 'Sensei AI - Career Assistant',
  },
  {
    title: 'Interview Prep with Instant Feedback',
    description:
      'Role-specific mock interview module powered by AI. Provides feedback, scoring, and analytics to help users improve rapidly.',
    label: 'sensei',
    project: 'Sensei AI - Career Assistant',
  },
  {
    title: 'Scalable PostgreSQL Infra with 99.9% Uptime',
    description:
      'Architected a resilient PostgreSQL backend with Prisma ORM for managing user data and insights with high availability.',
    label: 'sensei',
    project: 'Sensei AI - Career Assistant',
  },
  {
    title: 'Containerized Code Execution with Docker & Judge0',
    description:
      'Built secure, isolated coding environments using Docker containers and Judge0 API for real-time code compilation and testing in assessment platform.',
    label: 'assessment',
    project: 'Coding Assessment Platform - GA Digital Solutions',
  },
  {
    title: 'JWT Authentication with Role-Based Access Control',
    description:
      'Implemented secure authentication system with JWT tokens and role management for recruiters, candidates, and admins with session security.',
    label: 'assessment',
    project: 'Coding Assessment Platform - GA Digital Solutions',
  },
  {
    title: 'Real-Time IDE with Live Coding Environments',
    description:
      'Developed browser-based IDE with syntax highlighting, auto-completion, and real-time code execution for technical interviews and assessments.',
    label: 'assessment',
    project: 'Coding Assessment Platform - GA Digital Solutions',
  },
  {
    title: 'Django REST Framework with PostgreSQL Backend',
    description:
      'Designed scalable REST APIs using Django REST Framework with PostgreSQL for efficient data management and complex query optimization.',
    label: 'assessment',
    project: 'Coding Assessment Platform - GA Digital Solutions',
  },
  {
    title: 'CI/CD Pipeline with GitHub Actions & Vercel',
    description:
      'Automated deployment pipeline with GitHub Actions for continuous integration, testing, and deployment to Vercel and Render platforms.',
    label: 'assessment',
    project: 'Coding Assessment Platform - GA Digital Solutions',
  },
  {
    title: 'Symptom-Based Disease Prediction with AI',
    description:
      'Integrated Gemini AI for analyzing user symptoms and providing preliminary health condition assessments with medication tracking.',
    label: 'health',
    project: 'Health AI - Personalized Health Assistant',
  },
  {
    title: 'Personalized Health Insights & Medication Management',
    description:
      'Built comprehensive health tracking system with prescription management, dosage schedules, and AI-powered health guidance.',
    label: 'health',
    project: 'Health AI - Personalized Health Assistant',
  },
];



export default function DevInsights() {
  const getLabelColor = (label: string) => {
    switch (label) {
      case 'welth': return 'bg-green-600/20 text-green-400 border-green-600/30';
      case 'sensei': return 'bg-blue-600/20 text-blue-400 border-blue-600/30';
      case 'assessment': return 'bg-purple-600/20 text-purple-400 border-purple-600/30';
      case 'health': return 'bg-red-600/20 text-red-400 border-red-600/30';
      default: return 'bg-gray-600/20 text-gray-400 border-gray-600/30';
    }
  };

  return (
    <section id="blog" className="bg-[#0B0F19] text-slate-300 py-20 px-6 sm:px-10">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold text-gray-200 text-center mb-12 gradient-text"
      >
        Project Insights 
      </motion.h2>

      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <div className="bg-gradient-card border border-gray-700/50 rounded-2xl p-5 hover:border-gray-600 transition-all duration-300 cursor-pointer project-card group">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getLabelColor(insight.label)}`}>
                      <Tag size={12} className="inline mr-1" />
                      {insight.label}
                    </div>
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-gray-300 transition-colors" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-200 group-hover:text-gray-100 transition-colors line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2">
                    {insight.description.split(' ').slice(0, 6).join(' ')}...
                  </p>
                  <p className="text-xs text-gray-500 mt-1 italic">Click to read more</p>
                </div>
              </DialogTrigger>
              <DialogContent className="bg-gray-900/95 backdrop-blur-md border border-gray-600 max-w-2xl shadow-2xl">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getLabelColor(insight.label)}`}>
                      <Tag size={14} className="inline mr-1" />
                      {insight.label}
                    </div>
                  </div>
                  <DialogTitle className="text-xl font-bold text-gray-100 text-left">
                    {insight.title}
                  </DialogTitle>
                  <div className="text-gray-300 text-sm mb-4 bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                    <strong className="text-gray-200">Project:</strong> {insight.project}
                  </div>
                  <DialogDescription className="text-gray-200 text-base leading-relaxed text-left bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                    {insight.description}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
