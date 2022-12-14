/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('./public/logo.png')",
      },
      backgroundColor:theme =>({
        ...theme('colors'),
        'primary' : '#EE4E34',
        'secondary' : '#FCEDDA',
      }),
      textColor : {
        'primary' : '#EE4E34',
        'secondary' : '#FCEDDA',
      },
      fontFamily : {
        'Abel' : ['Abel', 'san-serif'],
      }
    },
  },
  plugins: [],
}
