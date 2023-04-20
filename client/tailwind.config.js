/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        navbg : '#FFB8C6',
        secondarybg : '#FF5678',
        primarytwo : '#FFE2E8',
        getinTouch : '#FFF2F5',
        getinTouch2 : '#DD5471',
        getinTouch3 : '#DD5471',
      }
    },
  },
  plugins: [],
}

