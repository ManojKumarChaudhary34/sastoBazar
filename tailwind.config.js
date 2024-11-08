/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-image':'#F0EEED',
        'primary-clr':'#921A40',
      }
    },
  },
  plugins: [],
}

