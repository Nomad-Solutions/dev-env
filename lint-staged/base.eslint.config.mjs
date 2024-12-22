export default {
	// unstable_config_lookup_from_file ensures eslint will automatically check nearest parent eslint config based on the file being linted
	'*.{ts,js,mjs,cjs,json,jsonc,json5,md,vue,html,svg,css,postcss,pcss}': [ 'eslint --flag unstable_config_lookup_from_file' ]
};