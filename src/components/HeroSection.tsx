'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  
  const tagline = "Building startups: iterating, failing, and learning. Taking hyper-risks for leverage before superintelligence. Creating what could become tyrant or servant. Simultaneously repelled and welcoming the inexhaustible possibilities of the future."

  useEffect(() => {
    let currentIndex = 0
    const typingSpeed = 40 // milliseconds per character
    
    const typeNextCharacter = () => {
      if (currentIndex < tagline.length) {
        setTypedText(tagline.slice(0, currentIndex + 1))
        currentIndex++
        setTimeout(typeNextCharacter, typingSpeed)
      } else {
        // Hide cursor after typing is complete
        setTimeout(() => setShowCursor(false), 1000)
      }
    }

    // Start typing after a brief delay
    const timer = setTimeout(typeNextCharacter, 1000)
    
    return () => clearTimeout(timer)
  }, [tagline])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-8" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Name with elegant fade-in */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-7xl md:text-8xl lg:text-9xl font-bold mb-12"
                      style={{ 
            color: '#ffffff', 
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 0.9
          }}
        >
          JIAREN
        </motion.h1>

        {/* Typing tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <p 
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
            style={{ 
              color: '#e0e0e0', 
              lineHeight: 1.8 
            }}
          >
            {typedText}
            {showCursor && (
              <span 
                className="inline-block w-0.5 h-6 ml-1 animate-pulse"
                style={{ backgroundColor: '#ffffff' }}
              />
            )}
          </p>
        </motion.div>

        {/* Status indicator with elegant animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
          className="inline-block"
        >
          <motion.div 
            className="minimal-button px-8 py-4 rounded-full"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span 
              className="font-medium text-sm uppercase tracking-wide"
              style={{ color: '#ffffff' }}
            >
              Currently Building
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
