/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      screens: {
        'sm-custom': '360px',
        'md-custom': '430px',
        'lg-custom': '530px'
      }
    },
  },
  plugins: [],
}

