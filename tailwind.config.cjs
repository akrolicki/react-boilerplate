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
      'h-3xl': [
        '48px',
        {
          lineHeight: '120%',
          fontWeight: '700',
        },
      ],
      'h-2xl': [
        '40px',
        {
          lineHeight: '120%',
          fontWeight: '700',
        },
      ],
      'h-xl': [
        '32px',
        {
          lineHeight: '120%',
          fontWeight: '700',
        },
      ],
      'h-lg': [
        '24px',
        {
          lineHeight: '120%',
          fontWeight: '700',
        },
      ],
      'h-md': [
        '18px',
        {
          lineHeight: '120%',
          fontWeight: '700',
        },
      ],
      'h-sm': [
        '16px',
        {
          lineHeight: '120%',
          fontWeight: '700',
        },
      ],
      'h-xs': [
        '14px',
        {
          lineHeight: '125%',
          fontWeight: '700',
        },
      ],
      'caption-md': ['12px', '125%'],
      'caption-sm': ['10px', '125%'],
      lg: ['18px', '160%'],
      md: ['16px', '160%'],
      sm: ['14px', '160%'],
      xs: ['12px', '140%'],
    },
    extend: {},
  },
  plugins: [],
};
