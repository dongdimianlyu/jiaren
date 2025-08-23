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
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border border-stellar-cyan/30 rotate-45 animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 border border-plasma-pink/30 rotate-12 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 border border-energy-yellow/30 rotate-45 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-aurora-green/30 rotate-12 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main name with holographic effect */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black mb-8 relative">
            <span className="relative inline-block">
              <span className="absolute inset-0 text-stellar-cyan neon-glow animate-pulse-glow">
                JIAREN
              </span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-stellar-cyan via-plasma-pink to-energy-yellow">
                JIAREN
              </span>
            </span>
          </h1>
        </div>

        {/* Subtitle with glass effect */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass p-8 mb-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Holographic overlay */}
            <div className="absolute inset-0 holographic opacity-30" />
            
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-stardust-white/90 relative z-10 font-medium">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        {/* Status indicator */}
        <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-4 glass p-4 rounded-full">
            <div className="w-3 h-3 bg-aurora-green rounded-full animate-pulse" />
            <span className="text-aurora-green font-medium">Currently Building</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-stellar-cyan text-sm font-medium">Explore</span>
            <div className="w-6 h-10 border-2 border-stellar-cyan rounded-full flex justify-center">
              <div className="w-1 h-3 bg-stellar-cyan rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-stellar-cyan rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animation: `twinkle 3s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
