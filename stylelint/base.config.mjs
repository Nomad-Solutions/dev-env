/** @type {import('stylelint').Config} */
export default {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-idiomatic-order',
		'stylelint-config-recommended-vue',
	],
	rules: {
		'import-notation': 'string',
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'tailwind',
					'screen',
				]
			} 
		],
		'function-no-unknown': [
			true,
			{
				ignoreFunctions: [
					'theme',
					'v-bind',
				]
			} 
		],
		'value-keyword-case': [
			'lower',
			{
				ignoreFunctions: [ 'v-bind' ] // js vars in v-bind in css should not be lowercase
			} 
		],
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: [ 'deep' ]
			} 
		],
	},
};
