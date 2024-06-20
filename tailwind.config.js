/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-opacity': 'rgba(0, 0, 0, 0.411)',
      },
      boxShadow: {
        'nav-shadow': '0 0px 5px 3px #CB0881',
        'box-shadow':'0px 0px 1px 2px #ffdbf1'
      }
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require('daisyui')],
}

