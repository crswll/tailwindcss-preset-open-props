const tokenToMetaLookup = require("./token-to-meta-lookup")

const filterObject = (collection, callback) =>
  Object.entries(collection).reduce((acc, [key, value]) => {
    return callback(key, value) ? { ...acc, [key]: value } : acc
  }, {})

const mapObjectValues = (collection, callback) =>
  Object.entries(collection).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: callback(value) }),
    {}
  )

const getMetaLookup = (metaLookup) => (tokenName, tokenValue) =>
  metaLookup.find(([, tester]) => tester(tokenName, tokenValue))

function getTailwindTheme(openProps) {
  const metaLookup = getMetaLookup(tokenToMetaLookup)

  return Object.entries(openProps).reduce(function (
    twTheme,
    [openPropsTokenName, openPropsTokenValue]
  ) {
    const helpers = metaLookup(openPropsTokenName, openPropsTokenValue)

    if (!helpers) {
      return twTheme
    }

    const [twKey, _prefixLookup, tokenNameTransform] = helpers

    if (!twTheme[twKey]) {
      twTheme[twKey] = {}
    }

    const tokenName = tokenNameTransform(openPropsTokenName)

    twTheme[twKey][tokenName] = `var(${openPropsTokenName})`

    return twTheme
  },
  {})
}

module.exports.getTailwindTheme = getTailwindTheme
module.exports.getMetaLookup = getMetaLookup
module.exports.mapObjectValues = mapObjectValues
module.exports.filterObject = filterObject
