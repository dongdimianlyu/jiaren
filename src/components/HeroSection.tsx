'use client'

import { motion } from 'framer-motion'
import { TypewriterText } from './TypewriterText'

// Page Load Animation
const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" }
  }
}

export function HeroSection() {
  const tagline = "Building startups: iterating, failing, and learning. Taking hyper-risks for leverage before superintelligence. Creating what could become tyrant or servant. Simultaneously repelled and welcoming the inexhaustible possibilities of the future."

  return (
    <motion.section
      id="hero"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen flex items-center justify-center px-8"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="text-center max-w-5xl mx-auto">
        
        {/* Name with elegant fade-in */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="text-6xl md:text-7xl lg:text-8xl font-light mb-8"
          style={{ 
            color: '#ffffff', 
            fontWeight: 300,
            letterSpacing: '-0.02em',
            lineHeight: 0.9
          }}
        >
          Jiaren
        </motion.h1>

        {/* Typing tagline with TypewriterText component */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-16"
        >
          <div className="text-xl md:text-2xl leading-relaxed text-gray-200 max-w-4xl mx-auto">
            <TypewriterText 
              text={tagline}
              delay={2000}
              speed={50}
              style={{ 
                color: '#e0e0e0', 
                lineHeight: 1.8 
              }}
            />
          </div>
        </motion.div>

        {/* Status indicator with elegant animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 10, ease: "easeOut" }}
          className="inline-block"
        >
          <motion.div 
            className="minimal-button px-8 py-4 rounded-full"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.4, ease: "easeOut" }
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
          transition={{ duration: 1, delay: 11 }}
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
    </motion.section>
  )
}
