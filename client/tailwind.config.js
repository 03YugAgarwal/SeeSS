/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'white': '0 35px 35px rgba(255, 255, 255, 0.25)',
      }
    },
  },
  plugins: [],
}