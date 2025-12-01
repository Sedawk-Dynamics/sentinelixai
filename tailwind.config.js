/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eaf0',
          100: '#ccd5e1',
          200: '#99abd2',
          300: '#6681c3',
          400: '#3356b4',
          500: '#002ca5',
          600: '#002384',
          700: '#001a63',
          800: '#001242',
          900: '#000921',
        },
        secondary: {
          50: '#eaf9fa',
          100: '#d5f3f5',
          200: '#ace7eb',
          300: '#82dbe1',
          400: '#59cfd7',
          500: '#39a2ae',
          600: '#2d828b',
          700: '#216168',
          800: '#164146',
          900: '#0b2023',
        },
        accent: {
          50: '#fef4ed',
          100: '#fde9db',
          200: '#fbd3b7',
          300: '#f9bd93',
          400: '#f7a76f',
          500: '#e57c23',
          600: '#b7631c',
          700: '#894a15',
          800: '#5c310e',
          900: '#2e1907',
        },
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        background: '#f8fafc',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};