const esbuild = require('esbuild')

let makeAllPackagesExternalPlugin = {
  name: 'make-all-packages-external',
  setup(build) {
    let filter = /^color|open-props$/
    build.onResolve({ filter }, args => ({
      path: args.path,
      external: true,
    }))
  }
}

const makeConfig = ({ format }) => ({
  entryPoints: ['src/index.js'],
  outfile: `dist/index.${format}.js`,
  format: format,
  bundle: true,
  platform: 'node',
  plugins: [makeAllPackagesExternalPlugin],
})

esbuild.build(makeConfig({ format: 'cjs' }))
esbuild.build(makeConfig({ format: 'esm' }))
