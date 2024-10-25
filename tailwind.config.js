/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#B9FF66',
      'secondary': '#191A23',
      'tertiary': '#ff77e9',
      'bermuda': '#F3F3F3',
      'gray600':'#4B5563',
      'gray800':'#1F2937',
      'white':'#FFFF',
      'blue900':'#1E3A8A',
      'green100':'#D1FAE5',
      'green500':'#10B981',
    },
    fontFamily:{
      'primary': ['Space Grotesk',' sans-serif']
    },
    screens: {
      'xl': {'max': '1200px'},
      'lg': {'max': '991px'},
      'md': {'max': '767px'},
      'sm': {'max': '550px'},
      'xsm': {'max': '375px'},
    }
  },
  plugins: [],
}

