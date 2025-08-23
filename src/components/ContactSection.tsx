'use client'

import { useState, useRef, useEffect } from 'react'

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    setFormData({ name: '', email: '', message: '' })
    
    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus('idle'), 3000)
  }

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative py-20 px-6 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section title */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-light mb-8 font-elegant tracking-wider">
            <span className="text-transparent bg-clip-text bg-elegant-gradient elegant-glow">
              CONNECT
            </span>
          </h2>
          <p className="text-xl text-pearl-gray/90 max-w-3xl mx-auto font-light leading-relaxed">
            Ready to build the future together? Let's discuss opportunities, partnerships, or just exchange ideas about what's coming next.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-8">
              <div className="glass-card p-10">
                <h3 className="text-3xl font-light text-amber-glow mb-8 elegant-glow font-elegant tracking-wide">
                  Current Status
                </h3>
                <div className="space-y-5">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-amber-glow rounded-full animate-subtle-twinkle" />
                    <span className="text-pearl-gray/90 font-light">Building Ventry - AI for business optimization</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-gold-accent rounded-full animate-subtle-twinkle" />
                    <span className="text-pearl-gray/90 font-light">Scaling Kairoo - Social practice platform</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-crystal-blue rounded-full animate-subtle-twinkle" />
                    <span className="text-pearl-gray/90 font-light">Open to investor conversations</span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-10">
                <h3 className="text-3xl font-light text-gold-accent mb-8 font-elegant tracking-wide">
                  Interests
                </h3>
                <ul className="space-y-4 text-pearl-gray/90">
                  <li className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-amber-glow rounded-full animate-subtle-twinkle" />
                    <span className="font-light">AI/ML and reinforcement learning</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-amber-glow rounded-full animate-subtle-twinkle" />
                    <span className="font-light">Startup partnerships and investments</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-amber-glow rounded-full animate-subtle-twinkle" />
                    <span className="font-light">Technology for social impact</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-amber-glow rounded-full animate-subtle-twinkle" />
                    <span className="font-light">Future of human-AI collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="glass-card p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-amber-glow font-medium mb-3 tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-deep-space/50 border border-amber-glow/20 rounded-2xl text-pearl-gray placeholder-pearl-gray/50 focus:border-amber-glow/50 focus:outline-none focus:ring-2 focus:ring-amber-glow/10 transition-all duration-500 font-light backdrop-blur-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-amber-glow font-medium mb-3 tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-deep-space/50 border border-amber-glow/20 rounded-2xl text-pearl-gray placeholder-pearl-gray/50 focus:border-amber-glow/50 focus:outline-none focus:ring-2 focus:ring-amber-glow/10 transition-all duration-500 font-light backdrop-blur-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-amber-glow font-medium mb-3 tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 bg-deep-space/50 border border-amber-glow/20 rounded-2xl text-pearl-gray placeholder-pearl-gray/50 focus:border-amber-glow/50 focus:outline-none focus:ring-2 focus:ring-amber-glow/10 transition-all duration-500 resize-none font-light backdrop-blur-sm"
                    placeholder="Tell me about your project, idea, or how we can collaborate..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 px-8 rounded-2xl font-medium text-lg transition-all duration-500 tracking-wide ${
                    isSubmitting
                      ? 'premium-button opacity-50 cursor-not-allowed'
                      : submitStatus === 'success'
                      ? 'premium-button bg-amber-glow/20 border-amber-glow/60'
                      : 'premium-button hover:scale-105'
                  }`}
                >
                  <span className="text-amber-glow">
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-4 h-4 border-2 border-amber-glow/30 border-t-amber-glow rounded-full animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : submitStatus === 'success' ? (
                      '✨ Message Sent Successfully!'
                    ) : (
                      'Send Message'
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass p-8 rounded-3xl inline-block">
            <p className="text-pearl-gray/80 font-light tracking-wide">
              © 2024 Jiaren. Building the future, one iteration at a time.
            </p>
          </div>
        </div>
      </div>

      {/* Elegant background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-20 h-20 border border-amber-glow/10 rounded-full animate-gentle-float opacity-20" />
        <div className="absolute bottom-10 left-10 w-16 h-16 border border-gold-accent/15 rounded-full animate-gentle-float opacity-30" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  )
}
