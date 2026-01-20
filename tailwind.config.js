/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#FFE4D6',
          100: '#FFD7C4',
          200: '#FFC2A3',
          300: '#FFAD82',
          400: '#FF9861',
          500: '#A52A2A',
          600: '#8B2323',
          700: '#722222',
          800: '#5A1B1B',
          900: '#421414',
        },
        deepred: {
          50: '#FFDAB9',
          100: '#FFCCA3',
          200: '#FFB88C',
          300: '#FFA476',
          400: '#FF9060',
          500: '#8B2323',
          600: '#722222',
          700: '#5A1B1B',
          800: '#421414',
          900: '#2A0D0D',
        },
        gold: {
          500: '#FFD700',
          600: '#FFA500',
          700: '#FF8C00',
        }
      },
      fontFamily: {
        'hindi': ['Noto Sans Devanagari', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
