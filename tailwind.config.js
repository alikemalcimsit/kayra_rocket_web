/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        'hero': "url('../src/assets/bg1.jpg')",
        'hero2': "url('../src/assets/bg2.jpg')",
      },
  
    },
  },
  plugins: [],
}

