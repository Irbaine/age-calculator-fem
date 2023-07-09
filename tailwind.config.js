/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'primary': 'hsl(259, 100%, 65%)', //purple
      'secondary': '#F0F0F0',
      'text':'#686868',
      'placeholder':'hsl(0, 1%, 44%)',
      'black':'hsl(0, 0%, 8%)',
      'white': '#FFFFFF',
      'line': 'hsl(0, 0%, 86%)',
      'error':'hsl(0, 100%, 67%)',
    }
    },
    borderRadius: {
      '2xl': '20px',
    },
    fontFamily: {
    'sans': ['Arial', 'sans-serif', 'Helvetica'],
  }
  }
