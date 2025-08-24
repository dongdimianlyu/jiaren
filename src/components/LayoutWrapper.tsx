'use client'

import { motion } from 'framer-motion'
import { ParticleSystem } from './ParticleSystem'
import { SmoothScroll } from './SmoothScroll'

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="relative min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Particle System Background */}
      <ParticleSystem />
      
      {/* Smooth Scroll Wrapper */}
      <SmoothScroll>
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-20"
        >
          {children}
        </motion.div>
      </SmoothScroll>
    </div>
  )
}
