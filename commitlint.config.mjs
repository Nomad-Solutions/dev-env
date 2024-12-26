export default { 
	extends: [ './commitlint/commitlint.config.mjs' ],
	rules: {
		'scope-enum': [
			2,
			'always',
			[
				'commitlint',
				'eslint',
				'lint-staged',
				'tsconfig',
				'versioning'
			] 
		]
	}
};
