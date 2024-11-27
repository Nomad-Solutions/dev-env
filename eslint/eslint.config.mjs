import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import newlineDestructuring from 'eslint-plugin-newline-destructuring';
import newlineImport from 'eslint-plugin-import-newlines';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: [ '**/*.{js,mjs,cjs,ts}' ],
		ignores: [ 'node_modules/' ],
		languageOptions: { globals: globals.browser },
	},

	pluginJs.configs.recommended,

	...tseslint.configs.recommended,

	{
		plugins: {
			'@stylistic': stylistic,
			'newline-destructuring': newlineDestructuring,
			'newline-import': newlineImport
		},
		rules: {
			'no-multiple-empty-lines': [ 'error', { max: 1 } ],
			'semi': [ 'error', 'always' ],
			quotes: [ 'error', 'single' ],
			'no-console': [ 'warn', { allow: [ 'warn', 'error', 'info' ] } ],
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-unused-vars': 'error',
			'no-use-before-define': 'off',
			'@typescript-eslint/no-use-before-define': [
				'error',
				{
					typedefs: false,
					enums: false,
					functions: false,
					classes: false,
				},
			],
			'@stylistic/indent': [ 'error', 'tab' ],
			'@stylistic/no-tabs': 'off',
			'@stylistic/no-mixed-spaces-and-tabs': 'off',
			'@stylistic/no-multi-spaces': 'error',
			'@stylistic/array-bracket-spacing': [ 'error', 'always' ],
			'@stylistic/array-bracket-newline': [
				'error',
				{
					multiline: true,
					minItems: 4 
				}
			],
			'@stylistic/array-element-newline': [
				'error',
				{
					minItems: 4,
					consistent: true,
					multiline: true 
				},
			],
			'@stylistic/object-curly-spacing': [ 'error', 'always' ],
			'@stylistic/object-curly-newline': [
				'error',
				{
					multiline: true,
					minProperties: 4,
					consistent: true 
				} 
			],
			'@stylistic/object-property-newline': [ 'error' ],
			'newline-destructuring/newline': [ 'error' ],
			'newline-import/enforce': [ 'error', 3 ],
			camelcase: [
				'warn',
				{
					allow: [],
				},
			],
		},
	},
];

