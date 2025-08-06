/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFFEF5',
          100: '#FFF9E6',
          200: '#FFE999',
          300: '#FFD700',
          400: '#FFC700',
          500: '#FFB800',
          600: '#FFA500',
          700: '#FF8C00',
          800: '#FF7F00',
          900: '#FF6600',
        },
        black: {
          DEFAULT: '#000000',
          100: '#1a1a1a',
          200: '#0f0f0f',
          300: '#0a0a0a',
          400: '#050505',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-5px)' },
          '60%': { transform: 'translateY(-3px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 215, 0, 0.8)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFD700, #FFA500)',
        'black-gradient': 'linear-gradient(135deg, #1a1a1a, #000000)',
        'radial-gold': 'radial-gradient(circle, #FFD700, #FFA500)',
      },
    },
  },
  plugins: [],
}