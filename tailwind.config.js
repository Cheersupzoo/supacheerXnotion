/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[class="dark-mode"]'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('@headlessui/tailwindcss')]
}
