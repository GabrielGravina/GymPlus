
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'malachite': '#04E762',
      'nice_green': "#2D8643",
      'lighter_green': "#00DB36",
      'selective_yellow': '#F5B700',
      'bleu_france': '#008BF8',
      'chartreuse': '#89FC00',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    },
    
  },
  plugins: [],
};