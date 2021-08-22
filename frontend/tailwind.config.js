module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    colors: {
      // Configure your color palette here
      bluesky: {
        light: '#85d7ff',
        DEFAULT: 'rgba(36, 123, 160, 1)',
        dark: '#009eeb',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      }
    },
    extend: {},
  },
  plugins: [],
}