'use client'

export function ContactSection() {
  return (
    <section id="contact" className="section bg-primary-black">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section title */}
          <h2 className="text-section text-primary-white mb-16">
            Contact
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Current Status */}
            <div>
              <h3 className="text-subsection text-primary-white mb-8">
                Current Status
              </h3>
              <div className="space-y-6 text-left">
                <div className="minimal-card bg-primary-black border-gray-dark p-6">
                  <p className="text-gray-light">
                    Building Ventry - AI for business optimization
                  </p>
                </div>
                <div className="minimal-card bg-primary-black border-gray-dark p-6">
                  <p className="text-gray-light">
                    Scaling Kairoo - Social practice platform
                  </p>
                </div>
                <div className="minimal-card bg-primary-black border-gray-dark p-6">
                  <p className="text-gray-light">
                    Open to investor conversations
                  </p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-subsection text-primary-white mb-8">
                Interests
              </h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-accent mt-3 flex-shrink-0" />
                  <p className="text-gray-light">AI/ML and reinforcement learning</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-accent mt-3 flex-shrink-0" />
                  <p className="text-gray-light">Startup partnerships and investments</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-accent mt-3 flex-shrink-0" />
                  <p className="text-gray-light">Technology for social impact</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-accent mt-3 flex-shrink-0" />
                  <p className="text-gray-light">Future of human-AI collaboration</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-gray-dark">
            <p className="text-gray-medium">
              © 2024 Jiaren. Building the future, one iteration at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}