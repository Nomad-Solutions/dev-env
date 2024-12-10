import tseslint from 'typescript-eslint';
import config from './eslint/eslint.config.mjs';

export default tseslint.config(
	config
);