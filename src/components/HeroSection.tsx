'use client'

import { useEffect, useState } from 'react'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState('')
  
  const tagline = "Building startups: iterating, failing, and learning. Taking hyper-risks for leverage before superintelligence. Creating what could become tyrant or servant. Simultaneously repelled and welcoming the inexhaustible possibilities of the future."

  useEffect(() => {
    setIsVisible(true)
    
    // Typing animation for tagline
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= tagline.length) {
        setTypedText(tagline.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 30)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 py-32">
      {/* Elegant floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full border border-amber-glow/20 animate-gentle-float opacity-40" />
        <div className="absolute top-40 right-20 w-12 h-12 rounded-full border border-gold-accent/15 animate-gentle-float opacity-30" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-20 w-8 h-8 rounded-full border border-crystal-blue/25 animate-gentle-float opacity-50" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 right-10 w-20 h-20 rounded-full border border-amber-glow/10 animate-gentle-float opacity-20" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Elegant name display */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-12 relative font-elegant tracking-wider">
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-elegant-gradient elegant-glow">
                JIAREN
              </span>
            </span>
          </h1>
        </div>

        {/* Elegant subtitle */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-12 mb-16 max-w-5xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-pearl-gray font-light tracking-wide">
              {typedText}
              <span className="animate-subtle-twinkle text-amber-glow">|</span>
            </p>
          </div>
        </div>

        {/* Status indicator */}
        <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-4 glass-card px-6 py-3 premium-button">
            <div className="w-2 h-2 bg-amber-glow rounded-full animate-subtle-twinkle" />
            <span className="text-amber-glow font-medium text-sm tracking-wide">CURRENTLY BUILDING</span>
          </div>
        </div>

        {/* Elegant scroll indicator */}
        <div className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center space-y-3 animate-gentle-float">
            <span className="text-amber-glow text-xs font-medium tracking-widest uppercase">Explore</span>
            <div className="w-5 h-8 border border-amber-glow/50 rounded-full flex justify-center">
              <div className="w-0.5 h-2 bg-amber-glow rounded-full mt-2 animate-subtle-twinkle" />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute stardust opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
