 
import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import {
	baseConfig,
	typescriptConfig,
	typescriptTypedConfig,
	stylisticConfig,
	jsonConfigs,
	markdownConfig
} from './shared.mjs';

export default tseslint.config(
	{	
		name: 'nomad/typescript',
		extends: [
			eslint.configs.recommended,
			tseslint.configs.strictTypeChecked,
			tseslint.configs.stylisticTypeChecked,
		],
		files: [ '**/*.{js,mjs,cjs,jsx,ts,tsx}' ],
		ignores: [ '**/node_modules/' ],
		languageOptions: {
			globals: globals.browser,
			parserOptions: {
				project: true,				
				tsConfigRootDir: import.meta.dirname
			},
		},
		plugins: {
			...baseConfig.plugins,
			...stylisticConfig.plugins
		},
		rules: {
			...baseConfig.rules,
			...stylisticConfig.rules,
			...typescriptConfig.rules,
			...typescriptTypedConfig.rules
		},
	},

	{
		name: 'nomad/disable-type-checked',
		files: [ '**/*.{js,mjs,cjs,jsx}' ],
		extends: [ tseslint.configs.disableTypeChecked ],
	},

	...jsonConfigs,

	markdownConfig
);