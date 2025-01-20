/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./sections/*.{html,js,liquid}", 
      "./snippets/*.{html,js,liquid}",
      "./js/**/*.{js,svelte,jsx}",  ],
    theme: {
      extend: {},
    },
    plugins: [],
    prefix: 'tw-' 
  }
