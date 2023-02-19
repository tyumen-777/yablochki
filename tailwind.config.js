/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/screens/**/*.{js,ts,jsx,tsx}",
    "./src/screens/**/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      black : '#343434',
      white: '#FFFFFF',
      grey: 'rgba(0, 0, 0, 0.08)'
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
}