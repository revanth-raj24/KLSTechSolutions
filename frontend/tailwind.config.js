/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          kls: {
            primary: '#009FE3',   // The cyan/blue from the logo
            dark: '#1B263B',      // The dark navy background
            darker: '#0D1B2A',    // Deep footer background
            light: '#F8F9FA',     // Off-white for sections
            accent: '#7AC943',    // Muted grey-blue for text
          }
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Professional, clean font
        }
      },
    },
    plugins: [],
  }