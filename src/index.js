import openProps from "open-props"
import color  from "color"
import { getTailwindTheme, mapObjectValues, filterObject } from "./utils"

function addCustomProps({ addBase }) {
  addBase({ ":root": mapObjectValues(openProps, String) })
}

function boxShadows({ addUtilities }) {
  const shadows = filterObject(openProps, (key) =>
    /--(inner-)?shadow-\d+/.test(key)
  )
  const colors = filterObject(openProps, (_key, value) =>
    /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(value)
  )
  const strengths = [
    0, 1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75,
    80, 85, 90, 95, 100,
  ]

  strengths.forEach((n) => {
    addUtilities({
      [`.shadow-strength-${n}`]: { "--shadow-strength": `${n}%` },
    })
  })

  Object.entries(colors).forEach(function ([key, value]) {
    const [h, s, l] = color(value).hsl().array().map(Math.round)

    addUtilities({
      [`.shadow-${key.slice(2)}`]: { "--shadow-color": `${h} ${s}% ${l}%` },
    })
  })

  Object.entries(shadows).forEach(function ([key, value]) {
    const [_match, inner, n] = key.match(/--(inner-)?shadow-(\d+)/)

    addUtilities({
      [`.${inner ? "shadow-inner" : "shadow"}-${n}`]: { boxShadow: value },
    })
  })
}

export default {
  theme: {
    ...getTailwindTheme(openProps),
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
      },
    },
  },
  corePlugins: {
    // This prevents Tailwind from using the compositional API
    boxShadow: false,

    // This would provide a bunch of classes that don't do anything...
    boxShadowColor: false,
  },
  plugins: [addCustomProps, boxShadows],
}
