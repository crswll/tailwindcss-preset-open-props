const esbuild = require('esbuild')

const makeConfig = ({ format }) => ({
  entryPoints: ['src/index.js'],
  outfile: `dist/index.${format}.js`,
  format: format,
  bundle: false,
  platform: 'node',
})

esbuild.buildSync(makeConfig({ format: 'cjs' }))
esbuild.buildSync(makeConfig({ format: 'esm' }))
