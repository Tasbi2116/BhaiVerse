/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#050a14',
          100: '#0a1628',
          200: '#0f2040',
        },
        electric: '#3b82f6',
        purple: '#8b5cf6',
        cyan: '#06b6d4',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        display: ['"Orbitron"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { filter: 'brightness(1)' },
          to: { filter: 'brightness(1.15)' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}