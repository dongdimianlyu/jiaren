'use client'

import { motion } from 'framer-motion'

export function ContactSection() {
  const statusItems = [
    "Building Ventry - AI for business optimization",
    "Scaling Kairoo - Social practice platform", 
    "Open to investor conversations"
  ]

  const interests = [
    "AI/ML and reinforcement learning",
    "Startup partnerships and investments",
    "Technology for social impact",
    "Future of human-AI collaboration"
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  return (
    <section 
      id="contact" 
      className="py-32 px-8"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 
            className="text-5xl md:text-6xl font-bold mb-8"
            style={{ 
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em'
            }}
          >
            Contact
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Current Status */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-bold mb-12 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              Current Status
            </motion.h3>
            <motion.div 
              variants={cardContainerVariants}
              className="space-y-6"
            >
              {statusItems.map((status, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="minimal-card p-6 md:p-8"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <p 
                    className="text-lg leading-relaxed text-center"
                    style={{ 
                      color: 'var(--text-dimmed)',
                      lineHeight: 1.7
                    }}
                  >
                    {status}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Interests */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-bold mb-12 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              Interests
            </motion.h3>
            <motion.div 
              variants={cardContainerVariants}
              className="space-y-6"
            >
              {interests.map((interest, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-4 group"
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: 'var(--text-primary)' }}
                    whileHover={{
                      scale: 1.5,
                      transition: { duration: 0.3 }
                    }}
                  />
                  <p 
                    className="text-lg leading-relaxed group-hover:opacity-80 transition-opacity duration-300"
                    style={{ 
                      color: 'var(--text-dimmed)',
                      lineHeight: 1.7
                    }}
                  >
                    {interest}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center pt-12"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          <p 
            className="text-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            © 2024 Jiaren. Building the future, one iteration at a time.
          </p>
        </motion.div>

        {/* Final decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1 }}
          className="flex justify-center mt-16"
        >
          <motion.div 
            className="w-24 h-px"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
            animate={{
              scaleX: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}