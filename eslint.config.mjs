import tseslint from 'typescript-eslint';
import config from './eslint/typescript.config.mjs';

export default tseslint.config(
	config,
	{
		ignores: [ 'CHANGELOG.md', 'nuxt/' ]
	}
);