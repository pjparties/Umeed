/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        navbg : '#FFB8C6',
        secondarybg : '#FF5678',
        primarytwo : '#FFE2E8',
        textsec : '#FF5a5c',
        lightblack : '#383838',
        darkblue : '#39455F',
        linkcolor : '#288CE9',
        getinTouch : '#FFF2F5',
        getinTouch2 : '#DD5471',
        getinTouch3 : '#FF6685',
        background : '#FFEFF2',
        donate2:'#E8E8E8',
        unchecked:'#FFE6EB',
        checked: '#FFf8f8',
        search:'#F6F6F6',
      },
      dropShadow:{
        '7xl':'-1px 4px 20px -6px rgba(0,0,0,0.75)',
      }
    },
  },
  plugins: [],
}

