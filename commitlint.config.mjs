export default { 
	extends: [ './commitlint/commitlint.config.mjs' ],
	rules: {
		'scope-enum': [
			2,
			'always',
			[
				'commitlint',
				'eslint',
				'stylelint',
				'lint-staged',
				'tsconfig',
				'versioning',
				'tailwind',
				'nuxt'
			] 
		]
	}
};
