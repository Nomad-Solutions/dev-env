import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import newlineDestructuring from 'eslint-plugin-newline-destructuring';
import newlineImport from 'eslint-plugin-import-newlines';

export default tseslint.config(
	eslint.configs.recommended,
	tseslint.configs.strict,
	tseslint.configs.stylistic,
	{
		files: [ '**/*.{js,mjs,cjs,ts}' ],
		ignores: [ 'node_modules/' ],
		languageOptions: {
			globals: globals.browser,
		},
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
			camelcase: [
				'warn',
				{
					allow: [],
				},
			],
			curly: [ 'error', 'multi-line' ],
			'block-spacing': 'error',

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
			'@stylistic/brace-style': [ 'error', '1tbs', { allowSingleLine: true } ],
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
			'@stylistic/keyword-spacing': [
				'error',
				{
					before: true,
					after: true 
				} 
			],
			'@stylistic/padding-line-between-statements': [
				'error',
				{
					blankLine: 'always',
					prev: '*',
					next: 'return' 
				},
				{
					blankLine: 'always',
					prev: [ 'const', 'let', 'var' ],
					next: '*' 
				},
				{
					blankLine: 'any',
					prev: [ 'const', 'let', 'var' ],
					next: [ 'const', 'let', 'var' ] 
				},
				{
					blankLine: 'always',
					prev: [ 'case', 'default' ],
					next: '*' 
				},
				{
					blankLine: 'always',
					prev: 'block-like',
					next: '*' 
				}
			],
			'@stylistic/newline-per-chained-call': [ 'error', { 'ignoreChainWithDepth': 2 } ],
			'@stylistic/space-before-function-paren': [
				'error',
				{
					'anonymous': 'never',
					'named': 'never',
					'asyncArrow': 'always'
				} 
			],
			'@stylistic/type-annotation-spacing': 'error',
			'@stylistic/key-spacing': [
				'error',
				{
					'beforeColon': false,
					'afterColon': true 
				} 
			],
			'@stylistic/space-unary-ops': [
				'error',
				{
					words: true,
					nonwords: false 
				} 
			],
			'@stylistic/space-infix-ops': 'error',

			'newline-destructuring/newline': [ 'error' ],
			'newline-import/enforce': [ 'error', 3 ],
		},
	}
); 

