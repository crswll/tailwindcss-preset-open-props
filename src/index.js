const openProps = require("open-props")
const { getTailwindTheme, mapObjectValues } = require("./utils")

function addCustomProps({ addBase }) {
  addBase({ ":root": mapObjectValues(openProps, String) })
}

function opBoxShadow({ addUtilities, theme }) {
  const shadows = theme("opBoxShadow")

  Object.entries(shadows).forEach(function ([key, value]) {
    addUtilities({ [`.shadow-${key}`]: { boxShadow: value } })
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
  plugins: [addCustomProps, opBoxShadow],
}
