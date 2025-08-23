import { HeroSection } from '@/components/HeroSection'
import { TrackRecordSection } from '@/components/TrackRecordSection'
import { ContactSection } from '@/components/ContactSection'
import { Navigation } from '@/components/Navigation'
import { StarField } from '@/components/StarField'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Animated starfield background */}
      <StarField />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Track Record Section */}
      <TrackRecordSection />
      
      {/* Contact Section */}
      <ContactSection />
    </main>
  )
}
