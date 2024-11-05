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
        'text-clr':'#C25555',
      }
    },
  },
  plugins: [],
}

