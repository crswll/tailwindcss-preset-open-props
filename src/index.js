const openProps = require("open-props")
const color = require('color')
const { getTailwindTheme, mapObjectValues, filterObject } = require("./utils")

function addCustomProps({ addBase }) {
  addBase({ ":root": mapObjectValues(openProps, String) })
}

function boxShadows ({ addUtilities }) {
  const shadows = filterObject(openProps, (key) => /--(inner-)?shadow-\d+/.test(key))
  const colors = filterObject(openProps, (_key, value) => /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(value))

  Object.entries(colors).forEach(function([key, value]) {
    const [ h, s, l ] = color(value).hsl().array().map(Math.round)

    addUtilities({
      [`.shadow-${key.slice(2)}`]: { '--shadow-color': `${h} ${s}% ${l}%` }
    })
  })

  Object.entries(shadows).forEach(function ([key, value]) {
    const [ _match, inner, n ] = key.match(/--(inner-)?shadow-(\d+)/)

    addUtilities({
      [`.${inner ? 'shadow-inner' : 'shadow'}-${n}`]: { boxShadow: value }
    })
  })
}

module.exports = {
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
  plugins: [ addCustomProps, boxShadows ],
}
