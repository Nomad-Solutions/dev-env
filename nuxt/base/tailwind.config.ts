import type { Config } from 'tailwindcss'

import baseConfig from '../../tailwind/base/tailwind.config'

export default ({
	presets: [ baseConfig ],
} as Partial<Config>) satisfies Partial<Config>
