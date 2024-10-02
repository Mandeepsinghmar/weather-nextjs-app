/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // This ensures Tailwind is applied to your app router components
    './components/**/*.{js,ts,jsx,tsx}', // If you have components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
