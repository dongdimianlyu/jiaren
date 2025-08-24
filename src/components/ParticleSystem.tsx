'use client'

import { useEffect, useRef, useCallback } from 'react'

// Particle Configuration
const PARTICLE_CONFIG = {
  count: 125,
  size: { min: 1, max: 3 },
  opacity: { min: 0.2, max: 0.8 },
  speed: { base: 0.1, cursor: 0.3 },
  cursorRadius: 120,
  colors: ['#ffffff', '#f0f0f0', '#e0e0e0']
}

// Particle Class Implementation
class Particle {
  x: number
  y: number
  baseX: number
  baseY: number
  size: number
  opacity: number
  velocity: { x: number; y: number }
  color: string

  constructor(canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.baseX = this.x
    this.baseY = this.y
    this.size = Math.random() * (PARTICLE_CONFIG.size.max - PARTICLE_CONFIG.size.min) + PARTICLE_CONFIG.size.min
    this.opacity = Math.random() * (PARTICLE_CONFIG.opacity.max - PARTICLE_CONFIG.opacity.min) + PARTICLE_CONFIG.opacity.min
    this.velocity = {
      x: (Math.random() - 0.5) * PARTICLE_CONFIG.speed.base,
      y: (Math.random() - 0.5) * PARTICLE_CONFIG.speed.base
    }
    this.color = PARTICLE_CONFIG.colors[Math.floor(Math.random() * PARTICLE_CONFIG.colors.length)]
  }

  update(mouseX: number, mouseY: number, canvas: HTMLCanvasElement) {
    // Distance to cursor
    const dx = mouseX - this.x
    const dy = mouseY - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    // Cursor attraction (subtle)
    if (distance < PARTICLE_CONFIG.cursorRadius) {
      const force = (PARTICLE_CONFIG.cursorRadius - distance) / PARTICLE_CONFIG.cursorRadius
      this.x += dx * force * 0.01
      this.y += dy * force * 0.01
    }
    
    // Return to base position (rubber band effect)
    this.x += (this.baseX - this.x) * 0.01
    this.y += (this.baseY - this.y) * 0.01
    
    // Random drift
    this.baseX += this.velocity.x
    this.baseY += this.velocity.y
    
    // Boundary wrapping
    if (this.baseX < 0) this.baseX = canvas.width
    if (this.baseX > canvas.width) this.baseX = 0
    if (this.baseY < 0) this.baseY = canvas.height
    if (this.baseY > canvas.height) this.baseY = 0
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.globalAlpha = this.opacity
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }
}

// Throttle function for performance
function throttle<T extends (...args: any[]) => any>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null
  let lastExecTime = 0
  return (...args: Parameters<T>) => {
    const currentTime = Date.now()
    
    if (currentTime - lastExecTime > delay) {
      func(...args)
      lastExecTime = currentTime
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(() => {
        func(...args)
        lastExecTime = Date.now()
      }, delay - (currentTime - lastExecTime))
    }
  }
}

export function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  // Throttled mouse move handler for performance
  const throttledMouseMove = useCallback(
    throttle((e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }, 16), // 60fps
    []
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Reinitialize particles on resize
      initParticles()
    }
    
    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < PARTICLE_CONFIG.count; i++) {
        particlesRef.current.push(new Particle(canvas))
      }
    }
    
    const animate = () => {
      // Clear canvas with transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update(mouseRef.current.x, mouseRef.current.y, canvas)
        particle.draw(ctx)
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    // Initialize
    resizeCanvas()
    animate()
    
    // Event listeners
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', throttledMouseMove)
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', throttledMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [throttledMouseMove])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ 
        background: 'transparent',
        zIndex: 0
      }}
    />
  )
}
