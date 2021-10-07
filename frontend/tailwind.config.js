module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      0.5: "0.5px",
    },
    extend: {
      inset: {
        '5%': '5%',
      },
      height: {
        "90%":"90%",
      },
      width: {
        "3%": "3%",
        "80%":"80%",
        "90%": "90%",
        "95%": "95%",
        "98%": "98%,",
      },
    },
    screens: {
      md: "925px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
