import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
        "theme-w-alt" : "#efefef",
      },
      fontFamily : 
      {
        "main" : '"Roboto", serif',
        "main-alt" : '"Ysabeau SC", serif;',
      }
    },
  },
  plugins: [],
} satisfies Config;
