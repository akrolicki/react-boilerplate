/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',
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
      primary: {
        900: '#FDF3F3',
        800: '#FCE4E5',
        700: '#FBCDCE',
        600: '#F6A6A8',
        500: '#E7585B',
        400: '#D23033',
        300: '#B02528',
        200: '#841E20',
        100: '#5F1A1C',
      },
      secondary: {
        900: '#F6F8FD',
        800: '#E2E9F7',
        700: '#CCD9F1',
        600: '#A9C1E7',
        500: '#6282CF',
        400: '#4458B1',
        300: '#3D4A92',
        200: '#354073',
        100: '#242947',
      },
    },
    fontSize: {
      'heading-lg-desktop': ['72px', { lineHeight: '80px', fontWeight: '500' }],
      'heading-lg-mobile': ['48px', { lineHeight: '120%', fontWeight: '600' }],
      'heading-md-desktop': ['56px', { lineHeight: '64px', fontWeight: '600' }],
      'heading-sm-desktop': ['48px', { lineHeight: '56px', fontWeight: '600' }],
    },
    extend: {},
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.typography-heading-lg': {
          '@apply text-heading-lg-mobile': {},
          '@screen sm': {
            '@apply text-heading-lg-desktop': {},
          },
        },
        '.typography-heading-md': {
          '@apply text-heading-md-desktop': {},
        },
        '.typography-heading-sm': {
          '@apply text-heading-sm-desktop': {},
        },
      });
    },
  ],
};
