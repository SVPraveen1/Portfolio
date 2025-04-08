'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

const insights = [
  {
    title: 'Automated Monthly Reports & Recurring Transactions',
    description:
      'Used Inngest cron jobs to auto-send financial reports and handle recurring transactions. React Email + Resend for rich, personalized email delivery.',
    label: 'welth',
  },
  {
    title: 'Smart Budget Alerts for Financial Control',
    description:
      'Triggered real-time alerts when user spend neared budget thresholds. Enhanced financial awareness and spending discipline.',
    label: 'welth',
  },
  {
    title: 'AI Receipt Scanning with OCR Integration',
    description:
      'Used Gemini AI OCR to extract merchant, amount, and date from receipts, then auto-logged them into Supabase transactions.',
    label: 'welth',
  },
  {
    title: 'Bot Protection & Rate Limiting with Arcjet',
    description:
      'Integrated Arcjet for real-time API protection and abuse prevention. Seamlessly throttled suspicious activity without compromising UX.',
    label: 'welth',
  },
  {
    title: 'Financial Insights via React Email & Resend',
    description:
      'Crafted visually rich emails with financial summaries using React Email + Resend SMTP. Included embedded graphs and download links.',
    label: 'welth',
  },
  {
    title: 'Live Career Trends with AI-Powered Analytics',
    description:
      'Sensei delivers real-time salary trends, job market insights, and role growth forecasts—refreshed weekly via AI data pipelines.',
    label: 'sensei',
  },
  {
    title: 'AI Resume Builder with Markdown Editing',
    description:
      'Built a resume generator with ATS optimization, intelligent suggestions, and live Markdown preview—designed for job-seeking efficiency.',
    label: 'sensei',
  },
  {
    title: 'Interview Prep with Instant Feedback',
    description:
      'Role-specific mock interview module powered by AI. Provides feedback, scoring, and analytics to help users improve rapidly.',
    label: 'sensei',
  },
  {
    title: 'Scalable PostgreSQL Infra with 99.9% Uptime',
    description:
      'Architected a resilient PostgreSQL backend with Prisma ORM for managing user data and insights with high availability.',
    label: 'sensei',
  },
];



export default function DevInsights() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="blog" className="bg-[#0B0F19] text-slate-300 py-20 px-6 sm:px-10">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold text-primary text-center mb-12"
      >
        Project Insights 
      </motion.h2>

      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2">
        {insights.map((insight, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={cn(
                'bg-gray-900/50 border border-gray-800 rounded-2xl p-5 hover:border-primary/50 transition-all duration-300 cursor-pointer project-card',
                isOpen && 'border-primary/50'
              )}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-base sm:text-lg font-semibold text-primary">
                  {insight.title}
                </h3>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 text-slate-400 transition-transform duration-300',
                    isOpen && 'rotate-180'
                  )}
                />
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-3 text-sm text-[#CBD5E1]">
                      {insight.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
