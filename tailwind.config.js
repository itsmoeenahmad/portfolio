/**
 * Tailwind CSS Configuration
 * 
 * This file contains the design system configuration for the portfolio.
 * All color tokens, typography, and spacing values are centralized here
 * for consistency and maintainability.
 * 
 * @see https://tailwindcss.com/docs/configuration
 */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      /**
       * Custom font family configuration
       * Primary font: Poppins (sans-serif)
       * Provides clean, modern typography suitable for professional portfolios
       */
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      
      /**
       * Extended neutral color palette
       * Uses a comprehensive neutral scale for consistent grayscale values
       * These values maintain WCAG AA accessibility standards
       */
      colors: {
        neutral: {
          50: '#fafafa',   // Lightest - backgrounds, subtle highlights
          100: '#f5f5f5',  // Very light gray - section backgrounds
          200: '#e5e5e5',  // Light gray - borders, dividers
          300: '#d4d4d4',  // Medium-light - hover states, secondary borders
          400: '#a3a3a3',  // Medium - disabled text, icons
          500: '#737373',  // Mid-tone - secondary text
          600: '#525252',  // Medium-dark - body text
          700: '#404040',  // Dark - headings
          800: '#262626',  // Very dark - primary text, backgrounds
          900: '#171717',  // Near black - CTAs, emphasis
          950: '#0a0a0a',  // Deepest - maximum contrast
        }
      },
      
      /**
       * Animation configuration
       * Maintains smooth, professional transitions throughout
       */
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      /**
       * Custom aspect ratios for consistent image containers
       */
      aspectRatio: {
        'hero': '4/3',
      },
    }
  },
  plugins: [],
}
