// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./client/public/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      backgroundImage: {
        // <<-- ALTERAÇÃO AQUI -->>
        'imagemchat': "url('/src/assets/imagemchat.png')",
      }
    },
  },
  plugins: [],
}