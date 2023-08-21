/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      screens: {
        '2xl': '1320px',
      },
      colors: {
        primary: '#022C43',
        secondary: '#E8D5C4',
        secondary2: '#EA047E',
        textColor: '#979797',
      },
      fontWeight: {
        bold: '800',
        extrabold: '900',
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
};
