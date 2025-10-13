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
        'chat-pattern': "url('/src/assets/chat-pattern.png')",
      }
    },
  },
  
  
  plugins: [],


}
