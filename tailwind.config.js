/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#82d2ec',
        'secondary': '#82a0ff'
      },
      fontFamily: {
        'berk': ['Berkshire Swash'],
        'madmi': ['Madimi One']
      }
    },   
  },
  plugins: [],
}