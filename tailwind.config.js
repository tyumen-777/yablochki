/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/screens/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary' : '#6667AB',
      'white' : '#FFFFFF',
      'black' : 'rgba(52, 52, 52, 1)',
      'background' : 'rgba(245, 245, 247, 1)'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [{
      mytheme: {
        primary: '#6667AB',
        secondary: '#333333'
      }
    }],
    base: false
  }
}
