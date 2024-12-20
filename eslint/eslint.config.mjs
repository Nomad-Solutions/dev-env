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
		name: 'dev-env-js-ts',
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
				tsConfigRootDir: import.meta.dirname
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
			'no-else-return': 'error',
			'eqeqeq': 'error',
			'no-implicit-coercion': 'error',
			'no-throw-literal': 'error',
			'no-var': 'error',
			'prefer-const': 'error',
			'prefer-destructuring': [
				'warn',
				{
					'array': false,
					'object': true
				} 
			],
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
			'@typescript-eslint/prefer-nullish-coalescing': 'off',
			'@typescript-eslint/no-unnecessary-condition': [
				'error',
				{
					allowConstantLoopConditions: true
				} 
			],
			'@typescript-eslint/no-misused-promises': [
				'error',
				{
					checksVoidReturn: false
				} 
			],
			'@typescript-eslint/restrict-template-expressions': [
				'error',
				{
					allowBoolean: true,
					allowNullish: true,
					allowNumber: true
				} 
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
		name: 'dev-env-disable-type-checked',
		files: [ '**/*.js' ],
		extends: [ tseslint.configs.disableTypeChecked ],
	},
	
	{
		name: 'dev-env-json',
		language: 'json/json',
		files: [ '**/*.json' ],
		ignores: [ 'package-lock.json' ],
		plugins: {
			json,
		},
		...json.configs.recommended,
	},
	{
		name: 'dev-env-jsonc',
		language: 'json/jsonc',
		files: [ '**/*.jsonc' ],
		plugins: {
			json,
		},
		...json.configs.recommended,
	},
	{
		name: 'dev-env-json5',
		language: 'json/json5',
		files: [ '**/*.json5' ],
		plugins: {
			json,
		},
		...json.configs.recommended,
	},

	/*
	This will lint the actual markdown, but it cannot lint the code blocks within markdown at the same time.
	This is a limitation of eslint itself.
	*/
	{
		name: 'dev-env-markdown',
		files: [ '**/*.md' ],
		plugins: {
			markdown
		},
		language: 'markdown/gfm',
		rules: {
			'markdown/no-html': 'error',
			'markdown/fenced-code-language': 'error',
			'markdown/heading-increment': 'error',
			'markdown/no-duplicate-headings': 'error',
			'markdown/no-empty-links': 'error',
			'markdown/no-html': 'off',
			'markdown/no-invalid-label-refs': 'error',
			'markdown/no-missing-label-refs': 'error'
		}
	},
	// ...markdown.configs.processor // this lints code blocks within markdown
);