'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  opacity: number
  size: number
  twinkleSpeed: number
  driftX: number
  driftY: number
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number>()
  const timeRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize elegant stars
    const initStars = () => {
      starsRef.current = []
      for (let i = 0; i < 80; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          opacity: Math.random() * 0.8 + 0.2,
          size: Math.random() * 1.5 + 0.5,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          driftX: (Math.random() - 0.5) * 0.2,
          driftY: (Math.random() - 0.5) * 0.1
        })
      }
    }
    initStars()

    // Elegant animation loop
    const animate = (currentTime: number) => {
      timeRef.current = currentTime * 0.001 // Convert to seconds
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Create subtle depth gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      )
      gradient.addColorStop(0, 'rgba(27, 41, 81, 0.1)')
      gradient.addColorStop(0.7, 'rgba(10, 14, 26, 0.3)')
      gradient.addColorStop(1, 'rgba(10, 14, 26, 0.5)')
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw elegant stars
      starsRef.current.forEach((star, index) => {
        // Gentle drift movement
        star.x += star.driftX
        star.y += star.driftY
        
        // Wrap around screen edges
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0

        // Gentle twinkling
        const twinkle = Math.sin(timeRef.current * star.twinkleSpeed + index) * 0.3 + 0.7
        const currentOpacity = star.opacity * twinkle

        // Elegant color palette
        const colors = [
          'rgba(212, 165, 116, ', // Gold accent
          'rgba(255, 179, 102, ', // Amber glow
          'rgba(232, 244, 253, ', // Crystal blue
        ]
        const colorBase = colors[index % colors.length]
        
        ctx.save()
        ctx.globalAlpha = currentOpacity
        
        // Draw soft star glow
        const glowSize = star.size * 8
        const starGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, glowSize)
        starGradient.addColorStop(0, colorBase + '0.8)')
        starGradient.addColorStop(0.3, colorBase + '0.3)')
        starGradient.addColorStop(1, colorBase + '0)')
        
        ctx.fillStyle = starGradient
        ctx.beginPath()
        ctx.arc(star.x, star.y, glowSize, 0, Math.PI * 2)
        ctx.fill()
        
        // Draw star core
        ctx.fillStyle = colorBase + '1)'
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size * 0.8, 0, Math.PI * 2)
        ctx.fill()
        
        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-70"
      style={{ background: 'transparent' }}
    />
  )
}
