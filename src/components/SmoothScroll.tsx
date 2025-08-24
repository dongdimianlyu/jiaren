'use client'

import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

interface SmoothScrollProps {
  children: React.ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let scroll: LocomotiveScroll | null = null

    const initScroll = () => {
      if (scrollRef.current) {
        scroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 0.8,
          class: 'is-revealed',
          smartphone: {
            smooth: true,
            breakpoint: 767
          },
          tablet: {
            smooth: true,
            breakpoint: 1024
          }
        })
      }
    }

    // Wait for images to load before initializing
    const timer = setTimeout(initScroll, 100)

    return () => {
      clearTimeout(timer)
      if (scroll) {
        scroll.destroy()
      }
    }
  }, [])

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  )
}
