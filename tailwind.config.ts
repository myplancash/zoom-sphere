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
            2: '#292D3E',   // Dark Slate
            3: '#3E445D',   // Midnight Navy
            4: '#475273',   // Dark Slate Blue
        },
        blue: {
            1: '#007BFF',   // Cerulean Blue
            2: '#4D94FF',   // Sky Blue
        },
        sky: {
            1: '#90CAF9',   // Light Sky Blue
            2: '#E6F2FF',   // Baby Blue
            3: '#F5FCFF',   // Mint Cream
        },
        orange: {
            1: '#FFA726',   // Orange Burst
            2: '#FFC154',   // Sunburst
        },
        purple: {
            1: '#8E24AA',   // Purple Plum
            2: '#B53FD3',   // Lavender Purple
        },
        yellow: {
            1: '#FFD54F',   // Mustard Yellow
            2: '#FFE97D',   // Pale Yellow
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