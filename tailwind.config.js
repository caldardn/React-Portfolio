/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      screens: {
        'dc': '768px',
        'cd': '0px'
      },
    },
  },
  plugins: [],
}

