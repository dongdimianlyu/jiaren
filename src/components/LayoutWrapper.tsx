'use client'

import { motion } from 'framer-motion'
import { ParticleSystem } from './ParticleSystem'

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="relative min-h-screen" style={{ background: '#000000' }}>
      {/* Particle System Background */}
      <ParticleSystem />
      
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20"
        style={{ minHeight: '100vh' }}
      >
        {children}
      </motion.div>
    </div>
  )
}
