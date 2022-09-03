/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        vencru: {
          main: '#455162',
          darkgray: '#657084',
          lightgray: '#F3F4F8',
          stroke: '#E4E6EB',
          black: '#1D1D1D',
          background: '#F9FAFC',
          white: '#FFFFFF',
          purp: '#5F4BCC',
          darkpurp: '#D6BBFB',
          lightpurp: '#F9F5FF',
          red: '#FF0000'
        },
      },
      extend: {
        boxShadow: {
          sb: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF',
          danger: ' 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FEE4E2',
          gray: 'box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7',
        },
      },
    },
    plugins: [
      // require('@tailwindcss/typography'),
      // require('@tailwindcss/forms'),
      // require('@tailwindcss/line-clamp'),
      // require("daisyui"),
    ],
}