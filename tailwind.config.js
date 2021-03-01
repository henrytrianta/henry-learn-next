const indigo = {
  50: '#E0E8F9',
  100: '#BED0F7',
  200: '#98AEEB',
  300: '#7B93DB',
  400: '#647ACB',
  500: '#4C63B6',
  600: '#4055A8',
  700: '#35469C',
  800: '#2D3A8C',
  DEFAULT: '#19216C',
};

const orange = {
  50: '#FFE8D9',
  100: '#FFD0B5',
  200: '#FFB088',
  300: '#FF9466',
  400: '#F9703E',
  500: '#F35627',
  600: '#DE3A11',
  700: '#C52707',
  800: '#AD1D07',
  DEFAULT: '#841003',
};

// Neutral
const grey = {
  50: '#F5F7FA',
  100: '#E4E7EB',
  200: '#CBD2D9',
  300: '#9AA5B1',
  400: '#7B8794',
  500: '#616E7C',
  600: '#52606D',
  700: '#3E4C59',
  800: '#323F4B',
  DEFAULT: '#1F2933',
};

// Supporting
// Magenta
const magenta = {
  50: '#FDEBFF',
  100: '#F8C4FE',
  200: '#F48FFF',
  300: '#F368FC',
  400: '#ED47ED',
  500: '#E019D0',
  600: '#CB10B8',
  700: '#B30BA3',
  800: '#960888',
  DEFAULT: '#6E0560',
};

const red = {
  50: '#FFE3E3',
  100: '#FFBDBD',
  200: '#FF9B9B',
  300: '#F86A6A',
  400: '#EF4E4E',
  500: '#E12D39',
  600: '#CF1124',
  700: '#AB091E',
  800: '#8A041A',
  DEFAULT: '#610316',
};

const yellow = {
  50: '#FFFBEA',
  100: '#FFF3C4',
  200: '#FCE588',
  300: '#FADB5F',
  400: '#F7C948',
  500: '#F0B429',
  600: '#DE911D',
  700: '#CB6E17',
  800: '#B44D12',
  DEFAULT: '#8D2B0B',
};

const green = {
  50: '#E3F9E5',
  100: '#C1F2C7',
  200: '#91E697',
  300: '#51CA58',
  400: '#31B237',
  500: '#18981D',
  600: '#0F8613',
  700: '#0E7817',
  800: '#07600E',
  DEFAULT: '#014807',
};

module.exports = {
  purge: [
    '.src/pages/**/*.{js,ts,jsx,tsx}',
    '.src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      padding: '1rem',
      center: true,
    },
    extend: {
      colors: {
        // Pallete 19 - Refactoring UI
        // Indigo
        primary: grey,
        secondary: indigo,
        indigo,
        orange,
        grey,
        magenta,
        red,
        yellow,
        green,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
