'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-deep-space/90 backdrop-blur-xl border-b border-amber-glow/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-semibold text-amber-glow elegant-glow hover:text-gold-accent transition-all duration-300 font-elegant tracking-wide"
          >
            JIAREN
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-pearl-gray hover:text-amber-glow transition-all duration-300 font-medium text-sm tracking-wide uppercase letter-spacing-wider relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-glow transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('track-record')}
              className="text-pearl-gray hover:text-amber-glow transition-all duration-300 font-medium text-sm tracking-wide uppercase letter-spacing-wider relative group"
            >
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-glow transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-pearl-gray hover:text-amber-glow transition-all duration-300 font-medium text-sm tracking-wide uppercase letter-spacing-wider relative group"
            >
              Connect
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-glow transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-amber-glow hover:text-gold-accent transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
