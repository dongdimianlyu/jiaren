'use client'

export function HeroSection() {
  const tagline = "Building startups: iterating, failing, and learning. Taking hyper-risks for leverage before superintelligence. Creating what could become tyrant or servant. Simultaneously repelled and welcoming the inexhaustible possibilities of the future."

  return (
    <section id="hero" className="section pt-32">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Brutalist name display */}
          <h1 className="text-hero text-primary-black mb-8">
            JIAREN
          </h1>

          {/* Direct tagline */}
          <div className="mb-16">
            <p className="text-xl leading-relaxed text-gray-dark">
              {tagline}
            </p>
          </div>

          {/* Status indicator */}
          <div className="inline-block">
            <div className="accent-button px-6 py-3">
              <span className="font-medium text-sm uppercase tracking-wide">
                Currently Building
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
