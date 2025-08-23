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
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const selectedData = achievements.find(a => a.id === selectedAchievement) || achievements[0]

  return (
    <section 
      id="track-record" 
      ref={sectionRef}
      className="relative py-20 px-6 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stellar-cyan to-plasma-pink neon-glow">
              TRACK RECORD
            </span>
          </h2>
          <p className="text-xl text-stardust-white/80 max-w-3xl mx-auto">
            Building the future through iterative innovation and calculated risks
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Company selector */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <button
                  key={achievement.id}
                  onClick={() => setSelectedAchievement(achievement.id)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                    selectedAchievement === achievement.id
                      ? 'border-stellar-cyan bg-stellar-cyan/10 neon-border'
                      : 'border-stardust-white/20 hover:border-stellar-cyan/50 glass'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-stellar-cyan">
                      {achievement.company}
                    </h3>
                    <span className="text-sm text-energy-yellow font-medium">
                      {achievement.duration}
                    </span>
                  </div>
                  <p className="text-stardust-white/80 font-medium">
                    {achievement.role}
                  </p>
                  <div className="mt-3 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-aurora-green rounded-full animate-pulse" />
                    <span className="text-aurora-green text-sm font-medium">
                      {achievement.metrics || 'Active'}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Achievement details */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="glass p-8 rounded-3xl relative overflow-hidden h-full">
              {/* Holographic overlay */}
              <div className="absolute inset-0 holographic opacity-20" />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-4xl font-black text-stellar-cyan neon-glow mb-2">
                      {selectedData.company}
                    </h3>
                    <p className="text-xl text-plasma-pink font-bold">
                      {selectedData.role}
                    </p>
                  </div>
                  {selectedData.valuation && (
                    <div className="text-right">
                      <p className="text-sm text-stardust-white/60">Valuation</p>
                      <p className="text-2xl font-bold text-energy-yellow">
                        {selectedData.valuation}
                      </p>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-lg text-stardust-white/90 mb-8 leading-relaxed">
                  {selectedData.description}
                </p>

                {/* Highlights */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-aurora-green mb-4">Key Achievements</h4>
                  <ul className="space-y-3">
                    {selectedData.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-stellar-cyan rounded-full mt-2 flex-shrink-0" />
                        <span className="text-stardust-white/90">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Philosophy (for Kairoo) */}
                {selectedData.philosophy && (
                  <div className="border-t border-stardust-white/20 pt-6">
                    <h4 className="text-xl font-bold text-plasma-pink mb-3">Philosophy</h4>
                    <p className="text-stardust-white/90 italic">
                      {selectedData.philosophy}
                    </p>
                  </div>
                )}
              </div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border border-stellar-cyan/30 rounded-full animate-float" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border border-plasma-pink/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-32 h-32 border border-energy-yellow/20 rotate-45 animate-float" />
        <div className="absolute bottom-1/4 right-0 w-24 h-24 border border-aurora-green/20 rotate-12 animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  )
}
