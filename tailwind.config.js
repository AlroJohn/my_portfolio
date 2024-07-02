/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        scaleBig: {
          '0%': { transform: 'scale(0.3)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        fadeInOut:{
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        }
      },
      animation: {
        'scale-big': 'scaleBig both',
        'fade-in-out': 'fadeInOut both',
      },
      boxShadow: {
        'custom-md': '0 2px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}