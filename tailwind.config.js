module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': '1350px', // For grid-cols-2 if you’re still using it
        'wide': '1350px',  // For wider cards at 1350px
      },
      fontFamily: {
        sans: ['Lora', 'serif'],
      },
    },
  },
};
