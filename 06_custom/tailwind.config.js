/** @type {import("tailwindcss").Config} */

import { teal as _teal } from 'tailwindcss/colors'

export const darkMode = "class"
export const content = ["./src/**/*.{html,js}"]
export const theme = {
  extend: {
    colors: {
      teal: {
        ..._teal,
        new: '#115555',
      },
      white: "#DDDDDD",
    },
  },
}
export const plugins = []
