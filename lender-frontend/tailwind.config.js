/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#1d4ed8',
        accent: '#7c3aed',
        ink: '#0f172a',
        soft: '#eff6ff',
        warm: '#10b981',
      },
      boxShadow: {
        glow: '0 20px 45px -20px rgba(20,184,166,0.35)',
        panel: '0 18px 45px -26px rgba(15, 23, 42, 0.55)',
      },
      backgroundImage: {
        'grid-soft': 'radial-gradient(circle at top, rgba(255,255,255,0.12), transparent 45%), linear-gradient(180deg, rgba(15,23,42,0.8), rgba(15,23,42,0.95))',
      },
    },
  },
  plugins: [],
};
