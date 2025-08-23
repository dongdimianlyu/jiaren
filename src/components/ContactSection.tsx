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
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-plasma-pink to-aurora-green neon-glow">
              CONNECT
            </span>
          </h2>
          <p className="text-xl text-stardust-white/80 max-w-3xl mx-auto">
            Ready to build the future together? Let's discuss opportunities, partnerships, or just exchange ideas about what's coming next.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-8">
              <div className="glass p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 holographic opacity-20" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-stellar-cyan mb-6 neon-glow">
                    Current Status
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-aurora-green rounded-full animate-pulse" />
                      <span className="text-stardust-white">Building Ventry - AI for business optimization</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-energy-yellow rounded-full animate-pulse" />
                      <span className="text-stardust-white">Scaling Kairoo - Social practice platform</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-plasma-pink rounded-full animate-pulse" />
                      <span className="text-stardust-white">Open to investor conversations</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 holographic opacity-20" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-plasma-pink mb-6">
                    Interests
                  </h3>
                  <ul className="space-y-3 text-stardust-white/90">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-stellar-cyan rounded-full" />
                      <span>AI/ML and reinforcement learning</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-stellar-cyan rounded-full" />
                      <span>Startup partnerships and investments</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-stellar-cyan rounded-full" />
                      <span>Technology for social impact</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-stellar-cyan rounded-full" />
                      <span>Future of human-AI collaboration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="glass p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 holographic opacity-20" />
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div>
                  <label className="block text-stellar-cyan font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-cosmic-blue/50 border border-stellar-cyan/30 rounded-xl text-stardust-white placeholder-stardust-white/50 focus:border-stellar-cyan focus:outline-none focus:ring-2 focus:ring-stellar-cyan/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-stellar-cyan font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-cosmic-blue/50 border border-stellar-cyan/30 rounded-xl text-stardust-white placeholder-stardust-white/50 focus:border-stellar-cyan focus:outline-none focus:ring-2 focus:ring-stellar-cyan/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-stellar-cyan font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-cosmic-blue/50 border border-stellar-cyan/30 rounded-xl text-stardust-white placeholder-stardust-white/50 focus:border-stellar-cyan focus:outline-none focus:ring-2 focus:ring-stellar-cyan/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, idea, or how we can collaborate..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 relative overflow-hidden ${
                    isSubmitting
                      ? 'bg-cosmic-blue/50 text-stardust-white/50 cursor-not-allowed'
                      : submitStatus === 'success'
                      ? 'bg-aurora-green text-cosmic-blue neon-border'
                      : 'bg-gradient-to-r from-stellar-cyan to-plasma-pink text-cosmic-blue hover:from-plasma-pink hover:to-energy-yellow neon-border'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-stardust-white/30 border-t-stardust-white rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </div>
                  ) : submitStatus === 'success' ? (
                    'Message Sent Successfully!'
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass p-6 rounded-2xl inline-block">
            <p className="text-stardust-white/80">
              © 2024 Jiaren. Building the future, one iteration at a time.
            </p>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-28 h-28 border border-plasma-pink/20 rotate-45 animate-float" />
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-aurora-green/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  )
}
