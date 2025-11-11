/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0D1117',
        primary: '#3B82F6',
        card: '#161B22',
        'card-border': '#30363D',
        'text-primary': '#F0F6FC',
        'text-secondary': '#C9D1D9',
        'text-tertiary': '#8B949E',
      },
    },
  },
  plugins: [],
};
