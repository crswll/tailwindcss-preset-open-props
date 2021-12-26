module.exports = [
  [
    "fontSize",
    (tokenName) => tokenName.startsWith("--font-size-"),
    (tokenName) => tokenName.replace("--font-size-", ""),
  ],
  [
    "lineHeight",
    (tokenName) => tokenName.startsWith("--font-lineheight-"),
    (tokenName) => tokenName.replace("--font-lineheight-", ""),
  ],
  [
    "fontWeight",
    (tokenName) => tokenName.startsWith("--font-weight-"),
    (tokenName) => tokenName.replace("--font-weight-", ""),
  ],
  [
    "letterSpacing",
    (tokenName) => tokenName.startsWith("--font-letterspacing-"),
    (tokenName) => tokenName.replace("--font-letterspacing-", ""),
  ],
  [
    "borderWidth",
    (tokenName) => tokenName.startsWith("--border-size-"),
    (tokenName) => tokenName.replace("--border-size-", ""),
  ],
  [
    "backgroundImage",
    (tokenName) => tokenName.startsWith("--gradient-"),
    (tokenName) => tokenName.replace("--gradient-", "gradient-"),
  ],
  [
    "zIndex",
    (tokenName) => tokenName.startsWith("--layer-"),
    (tokenName) => tokenName.replace("--layer-", ""),
  ],
  [
    "borderRadius",
    (tokenName) => tokenName.startsWith("--radius-"),
    (tokenName) => tokenName.replace("--radius-", ""),
  ],
  [
    "aspectRatio",
    (tokenName) => tokenName.startsWith("--ratio-"),
    (tokenName) => tokenName.replace("--ratio-", ""),
  ],
  [
    "spacing",
    (tokenName) => tokenName.startsWith("--size-"),
    (tokenName) => tokenName.replace("--size-", ""),
  ],
  [
    "fontFamily",
    (tokenName) => tokenName.startsWith("--font-"),
    (tokenName) => tokenName.replace("--font-", ""),
  ],
  [
    "colors",
    (tokenName, tokenValue) => /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(tokenValue),
    (tokenName) => tokenName.slice(2),
  ],
]
