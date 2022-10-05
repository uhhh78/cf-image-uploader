/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#fc0f5a"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}