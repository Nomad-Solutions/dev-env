
import parserTs from '@typescript-eslint/parser';
import vueParser from 'vue-eslint-parser';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginTs from '@typescript-eslint/eslint-plugin';
import tailwind from 'eslint-plugin-tailwindcss';
import eslintPluginVueScopedCSS from 'eslint-plugin-vue-scoped-css';
import {
	baseConfig,
	typescriptConfig,
	jsonConfigs,
	typescriptTypedConfig,
	stylisticConfig
} from './shared.mjs';

// TODO: replace parser for nuxt/formatter to use the one from eslint-plugin-format, so formatting json can be added as a config without getting the error of different plugins being used: https://github.com/nuxt/eslint/blob/main/packages/eslint-config/src/flat/configs/formatters.ts

/**
 * 
 * @param {FlatConfigComposer<Linter.Config>} withNuxt - the `withNuxt` composer that is automatically imported from './.nuxt/eslint.config.mjs'
 * @param {string} tsProjectRoot - import.meta.dirname called from the consuming project
 * @returns {FlatConfigComposer<Linter.Config>}
 */
export default function createConfig(withNuxt, tsProjectRoot) {
	// First arg is added as last rules to make overwrites easier
	return withNuxt([
		...tailwind.configs['flat/recommended'],
		
		...eslintPluginVueScopedCSS.configs['flat/recommended'],

		...jsonConfigs,
	
		// You can choose between markdown linting, markdown code block linting or markdown formatting with prettier
		// markdownConfig,
		// ...markdown.configs.processor,
		
		{
			name: 'nomad/nuxt',
			files: [
				'**/*.js',
				'**/*.mjs',
				'**/*.cjs',
				'**/*.ts',
				'**/*.mts',
				'**/*.cts',
				'**/*.vue',
			],
			plugins: {
				...baseConfig.plugins,
			},
			rules: {
				...eslint.configs.recommended.rules,

				//* ADD CUSTOM NON-TYPED RULES HERE

				...baseConfig.rules,
				...typescriptConfig.rules,

				'semi': 'off', // stylistic handles this
				'vue/multi-word-component-names': 'off',
				'tailwindcss/no-custom-classname': 'off',
			},
		},
		{
			// Typed rules need this whole languageOptions + files snippet, so we must add typed rules in this block
			name: 'nomad/typed',
			files: [
				'**/*.ts',
				'**/*.mts',
				'**/*.cts',
				'**/*.vue',
			],
			languageOptions: {
				parser: vueParser,
				parserOptions: {
					parser: parserTs,
					sourceType: 'module',
					extraFileExtensions: [ '.vue' ],
					projectService: true,
					tsconfigRootDir: tsProjectRoot,
				},
			},
			rules: {
				...tseslint.config(tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked)
					.map(c => c.rules)
					.reduce((a, b) => ({
						...a,
						...b,
					}), {}),

				//* ADD CUSTOM TYPED RULES HERE

				...typescriptTypedConfig.rules,
			},
		}
	])
		.replace('nuxt/typescript/setup', {
			// Replace because original config does nothing more than set a plugin as well
			name: 'nuxt/typescript/setup',
			plugins: { '@typescript-eslint': pluginTs },
		})
		.override('nuxt/javascript', {
			files: [
				'**/*.js',
				'**/*.mjs',
				'**/*.cjs',
				'**/*.ts',
				'**/*.mts',
				'**/*.cts',
				'**/*.vue',
			],
		})
		.override('nuxt/stylistic', {
			files: [
				'**/*.js',
				'**/*.mjs',
				'**/*.cjs',
				'**/*.ts',
				'**/*.mts',
				'**/*.cts',
				'**/*.vue',
			],
			
			rules: stylisticConfig.rules
		})
		.override('vue-scoped-css/flat/vue3-recommended', {
			files: [
				'*.vue',
				'**/*.vue',
			],
		});
}