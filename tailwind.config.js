/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-md': '0 2px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}