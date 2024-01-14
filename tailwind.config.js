/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#e3e6e6',
        'nav-top': '#131921',
        'nav-bottom': '#232f3e',
      'nav-btn': '#febd69'
      },
      textColor:{
        'nav-color':'#0F1111'
      },
      boxShadow:{
        "focus-sh":"0 0 0 3px #c8f3fa,0 1px 2px rgba(15,17,17,.15) inset",
        "input-sh":"0 1px 0 rgba(255,255,255,.5),0 1px 0 rgba(0,0,0,.07) inset"
      }
      
    },
  },
  plugins: [],
}