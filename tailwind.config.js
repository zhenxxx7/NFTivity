module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#DECADB',
        'secondary': '#030812',
        'color1' : '#FDAE8F',
      },
    },
  },
  container: {
    center: true,
  },
  plugins: [],
}