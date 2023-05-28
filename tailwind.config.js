/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#a8f259",
        
"secondary": "#e9b7f4",
        
"accent": "#6cc4cc",
        
"neutral": "#1B1C23",
        
"base-100": "#E7EBEF",
        
"info": "#71BDD0",
        
"success": "#1EBEAE",
        
"warning": "#EC9E18",
        
"error": "#F74065",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

