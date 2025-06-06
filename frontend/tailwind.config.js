/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',               // Your HTML file
    './src/**/*.{js,ts,jsx,tsx}',  // Your source files (JS, JSX, TS, TSX)
  ],
  theme: {
    extend: {
      colors:{
        "rabbit-red":"#050414",
      }
    },
  },
  plugins: [],
};
