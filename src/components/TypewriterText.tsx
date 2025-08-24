'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypewriterTextProps {
  text: string
  delay?: number
  speed?: number
  className?: string
  style?: React.CSSProperties
}

export function TypewriterText({ 
  text, 
  delay = 0, 
  speed = 50,
  className = '',
  style = {}
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let i = 0
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(prev => prev + text.charAt(i))
          i++
        } else {
          clearInterval(interval)
          // Hide cursor after typing is complete
          setTimeout(() => setShowCursor(false), 1000)
        }
      }, speed)
      
      return () => clearInterval(interval)
    }, delay)
    
    return () => clearTimeout(timer)
  }, [text, delay, speed])

  return (
    <span className={className} style={style}>
      {displayText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="inline-block w-0.5 h-6 bg-white ml-1"
        />
      )}
    </span>
  )
}

// Enhanced Typing Animation for Philosophy Text
interface TypingPhilosophyProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

export function TypingPhilosophy({ text, className = '', style = {} }: TypingPhilosophyProps) {
  const [displayText, setDisplayText] = useState('')
  
  useEffect(() => {
    let i = 0
    const startTyping = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(prev => prev + text.charAt(i))
          i++
        } else {
          clearInterval(interval)
        }
      }, 40) // Slower, more deliberate
      
      return () => clearInterval(interval)
    }, 1500) // Initial delay
    
    return () => clearTimeout(startTyping)
  }, [text])
  
  return <span className={className} style={style}>{displayText}</span>
}
