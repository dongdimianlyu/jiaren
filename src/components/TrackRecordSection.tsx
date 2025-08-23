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
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-light mb-8 font-elegant tracking-wider">
            <span className="text-transparent bg-clip-text bg-elegant-gradient elegant-glow">
              EXPERIENCE
            </span>
          </h2>
          <p className="text-xl text-pearl-gray/90 max-w-3xl mx-auto font-light leading-relaxed">
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
                  className={`w-full text-left p-8 rounded-3xl transition-all duration-500 ${
                    selectedAchievement === achievement.id
                      ? 'glass-card border-amber-glow/40 bg-amber-glow/5 soft-border'
                      : 'glass-card hover:border-amber-glow/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-amber-glow font-elegant">
                      {achievement.company}
                    </h3>
                    <span className="text-sm text-gold-accent font-medium tracking-wide">
                      {achievement.duration}
                    </span>
                  </div>
                  <p className="text-pearl-gray/90 font-medium mb-4">
                    {achievement.role}
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-glow rounded-full animate-subtle-twinkle" />
                    <span className="text-amber-glow text-sm font-medium tracking-wide">
                      {achievement.metrics || 'Active'}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Achievement details */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="glass-card p-12 h-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-4xl font-light text-amber-glow elegant-glow mb-3 font-elegant tracking-wide">
                    {selectedData.company}
                  </h3>
                  <p className="text-xl text-gold-accent font-medium">
                    {selectedData.role}
                  </p>
                </div>
                {selectedData.valuation && (
                  <div className="text-right glass px-6 py-4 rounded-2xl">
                    <p className="text-sm text-pearl-gray/70 font-medium tracking-wide uppercase">Valuation</p>
                    <p className="text-2xl font-semibold text-amber-glow mt-1">
                      {selectedData.valuation}
                    </p>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-lg text-pearl-gray/90 mb-10 leading-relaxed font-light">
                {selectedData.description}
              </p>

              {/* Highlights */}
              <div className="mb-10">
                <h4 className="text-xl font-semibold text-amber-glow mb-6 tracking-wide">Key Achievements</h4>
                <ul className="space-y-4">
                  {selectedData.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-gold-accent rounded-full mt-2 flex-shrink-0 animate-subtle-twinkle" />
                      <span className="text-pearl-gray/90 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Philosophy (for Kairoo) */}
              {selectedData.philosophy && (
                <div className="border-t border-amber-glow/20 pt-8">
                  <h4 className="text-xl font-semibold text-gold-accent mb-4 tracking-wide">Philosophy</h4>
                  <p className="text-pearl-gray/90 italic font-light leading-relaxed">
                    {selectedData.philosophy}
                  </p>
                </div>
              )}

              {/* Elegant floating elements */}
              <div className="absolute top-6 right-6 w-12 h-12 border border-amber-glow/20 rounded-full animate-gentle-float opacity-30" />
              <div className="absolute bottom-6 left-6 w-8 h-8 border border-gold-accent/15 rounded-full animate-gentle-float opacity-40" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Elegant background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-24 h-24 border border-amber-glow/10 rounded-full animate-gentle-float opacity-20" />
        <div className="absolute bottom-1/4 right-0 w-16 h-16 border border-gold-accent/15 rounded-full animate-gentle-float opacity-30" style={{ animationDelay: '3s' }} />
      </div>
    </section>
  )
}
