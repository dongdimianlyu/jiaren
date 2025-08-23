import { HeroSection } from '@/components/HeroSection'
import { PhilosophySection } from '@/components/PhilosophySection'
import { TrackRecordSection } from '@/components/TrackRecordSection'
import { ContactSection } from '@/components/ContactSection'
import { Navigation } from '@/components/Navigation'

export default function Home() {
  return (
    <main className="relative z-30">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Philosophy Section */}
      <PhilosophySection />
      
      {/* Track Record Section */}
      <TrackRecordSection />
      
      {/* Contact Section */}
      <ContactSection />
    </main>
  )
}
