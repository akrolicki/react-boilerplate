/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',
      primary: '#4734F7',
      secondary: '#FF9903',
      gray: {
        50: '#F6F6F6',
        100: '#FAFAFB',
        200: '#F4F5F7',
        300: '#E9EBF0',
        400: '#DFE2E8',
        500: '#D4D8E1',
        600: '#C9CED9',
        700: '#A1A5AE',
        800: '#6E7177',
        900: '#505257',
        1000: '#28292B',
      },
    },
    extend: {},
  },
  plugins: [],
};
