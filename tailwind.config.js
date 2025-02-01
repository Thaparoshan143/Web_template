/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: 
      {
        "theme": "#5019e4",
        "theme-alt": "#3007c2",
        "theme-cont" : "#FA4032",
        "theme-cont-alt" : "#d93021",
        "theme-w" : "#ffffff",
        "theme-w-alt" : "#dedede",
      },
      fontFamily : 
      {
        "main" : '"Roboto", serif',
        "main-alt" : '"Ysabeau SC", serif;',
      }
    },
  },
  plugins: [],
}

