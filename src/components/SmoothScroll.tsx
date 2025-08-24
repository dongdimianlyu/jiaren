'use client'

import { useEffect, useRef } from 'react'

interface SmoothScrollProps {
  children: React.ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simple smooth scrolling with CSS
    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = 'smooth'
    }
  }, [])

  return (
    <div ref={scrollRef} data-scroll-container style={{ height: '100%' }}>
      {children}
    </div>
  )
}
