/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      screens: {
        'dc': '1100px',
        'cd': '0px',
        
      },
      borderRadius: {
        '30': '30%',
      },

    },
  },
  plugins: [],
}

