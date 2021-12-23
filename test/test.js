const { getMetaLookup } = require("../src/utils")
const preset = require("../src")

test("getMetaLookup", () => {
  const lookup = getMetaLookup([
    ["test", (s) => s === "foo", (s) => s.toUpperCase() + "MEOW"],
  ])

  const [key, prefix, nameTransformer] = lookup("foo", 123)

  expect(key).toBe("test")
  expect(nameTransformer("foo")).toBe("FOOMEOW")
  expect(prefix("foo")).toBe(true)
})

describe("preset", () => {
  test("theme should have proper keys", () => {
    const keys = [
      "aspectRatio",
      "backgroundImage",
      "borderRadius",
      "borderWidth",
      "colors",
      "fontSize",
      "fontWeight",
      "letterSpacing",
      "lineHeight",
      "spacing",
      "zIndex",
      "fontFamily",
    ]
    const keyCheck = keys.every((key) => !!preset.theme[key])

    expect(keyCheck).toBe(true)
  })
})
