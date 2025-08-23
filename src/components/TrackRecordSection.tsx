'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Achievement {
  id: string
  company: string
  role: string
  duration: string
  highlights: string[]
  description: string
  valuation?: string
  metrics?: string
  philosophy?: string
}

const achievements: Achievement[] = [
  {
    id: 'ventry',
    company: 'Ventry',
    role: 'Founder & CEO',
    duration: '1.5 Years',
    description: 'Identified operational inefficiencies in SMEs through direct research and validation',
    highlights: [
      'Built LLM+RAG system to analyze business data and suggest improvements',
      'Pivoted to reinforcement learning system identifying high-ROI tasks after market feedback',
      'Pitched to Mark Cuban\'s team, invited to meeting next day with his director',
      'Received $1-1.2M post-money valuation assessment',
      'Currently in investor conversations while continuing beta testing'
    ],
    valuation: '$1-1.2M',
    metrics: 'Active beta testing with investors'
  },
  {
    id: 'kairoo',
    company: 'Kairoo',
    role: 'Founder & CEO', 
    duration: '1 Year',
    description: 'Founded to address socialization challenges for introverts during cultural transitions',
    highlights: [
      'Built platform helping users practice conversations before social events',
      'Developed entire technical architecture',
      'Growing to 30 daily active users with zero marketing spend',
      'Led remote team of four, focusing on organic distribution'
    ],
    metrics: '30 DAU with $0 marketing spend',
    philosophy: 'Blending Christian worldview with Effective Altruism - serving others through technology systems that scale impact'
  }
]

export function TrackRecordSection() {
  const [selectedAchievement, setSelectedAchievement] = useState<string>('ventry')

  const selectedData = achievements.find(a => a.id === selectedAchievement) || achievements[0]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const detailsVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      x: -30,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section 
      id="track-record" 
      className="py-32 px-8"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 
            className="text-5xl md:text-6xl font-bold mb-8"
            style={{ 
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em'
            }}
          >
            Experience
          </h2>
          <p 
            className="text-xl md:text-2xl max-w-4xl mx-auto"
            style={{ 
              color: 'var(--text-dimmed)',
              lineHeight: 1.8
            }}
          >
            Building the future through iterative innovation and calculated risks
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Company selector */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.button
                  key={achievement.id}
                  variants={cardVariants}
                  onClick={() => setSelectedAchievement(achievement.id)}
                  className={`w-full text-left p-6 minimal-card transition-all duration-400 ${
                    selectedAchievement === achievement.id
                      ? 'accent-border scale-105'
                      : ''
                  }`}
                  whileHover={{
                    scale: selectedAchievement === achievement.id ? 1.05 : 1.03,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 
                      className="text-xl font-bold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {achievement.company}
                    </h3>
                    <span 
                      className="text-sm font-medium"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {achievement.duration}
                    </span>
                  </div>
                  <p 
                    className="font-medium mb-3"
                    style={{ color: 'var(--text-dimmed)' }}
                  >
                    {achievement.role}
                  </p>
                  <div 
                    className="text-sm font-medium"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {achievement.metrics || 'Active'}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Achievement details */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedAchievement}
                variants={detailsVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="minimal-card p-8 md:p-12 h-full"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 
                      className="text-3xl md:text-4xl font-bold mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {selectedData.company}
                    </h3>
                    <p 
                      className="text-lg font-medium"
                      style={{ color: 'var(--text-dimmed)' }}
                    >
                      {selectedData.role}
                    </p>
                  </div>
                  {selectedData.valuation && (
                    <div className="text-right">
                      <p 
                        className="text-sm font-medium uppercase tracking-wide"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        Valuation
                      </p>
                      <p 
                        className="text-xl font-bold mt-1"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {selectedData.valuation}
                      </p>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p 
                  className="text-lg mb-8 leading-relaxed"
                  style={{ 
                    color: 'var(--text-dimmed)',
                    lineHeight: 1.8
                  }}
                >
                  {selectedData.description}
                </p>

                {/* Highlights */}
                <div className="mb-8">
                  <h4 
                    className="text-lg font-bold mb-6"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Key Achievements
                  </h4>
                  <ul className="space-y-4">
                    {selectedData.highlights.map((highlight, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div 
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: 'var(--text-primary)' }}
                        />
                        <span 
                          className="leading-relaxed"
                          style={{ 
                            color: 'var(--text-dimmed)',
                            lineHeight: 1.7
                          }}
                        >
                          {highlight}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Philosophy (for Kairoo) */}
                {selectedData.philosophy && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="pt-6"
                    style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
                  >
                    <h4 
                      className="text-lg font-bold mb-4"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Philosophy
                    </h4>
                    <p 
                      className="italic leading-relaxed"
                      style={{ 
                        color: 'var(--text-dimmed)',
                        lineHeight: 1.8
                      }}
                    >
                      {selectedData.philosophy}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="flex justify-center mt-20"
        >
          <div 
            className="w-16 h-px"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
