/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#0f766e',
        accent: '#14b8a6',
        ink: '#0f172a',
        soft: '#ecfeff',
        warm: '#f59e0b',
      },
      boxShadow: {
        glow: '0 20px 45px -20px rgba(20,184,166,0.35)',
        panel: '0 18px 45px -26px rgba(15, 23, 42, 0.55)',
      },
      backgroundImage: {
        'grid-soft': 'radial-gradient(circle at top, rgba(255,255,255,0.12), transparent 45%), linear-gradient(180deg, rgba(15,23,42,0.8), rgba(15,23,42,0.95))',
        'grid-soft-light': 'radial-gradient(circle at top, rgba(0,0,0,0.05), transparent 45%), linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.95))',
      },
    },
  },
  plugins: [],
};
