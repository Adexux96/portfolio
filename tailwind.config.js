/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add 'Orbitron' for headings and 'Source Code Pro' for body/code
        heading: ['Orbitron', ...defaultTheme.fontFamily.sans],
        body: ['"Source Code Pro"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'space-dark': '#0a0a1a',
        'space-mid': '#1a1a3a',
        'space-light': '#2a2a5a',
        'accent-teal': '#36d399',
        'accent-pink': '#f871b0',
        'accent-purple': '#a855f7',
        'star-yellow': '#facc15',
      },
      animation: {
        stars: 'stars 150s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'subtle-glow': 'subtle-glow 4s ease-in-out infinite alternate',
        'portal-swirl': 'portal-swirl 20s linear infinite',
      },
      keyframes: {
        stars: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 -10000px' },
        },
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.85', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'subtle-glow': {
          '0%': { boxShadow: '0 0 15px theme("colors.accent-teal/50%"), 0 0 25px theme("colors.accent-teal/30%")' },
          '50%': { boxShadow: '0 0 15px theme("colors.accent-pink/50%"), 0 0 25px theme("colors.accent-purple/30%")' },
          '100%': { boxShadow: '0 0 15px theme("colors.accent-teal/50%"), 0 0 25px theme("colors.accent-teal/30%")' },
        },
        'portal-swirl': {
           '0%': { transform: 'rotate(0deg) scale(1.5)' },
           '100%': { transform: 'rotate(360deg) scale(1.5)' },
        }
      },
      backgroundImage: {
        'hero-pattern': "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
        'section-gradient': "linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 100%)",
        'stars-pattern': "url('/stars-bg.svg')",
        'nebula-gradient': "radial-gradient(circle at top left, theme('colors.accent-pink/30%'), transparent 40%), radial-gradient(circle at bottom right, theme('colors.accent-purple/30%'), transparent 40%)",
        // Added subtle geometric pattern
        'geometric-pattern': `linear-gradient(135deg, rgba(42, 42, 90, 0.1) 25%, transparent 25%),
                            linear-gradient(225deg, rgba(42, 42, 90, 0.1) 25%, transparent 25%),
                            linear-gradient(45deg, rgba(42, 42, 90, 0.1) 25%, transparent 25%),
                            linear-gradient(315deg, rgba(42, 42, 90, 0.1) 25%, transparent 25%)`,
      },
      backgroundSize: {
        'geo-size': '40px 40px', // Size for the geometric pattern
      }
    },
  },
  plugins: [],
}
