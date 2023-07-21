/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        "14": "3.5rem",
        "132px": "132px",
        "89px": "89px",
      },
      colors: {
        "hoverspt": "#18d760",
        "purple-main": "#2D46B9",
        "green-main": "#1DD760",
      },
      backgroundImage: {
        "spotify-theme": "url('/src/img/bursts.svg')",
        "spotify-theme-mobile": "url('/src/img/bursts-mobile.svg')",
      },
      backgroundSize: {
        "175%": "175%",
        "195%": "195%",
      },
      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center',
      },
      fontSize: {
        '9xl': '9rem',
      }
    },
  },
  plugins: [],
}
