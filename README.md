# tailwindcss-preset-open-props

A [Tailwind CSS](https://tailwindcss.com/) preset that utilitizes [Open Props](https://open-props.style/).

## Installation

```bash
npm install --save-dev tailwindcss-preset-open-props
```
Then, in `tailwind.config.js`, add
```js
const openPropsPreset = require('tailwindcss-preset-open-props')

module.exports = {
  content: [
    // ...
  ],
  presets: [
    openPropsPreset,
  ],
}
```

## Usage

If you know Tailwind conventions it should click pretty easily. If you have [TailwindCSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) installed it'll help a lot.
