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
        // Brutalist minimalist palette
        'primary-black': '#000000',
        'primary-white': '#FFFFFF',
        'gray-light': '#F5F5F5',
        'gray-medium': '#808080',
        'gray-dark': '#333333',
        'accent': '#B8860B',
      },
      backgroundImage: {
        // Minimal gradients only if absolutely necessary
        'subtle-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%)',
      },
      animation: {
        // Minimal animations only for essential functionality
        'fade': 'fade 0.2s ease-out',
      },
      keyframes: {
        'fade': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      fontFamily: {
        'brutalist': ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'section': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'subsection': ['1.5rem', { lineHeight: '1.3', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
}
export default config
