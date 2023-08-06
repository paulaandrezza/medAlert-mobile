/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', "./app/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        title: "Roboto_500Medium",
        body: "Roboto_400Regular",
      },
    },
  },
  plugins: [],
};
