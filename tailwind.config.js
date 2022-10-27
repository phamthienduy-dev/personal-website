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
      screens: {
        '2xl': '1280px',
      },
      colors: {
        primary: '#023E8A',
        secondary: {
          100: '#7A5BF5',
          200: '#4933F0',
          300: '#4C46BE',
        },
      },
      textColor: {
        primary: '#454545',
        secondary: {
          100: '#7A5BF5',
          200: '#4933F0',
          300: '#4C46BE',
        },
      },
      fontFamily: {
        body: ['Montserrat'],
      },
    },
  },
};
