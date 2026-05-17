import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#e33654',
          'pink-dark': '#c52a47',
          'pink-soft': '#fce4e9',
          green: '#77ba48',
          'green-dark': '#5e9a37',
          'green-soft': '#e8f4dc',
          cream: '#fff8f4',
          ink: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(227, 54, 84, 0.25)',
        card: '0 8px 24px -8px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4.5s ease-in-out infinite',
        drift: 'drift 10s ease-in-out infinite',
        'drift-rev': 'driftRev 12s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'gradient-x': 'gradientX 8s ease infinite',
        'gradient-shift': 'gradientShift 14s ease infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'blob': 'blob 18s ease-in-out infinite',
        'blob-slow': 'blob 26s ease-in-out infinite',
        'wave-slow': 'wave 12s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        'tilt': 'tilt 8s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-4deg)' },
          '50%': { transform: 'translateY(-22px) rotate(6deg)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0,0) rotate(-6deg)' },
          '33%':      { transform: 'translate(14px,-18px) rotate(4deg)' },
          '66%':      { transform: 'translate(-10px,-8px) rotate(-2deg)' },
        },
        driftRev: {
          '0%, 100%': { transform: 'translate(0,0) rotate(5deg)' },
          '33%':      { transform: 'translate(-16px,-14px) rotate(-6deg)' },
          '66%':      { transform: 'translate(12px,-6px) rotate(3deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientX: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%':      { 'background-position': '100% 50%' },
        },
        gradientShift: {
          '0%, 100%': { 'background-position': '0% 0%' },
          '25%':      { 'background-position': '100% 0%' },
          '50%':      { 'background-position': '100% 100%' },
          '75%':      { 'background-position': '0% 100%' },
        },
        shimmer: {
          '0%':   { 'background-position': '-200% 0' },
          '100%': { 'background-position': '200% 0' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%':      { transform: 'translate(40px, -30px) scale(1.1)' },
          '66%':      { transform: 'translate(-30px, 30px) scale(0.95)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateX(0) skewX(0deg)' },
          '50%':      { transform: 'translateX(-20px) skewX(-3deg)' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(0.7)', opacity: '0.7' },
          '80%, 100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        tilt: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%':      { transform: 'rotate(1deg)' },
        },
      },
      backgroundSize: {
        'size-200': '200% 200%',
        'size-300': '300% 300%',
        'size-400': '400% 400%',
      },
    },
  },
  plugins: [],
};

export default config;
