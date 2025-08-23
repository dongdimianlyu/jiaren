'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  z: number
  size: number
  speed: number
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number>()

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

    // Initialize stars
    const initStars = () => {
      starsRef.current = []
      for (let i = 0; i < 200; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1
        })
      }
    }
    initStars()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
      )
      gradient.addColorStop(0, 'rgba(26, 11, 46, 0.8)')
      gradient.addColorStop(0.5, 'rgba(11, 20, 38, 0.6)')
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)')
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update stars
      starsRef.current.forEach((star, index) => {
        // Move star
        star.z -= star.speed
        
        // Reset star if it's too close
        if (star.z <= 0) {
          star.x = Math.random() * canvas.width
          star.y = Math.random() * canvas.height
          star.z = 1000
        }

        // Calculate screen position
        const screenX = (star.x - canvas.width / 2) * (500 / star.z) + canvas.width / 2
        const screenY = (star.y - canvas.height / 2) * (500 / star.z) + canvas.height / 2
        const screenSize = star.size * (500 / star.z)

        // Only draw if star is on screen
        if (screenX >= 0 && screenX <= canvas.width && screenY >= 0 && screenY <= canvas.height) {
          // Create star glow
          const opacity = Math.min(1, (1000 - star.z) / 1000)
          const colors = ['#00F5FF', '#FF006E', '#FFD23F', '#39FF14']
          const color = colors[index % colors.length]
          
          ctx.save()
          ctx.globalAlpha = opacity
          
          // Draw star glow
          const gradient = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, screenSize * 3)
          gradient.addColorStop(0, color)
          gradient.addColorStop(1, 'transparent')
          ctx.fillStyle = gradient
          ctx.fillRect(screenX - screenSize * 3, screenY - screenSize * 3, screenSize * 6, screenSize * 6)
          
          // Draw star core
          ctx.fillStyle = color
          ctx.beginPath()
          ctx.arc(screenX, screenY, screenSize, 0, Math.PI * 2)
          ctx.fill()
          
          ctx.restore()
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

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
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
}
