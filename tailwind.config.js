/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#8B0000',
        'text-dark': '#1F2937',
        'text-medium': '#6B7280',
        'border-light': '#E5E7EB',
      },
      fontFamily: {
        'inter': ['"Inter"', 'sans-serif'],
        'condensed': ['"Roboto Condensed"', 'sans-serif'],
        'sans': ['"Open Sans"', 'sans-serif'],
      },
      maxWidth: {
        'container': '1140px',
      },
    },
  },
  plugins: [],
}
