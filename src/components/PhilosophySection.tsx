'use client'

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

  return (
    <section id="philosophy" className="section bg-primary-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-section text-primary-black mb-16">
            Philosophy
          </h2>
          
          <div className="space-y-8">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="minimal-card p-8 accent-border"
              >
                <p className="text-xl leading-relaxed text-primary-black">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
