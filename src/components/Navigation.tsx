'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Philosophy', id: 'philosophy' },
    { label: 'Experience', id: 'track-record' },
    { label: 'Contact', id: 'contact' }
  ]

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: isScrolled 
          ? 'rgba(0, 0, 0, 0.9)' 
          : 'rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(20px)',
        borderBottom: isScrolled 
          ? '1px solid rgba(255, 255, 255, 0.1)' 
          : 'none',
        transition: 'all 0.4s ease'
      }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between py-6">
          {/* Logo/Name */}
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold"
            style={{ color: 'var(--text-primary)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            JIAREN
          </motion.button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="font-medium uppercase tracking-wider text-sm py-2 transition-all duration-400"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.label}
                </button>
                
                {/* Elegant underline animation */}
                <motion.div
                  className="absolute bottom-0 left-0 h-px"
                  style={{ backgroundColor: 'var(--text-primary)' }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden"
            style={{ color: 'var(--text-primary)' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
