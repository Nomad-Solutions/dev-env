/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import newlineDestructuring from 'eslint-plugin-newline-destructuring';
import newlineImport from 'eslint-plugin-import-newlines';
import json from '@eslint/json';
import markdown from '@eslint/markdown';

export default tseslint.config(
	{	
		name: 'dev-env',
		extends: [
			eslint.configs.recommended,
			tseslint.configs.strictTypeChecked,
			tseslint.configs.stylisticTypeChecked,
		],
		files: [ '**/*.{js,mjs,cjs,ts}' ],
		ignores: [ 'node_modules/' ],
		languageOptions: {
			globals: globals.browser,
			parserOptions: {
				project: true,				
				tsconfigRootDir: '../',
			},
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
			camelcase: [ 'warn', ], // override this with [ 'warn', { allow: [] } ] to add exceptions
			curly: [ 'error', 'multi-line' ],
			'block-spacing': 'error',
			'no-template-curly-in-string': 'warn',
			'no-useless-assignment': 'error',
			'arrow-body-style': [ 'error', 'as-needed' ],
			'default-param-last': [ 'error' ],
			'func-style': [ 'error', 'declaration' ],
			'new-cap': 'error',
			'no-else-return': 'error',
			'eqeqeq': 'error',
			'no-implicit-coercion': 'error',
			'no-throw-literal': 'error',
			'no-var': 'error',
			'prefer-const': 'error',
			'prefer-destructuring': 'error',
			'object-shorthand': 'error',

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
			'no-return-await': 'off',
			'@typescript-eslint/return-await': 'error',
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/no-import-type-side-effects': 'error',
			'@typescript-eslint/no-unsafe-type-assertion': 'warn',

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
				},
				{
					blankLine: 'always',
					prev: 'import',
					next: '*' 
				},
				{
					blankLine: 'any',
					prev: 'import',
					next: 'import' 
				},
			],
			'@stylistic/newline-per-chained-call': [ 'error', { 'ignoreChainWithDepth': 1 } ],
			'@stylistic/space-before-blocks': 'error',
			'@stylistic/function-call-spacing': 'error',
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
			'@stylistic/no-extra-semi': 'error',
			'@stylistic/nonblock-statement-body-position': 'error',

			'newline-destructuring/newline': [ 'error' ],
			'newline-import/enforce': [ 'error', 3 ],
		},
	},

	{
		files: [ '**/*.js' ],
		extends: [ tseslint.configs.disableTypeChecked ],
	},
	
	{
		language: 'json/json',
		files: [ '**/*.json' ],
		ignores: [ 'package-lock.json' ],
		plugins: {
			json,
		},
		...json.configs.recommended,
	},
	{
		language: 'json/jsonc',
		files: [ '**/*.jsonc' ],
		plugins: {
			json,
		},
		...json.configs.recommended,
	},
	{
		language: 'json/json5',
		files: [ '**/*.json5' ],
		plugins: {
			json,
		},
		...json.configs.recommended,
	},

	{
		language: 'markdown/commonmark',
		files: [ '**/*.md' ],
		plugins: {
			markdown
		},
		...markdown.configs.recommended
	}   
);