export default function(configPath = './stylelint.config.mjs') {
	return {
		// Calls stylelint using the config file specified in the root + filename variable. Defaults to using the 'stylelint.config.mjs' file in same dir as the lint-staged config.
		'*.{css,postcss,pcss,vue}': [ `stylelint --config ${configPath}` ],
	};
}