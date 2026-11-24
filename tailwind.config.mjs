/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        kuraco: {
          black: '#0A0A0A',
          white: '#FFFFFF',
          offwhite: '#F5F3EF',
          border: '#E2DFD9',
          muted: '#6E6B65',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
