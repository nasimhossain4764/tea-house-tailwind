/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"], // Adjust based on your project structure
  theme: {
    extend: {
      colors: {
        clifford: "#da373d", // Custom color example
      },
    },
  },
  plugins: [],
};
