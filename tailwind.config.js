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
      'placeholder':'hsl(0, 1%, 54%)',
      'black':'hsl(0, 0%, 8%)',
      'white': '#FFFFFF',
      'line': 'hsl(0, 0%, 86%)',
      'error':'hsl(0, 100%, 67%)',
    
    },
    fontFamily: {
    'sans': ['Arial', 'sans-serif', 'Helvetica'],
    },
    screens: {
      sm: {'max': '500px'},
      'lg':{'min':'900px', 'max':'1540px'},
      'xl': {'raw': '(min-height: 500px)'},
      'xxl': {'raw': '(min-height: 850px)'},
    },
  },
  extend:{
    fontSize: {
      'clamp': 'clamp(3rem, 6.4000vw + 1.4000rem, 7rem)',
    }
  }
  }
