/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        dc: "1100px",
        cd: "0px",
      },
      borderRadius: {
        30: "30%",
      },
      backgroundImage: (theme) => ({
        "main-bg":
          "url('https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }),
    },
  },
  plugins: [],
};
