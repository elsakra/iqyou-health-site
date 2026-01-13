/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#B85D3E',
        'brand-cream': '#F5F1ED',
        'brand-gray': '#A8A8A8',
        'brand-dark': '#2D2D2D',
        'brand-teal': '#1B998B',
        'brand-blue': '#2E86AB'
      },
      fontFamily: {
        'serif': ['Georgia', 'Canela', 'Tiempos', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '30': '7.5rem',
        '36': '9rem'
      },
      maxWidth: {
        '8xl': '88rem'
      }
    },
  },
  plugins: [],
}