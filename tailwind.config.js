/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dog-coat': {
          400: '#dcb67a', // light golden brown
          600: '#b4824a', // dark golden brown
        },
        'dog-tongue': {
          300: '#efc0d6', // light pink
          500: '#d67a9f', // saturated pink
        },
        'cool-tone': {
          500: '#4b5563', // cool background tone
        },
        'ultra-violet': {
          300: '#7B6A95',
          500: '#5E447D'
        },
        'raw-umber': {
          300: '#A67C5B',
          500: '#856653'
        },
        'china-rose': {
          500: '#AB606C',
          300: '#C17E8D'
        },
        'bistre': {
          500: '#3B2317',
          300: '#5A3A2B'
        },
        'beaver': {
          500: '#B6957F',
          300: '#D1B5A2'
        },
        // Add more custom colors or extend existing Tailwind colors here
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'cursive'], // Ensure you have a fallback font
      },
      // Add more theme extensions here
    },
  },
  variants: {
    extend: {
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'cursive'] // Ensure you have a fallback font
      },
      backgroundColor: ['active'],
      // Add more variants here
    },
  },
  plugins: [],
};
//from-ultra-violet-500 to-dog-tongue-500
