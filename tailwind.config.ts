import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium space-age color palette
        'deep-space': '#0A0E1A',
        'cosmic-navy': '#1B2951',
        'ethereal-blue': '#2D4A8C',
        'soft-purple': '#3E2E6B',
        'gentle-indigo': '#495C8C',
        'pristine-white': '#FFFFFF',
        'pearl-gray': '#F8F9FA',
        'soft-gray': '#E9ECEF',
        'cosmic-gray': '#6C757D',
        'amber-glow': '#FFB366',
        'gold-accent': '#D4A574',
        'crystal-blue': '#E8F4FD',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cosmic-gradient': 'linear-gradient(135deg, #0A0E1A 0%, #1B2951 50%, #2D4A8C 100%)',
        'elegant-gradient': 'linear-gradient(45deg, #2D4A8C 0%, #3E2E6B 50%, #495C8C 100%)',
        'depth-gradient': 'radial-gradient(ellipse at center, #1B2951 0%, #0A0E1A 70%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      animation: {
        'gentle-float': 'gentle-float 8s ease-in-out infinite',
        'soft-glow': 'soft-glow 3s ease-in-out infinite alternate',
        'elegant-drift': 'elegant-drift 30s linear infinite',
        'subtle-twinkle': 'subtle-twinkle 4s ease-in-out infinite',
        'smooth-scale': 'smooth-scale 0.3s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
      },
      keyframes: {
        'gentle-float': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-8px) translateX(4px)' },
          '66%': { transform: 'translateY(4px) translateX(-4px)' },
        },
        'soft-glow': {
          '0%': { boxShadow: '0 0 10px rgba(212, 165, 116, 0.3), 0 0 20px rgba(212, 165, 116, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 165, 116, 0.4), 0 0 40px rgba(212, 165, 116, 0.2)' },
        },
        'elegant-drift': {
          '0%': { transform: 'translateX(-50px) rotate(0deg)' },
          '100%': { transform: 'translateX(calc(100vw + 50px)) rotate(360deg)' },
        },
        'subtle-twinkle': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.2)' },
        },
        'smooth-scale': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        'elegant': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'premium': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
export default config
