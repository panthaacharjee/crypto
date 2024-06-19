/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'nav-shadow': '0 0px 5px 3px #CB0881',
      }
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require('daisyui')],
}

