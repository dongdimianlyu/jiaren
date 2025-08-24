'use client'

import { useEffect, useRef, useCallback } from 'react'

// Refined Particle Configuration
const REFINED_PARTICLE_CONFIG = {
  count: 120,
  sizes: [1, 2, 3, 4], // Mix of sizes for depth
  opacities: [0.2, 0.3, 0.4, 0.6, 0.9], // Varied transparency - made more visible
  baseSpeed: 0.05, // Very slow constant drift
  cursorRadius: 150,
  cursorAttraction: 0.008, // Subtle magnetism
  returnForce: 0.003 // Gentle return to base position
}

// Enhanced Particle Class
class EnhancedParticle {
  x: number
  y: number
  baseX: number
  baseY: number
  size: number
  opacity: number
  baseVelocity: { x: number; y: number }
  phase: number

  constructor(canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.baseX = this.x
    this.baseY = this.y
    this.size = REFINED_PARTICLE_CONFIG.sizes[Math.floor(Math.random() * REFINED_PARTICLE_CONFIG.sizes.length)]
    this.opacity = REFINED_PARTICLE_CONFIG.opacities[Math.floor(Math.random() * REFINED_PARTICLE_CONFIG.opacities.length)]
    this.baseVelocity = {
      x: (Math.random() - 0.5) * REFINED_PARTICLE_CONFIG.baseSpeed,
      y: (Math.random() - 0.5) * REFINED_PARTICLE_CONFIG.baseSpeed
    }
    this.phase = Math.random() * Math.PI * 2 // For organic movement
  }

  update(mouseX: number, mouseY: number, time: number, canvas: HTMLCanvasElement) {
    // Organic floating motion
    this.baseX += Math.sin(time * 0.001 + this.phase) * 0.1
    this.baseY += Math.cos(time * 0.0008 + this.phase) * 0.1
    
    // Base drift
    this.baseX += this.baseVelocity.x
    this.baseY += this.baseVelocity.y
    
    // Cursor interaction
    const dx = mouseX - this.x
    const dy = mouseY - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    if (distance < REFINED_PARTICLE_CONFIG.cursorRadius) {
      const force = (REFINED_PARTICLE_CONFIG.cursorRadius - distance) / REFINED_PARTICLE_CONFIG.cursorRadius
      this.x += dx * force * REFINED_PARTICLE_CONFIG.cursorAttraction
      this.y += dy * force * REFINED_PARTICLE_CONFIG.cursorAttraction
    }
    
    // Gentle return to base
    this.x += (this.baseX - this.x) * REFINED_PARTICLE_CONFIG.returnForce
    this.y += (this.baseY - this.y) * REFINED_PARTICLE_CONFIG.returnForce
    
    // Wrap around screen
    if (this.baseX < -50) this.baseX = canvas.width + 50
    if (this.baseX > canvas.width + 50) this.baseX = -50
    if (this.baseY < -50) this.baseY = canvas.height + 50
    if (this.baseY > canvas.height + 50) this.baseY = -50
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.globalAlpha = this.opacity
    ctx.fillStyle = '#ffffff'
    ctx.shadowColor = '#ffffff'
    ctx.shadowBlur = this.size * 0.5 // Subtle glow for larger particles
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
  const particlesRef = useRef<EnhancedParticle[]>([])
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

    let startTime = Date.now()

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Reinitialize particles on resize
      initParticles()
    }
    
    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < REFINED_PARTICLE_CONFIG.count; i++) {
        particlesRef.current.push(new EnhancedParticle(canvas))
      }
    }
    
    const animate = () => {
      const currentTime = Date.now()
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particlesRef.current.forEach(particle => {
        particle.update(mouseRef.current.x, mouseRef.current.y, currentTime, canvas)
        particle.draw(ctx)
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    // Start immediately - no delays
    resizeCanvas()
    initParticles()
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
