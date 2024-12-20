import createConfig from '../../eslint/nuxt.mjs'
import withNuxt from './.playground/.nuxt/eslint.config.mjs'

export default createConfig(withNuxt, import.meta.dirname)
