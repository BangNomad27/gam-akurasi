/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    prefix: 'tw-', // untuk menghindari konflik antara Framework Tailwind CSS & React Bootstrap
  },
  plugins: [],
}

