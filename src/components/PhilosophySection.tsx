'use client'

import { motion } from 'framer-motion'

export function PhilosophySection() {
  const principles = [
    "the deployment of general robots at scale will reshape society",
    "the best people should work on the most important problems",
    "the most beautiful art is created at the research frontier", 
    "the only acceptable speed is as fast as physically possible",
    "the only challenges worth overcoming are hard",
    "the magnitude of the opportunities ahead require a delusional ambition",
    "the success of a company is measured by its research contribution and net-impact"
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
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <section 
      id="philosophy" 
      className="py-32 px-8"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-5xl md:text-6xl font-bold mb-20 text-center"
          style={{ 
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}
        >
          Philosophy
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {principles.map((principle, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="minimal-card p-8 md:p-12 accent-border group"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <p 
                className="text-xl md:text-2xl leading-relaxed"
                style={{ 
                  color: 'var(--text-dimmed)',
                  lineHeight: 1.8
                }}
              >
                {principle}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Subtle decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1 }}
          className="flex justify-center mt-20"
        >
          <div 
            className="w-16 h-px"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
