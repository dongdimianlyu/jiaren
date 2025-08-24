import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LayoutWrapper } from '@/components/LayoutWrapper'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Jiaren - Building the Future',
  description: 'Hyyper-risks for leverage before superintelligence.',
  keywords: ['entrepreneur', 'startup', 'founder', 'AI', 'technology', 'future'],
  authors: [{ name: 'Jiaren' }],
  openGraph: {
    title: 'Jiaren - Building the Future',
    description: 'Hyyper-risks for leverage before superintelligence.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jiaren - Building the Future',
    description: 'Hyyper-risks for leverage before superintelligence.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
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
      <body className={`${inter.className} min-h-screen overflow-x-hidden`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  )
}
