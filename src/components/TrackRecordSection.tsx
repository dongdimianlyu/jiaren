'use client'

import { useState, useRef, useEffect } from 'react'

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

  return (
    <section id="track-record" className="section bg-gray-light">
      <div className="container">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-section text-primary-black mb-8">
            Experience
          </h2>
          <p className="text-xl text-gray-dark max-w-3xl mx-auto">
            Building the future through iterative innovation and calculated risks
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Company selector */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <button
                  key={achievement.id}
                  onClick={() => setSelectedAchievement(achievement.id)}
                  className={`w-full text-left p-6 minimal-card transition-colors duration-200 ${
                    selectedAchievement === achievement.id
                      ? 'accent-border bg-primary-white'
                      : 'bg-primary-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-primary-black">
                      {achievement.company}
                    </h3>
                    <span className="text-sm text-gray-medium font-medium">
                      {achievement.duration}
                    </span>
                  </div>
                  <p className="text-gray-dark font-medium mb-3">
                    {achievement.role}
                  </p>
                  <div className="text-accent text-sm font-medium">
                    {achievement.metrics || 'Active'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Achievement details */}
          <div className="lg:col-span-2">
            <div className="minimal-card p-8 h-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-primary-black mb-2">
                    {selectedData.company}
                  </h3>
                  <p className="text-lg text-gray-dark font-medium">
                    {selectedData.role}
                  </p>
                </div>
                {selectedData.valuation && (
                  <div className="text-right">
                    <p className="text-sm text-gray-medium font-medium uppercase tracking-wide">Valuation</p>
                    <p className="text-xl font-bold text-accent mt-1">
                      {selectedData.valuation}
                    </p>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-lg text-gray-dark mb-8 leading-relaxed">
                {selectedData.description}
              </p>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-primary-black mb-4">Key Achievements</h4>
                <ul className="space-y-3">
                  {selectedData.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-accent mt-2 flex-shrink-0" />
                      <span className="text-gray-dark leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Philosophy (for Kairoo) */}
              {selectedData.philosophy && (
                <div className="border-t border-gray-light pt-6">
                  <h4 className="text-lg font-bold text-primary-black mb-3">Philosophy</h4>
                  <p className="text-gray-dark italic leading-relaxed">
                    {selectedData.philosophy}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
