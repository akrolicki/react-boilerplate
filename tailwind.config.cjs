/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',
      primary: '#646CFF',
      secondary: '#FF9903',
      gray: {
        100: '#CCCCCC',
        200: '#B2B2B2',
        300: '#7F7F7F',
        400: '#666666',
        500: '#595959',
        600: '#4D4D4D',
        700: '#404040',
        800: '#333333',
        900: '#262626',
        1000: '#1A1A1A',
      },
    },
    extend: {},
  },
  plugins: [],
};
