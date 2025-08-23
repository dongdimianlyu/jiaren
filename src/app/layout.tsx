import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Jiaren - Building the Future',
  description: 'Building startups: iterating, failing, and learning. Taking hyper-risks for leverage before superintelligence. Creating what could become tyrant or servant.',
  keywords: ['entrepreneur', 'startup', 'founder', 'AI', 'technology', 'future'],
  authors: [{ name: 'Jiaren' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0B1426',
  openGraph: {
    title: 'Jiaren - Building the Future',
    description: 'Building startups: iterating, failing, and learning. Taking hyper-risks for leverage before superintelligence.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jiaren - Building the Future',
    description: 'Building startups: iterating, failing, and learning. Taking hyper-risks for leverage before superintelligence.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} min-h-screen bg-cosmic-gradient text-pristine-white overflow-x-hidden font-elegant`}>
        <div className="relative min-h-screen">
          {/* Background particles and effects will be added here */}
          <div id="background-effects" className="fixed inset-0 pointer-events-none z-0" />
          
          {/* Main content */}
          <div className="relative z-10">
            {children}
          </div>
          
          {/* Elegant cosmic effects */}
          <div className="fixed inset-0 pointer-events-none z-5">
            <div className="absolute top-10 left-10 w-1 h-1 bg-amber-glow rounded-full animate-subtle-twinkle opacity-60" />
            <div className="absolute top-20 right-20 w-0.5 h-0.5 bg-gold-accent rounded-full animate-subtle-twinkle opacity-40" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-20 left-20 w-1 h-1 bg-amber-glow rounded-full animate-subtle-twinkle opacity-50" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-10 right-10 w-0.5 h-0.5 bg-gold-accent rounded-full animate-subtle-twinkle opacity-60" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/2 left-1/3 w-0.5 h-0.5 bg-amber-glow rounded-full animate-subtle-twinkle opacity-30" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gold-accent rounded-full animate-subtle-twinkle opacity-70" style={{ animationDelay: '2.5s' }} />
          </div>
        </div>
      </body>
    </html>
  )
}
