// tailwind.config.js
import {nextui} from "@nextui-org/react";


/** @type {import('tailwindcss').Config} */
const config = {
  mode: 'jit',
  content: [
    // ... add other file source locations
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./areas-of-practice/*.{js,ts,jsx,tsx}",
    './components/*.{js,ts,jsx,tsx}',
    "./src/app/page.tsx",
    "./src/app/layout.tsx"
  ],
  theme: {
    colors: {
      'midnight' : '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'burntUmber': '#330000',
      'licorice': '#210C06',
      'dark-green': '#041B03',
      'black-olive': '#1F2920',
      'zomp': '#059979',
      'harvest-gold': '#D28F25',
      'avocado': '#608A3D',
      'dark-green-2': '#002402',
      'cornell-red': '#B6231E',
      'dartmouth-green': '#206921',
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        layout: {},
        colors: {
          primary: {
            DEFAULT: "#041B03",
            foreground: "#000000",
          },
          secondary: {
            DEFAULT: '#B6231E',
            foreground: '#000000'
          }
        }
      },
    }
  }
  )]
}

export default config;



