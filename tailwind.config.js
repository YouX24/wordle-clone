/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "bree": ['Bree Serif', 'serif'],
        "poppins": ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}
