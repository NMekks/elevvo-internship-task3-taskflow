 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/*"],
   theme: {
     extend: {},
   },
   plugins: [],
   corePlugins: {
    preflight: false,   // <--- disables Tailwind’s base styles
  },
 }