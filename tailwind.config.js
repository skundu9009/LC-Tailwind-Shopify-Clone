/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs':'370px',         
      'sm': '460px',
      'md': '750px',
      'lg': '1080px',
      'xl': '1280px',
    },
    fontFamily:{
      'pfont':['Inter,sans-serif'],
      'serif':['serif']
  },
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },

      colors: {
        bggreenhover: '#004c3f',
        bggreen: '#008060',
        secpara: '#6b7177',
        sechead: '#212326',
        secparaone: '#42474c'

      }
    },
  },
  plugins: [],
}
