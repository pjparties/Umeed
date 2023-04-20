/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        navbg : '#FFB8C6',
        secondarybg : '#FF5678',
        primarytwo : '#FFE2E8',
      }
    },
  },
  plugins: [],
}

