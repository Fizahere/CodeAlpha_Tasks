/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
       wave: {
         '0%, 100%': { transform: 'scale(0)' },
         '50%': { transform: 'scale(1)' },
       },
     },
     animation: {
       wave: 'wave 1s linear infinite',
     },
   }
  },
  plugins: [],
};
