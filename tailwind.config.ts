import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        dark: {
          1: '#1C1F2E',   // Deep Charcoal
          2: '#161925',   // Dark Midnight
          3: '#252A41',   // Midnight Blue
          4: '#1E2757',   // Dark Slate Blue
        },
        blue: {
          1: '#0E78F9', // Dodger Blue
        },
        sky: {
          1: '#90CAF9',   // Light Sky Blue
          2: '#ECF0FF',   // Ghost White
          3: '#F5FCFF',   // Mint Cream
        },
        orange: {
          1: '#FFA726',   // Orange Burst
        },
        purple: {
          1: '#8E24AA',   // Purple Plum
        },
        yellow: {
          1: '#FFD54F',   // Mustard Yellow
        },
      },


      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        hero: "url('/images/hero-background.png')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;