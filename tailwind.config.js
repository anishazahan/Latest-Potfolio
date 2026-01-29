/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Adding the primary key here
        primary: {
          DEFAULT: '#b19777',
          foreground: '#0a0a0a', 
        },
        gold: {
          DEFAULT: '#b19777',
          light: '#d4c3ab',
          dark: '#8e795d',
        },
        background: '#0a0a0a',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};