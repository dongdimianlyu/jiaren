'use client'

import { motion } from 'framer-motion'

export function PhilosophySection() {
  const principles = [
    "the deployment of general robots at scale will reshape society",
    "the best people should work on the most important problems",
    "the only acceptable speed is as fast as physically possible",
    "Superintelligence is inevitable",
    "It's risky to not take risks",
    "Creating superintelligence is creating a potential tyrant",
    "To avoid tyranny, superintelligence must be created in decentralized form. Regulations can kill innovation but also course correct us",
    "The only innovation worth pursuing is the one that serves human with dignity",
    "System must be geniusly combined with love"
  ]

  // Scroll-triggered Animations
  const scrollVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      transition: { duration: 0.6 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  }

  // Stagger Animation for Cards  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  // Hover Animations
  const hoverVariants = {
    rest: { scale: 1, opacity: 1 },
    hover: { 
      scale: 1.02, 
      opacity: 0.9,
      transition: { duration: 0.4, ease: "easeOut" }
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
    <motion.section
      id="philosophy"
      variants={scrollVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 px-8"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          variants={cardVariants}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          style={{ 
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}
        >
          Philosophy
        </motion.h2>
        
        <motion.div 
          variants={scrollVariants}
          className="space-y-8"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div 
                variants={hoverVariants}
                className="minimal-card p-8 md:p-12 accent-border cursor-pointer border border-gray-800 rounded-lg"
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
    </motion.section>
  )
}
