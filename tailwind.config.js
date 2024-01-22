/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        bounce: 'bounce 10s linear infinite',
        spin: "spin 15s linear infinite",
        spn: "spin 1s linear infinite",
      },

      colors: {
        primary: {
          900: '#006064',
          800: '#00838F',
          700: '#0097A7',
          600: '#00ACC1',
          500: '#00BCD4',
          400: '#26C6DA',
          300: '#4DD0E1',
          200: '#80DEEA',
          100: '#B2EBF2',
          50: '#E0F7FA',
        },
      },
    },
  },
  plugins: [require('preline/plugin'),],
}


