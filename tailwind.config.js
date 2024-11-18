/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "header-shadow": "0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
        "card-shadow": "0px 0px 8px 0px rgba(237, 237, 237, 1)",
      },
    },
  },
  plugins: [],
};
