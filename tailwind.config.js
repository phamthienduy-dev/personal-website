/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          100: '#58CAEA',
          200: '#339AF0',
          300: '#407bff',
        },
        secondary: {
          100: '#7A5BF5',
          200: '#4933F0',
          300: '#4C46BE',
        },
      },
      textColor: {
        primary: {
          100: '#58CAEA',
          200: '#339AF0',
          300: '#407bff',
        },
        secondary: {
          100: '#7A5BF5',
          200: '#4933F0',
          300: '#4C46BE',
        },
      },
      fontFamily: {
        raleway: ['raleway'],
      },
    },
  },
};
