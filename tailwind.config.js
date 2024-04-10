// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],

//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif', // Adds a new `font-display` class
      },
    },
  },
  plugins: [require("daisyui")], // This line might be correct depending on the version of Tailwind CSS you're using.
}
