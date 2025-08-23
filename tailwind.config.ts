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
        // Space-themed color palette
        'cosmic-blue': '#0B1426',
        'nebula-purple': '#1A0B2E',
        'stellar-cyan': '#00F5FF',
        'plasma-pink': '#FF006E',
        'energy-yellow': '#FFD23F',
        'void-black': '#000000',
        'stardust-white': '#FFFFFF',
        'aurora-green': '#39FF14',
        'galactic-indigo': '#4B0082',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cosmic-gradient': 'linear-gradient(135deg, #0B1426 0%, #1A0B2E 50%, #000000 100%)',
        'aurora-gradient': 'linear-gradient(45deg, #00F5FF 0%, #FF006E 50%, #FFD23F 100%)',
        'nebula-gradient': 'radial-gradient(ellipse at center, #1A0B2E 0%, #0B1426 50%, #000000 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'drift': 'drift 20s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 5px #00F5FF, 0 0 10px #00F5FF, 0 0 15px #00F5FF' },
          '100%': { boxShadow: '0 0 10px #00F5FF, 0 0 20px #00F5FF, 0 0 30px #00F5FF' },
        },
        drift: {
          '0%': { transform: 'translateX(-100px)' },
          '100%': { transform: 'translateX(calc(100vw + 100px))' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
      fontFamily: {
        'space': ['Orbitron', 'monospace'],
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
export default config
