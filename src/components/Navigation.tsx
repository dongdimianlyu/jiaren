'use client'

import { useState, useEffect } from 'react'

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
      isScrolled 
        ? 'bg-primary-white border-b border-gray-light' 
        : 'bg-primary-white'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between py-6">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-primary-black hover:text-accent transition-colors duration-200"
          >
            JIAREN
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-primary-black hover:text-accent transition-colors duration-200 font-medium uppercase tracking-wider text-sm"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('philosophy')}
              className="text-primary-black hover:text-accent transition-colors duration-200 font-medium uppercase tracking-wider text-sm"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollToSection('track-record')}
              className="text-primary-black hover:text-accent transition-colors duration-200 font-medium uppercase tracking-wider text-sm"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-primary-black hover:text-accent transition-colors duration-200 font-medium uppercase tracking-wider text-sm"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary-black hover:text-accent transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
