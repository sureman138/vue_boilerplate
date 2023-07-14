/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'theme-blue': '#00b4ff',
        'header-black': '#222222',
        'table-row': '#E8F0FE',
        'gpa-more-than-10-above':'#d7737d',
        'gpa-less-than-10-above':'#c194b5',
        'gpa-equal': '#b4a7d6',
        'gpa-less-than-10-below': '#a6a8da',
        'gpa-more-than-10-below': '#75ace5',
      }
    },
  },
  plugins: [],
}

