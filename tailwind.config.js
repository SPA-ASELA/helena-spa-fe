/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          aclonica: ["aclonica", "sans-serif"],
        },
        colors: {
          prim: {
            '50': '#FFF8E7',
            '100': '#FAE3C6',
            '500': '#FFC275',
            '700': '#EE8E15',
            '900': '#D17B0D',
            '950': '#703E00',
          },
         "sec": "#FCCE90",
         "err": "#CB3F59",
         "light-gray": "#BCBCBC",
        },
        screens: {
          'xs': '400px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
        },
      },
    },
    plugins: [],
  }