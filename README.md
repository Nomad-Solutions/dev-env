# Nomad Solutions Development Environment
This repo contains shared development environment configurations for projects.

## Install
Add this repository as a development dependency in your `package.json`:

```json
// package.json
{
	"devDependencies": {
		"@nomad-solutions/dev-env": "github:Nomad-Solutions/dev-env#v1.0.0", // specific tag (recommended)
		"@nomad-solutions/dev-env": "github:Nomad-Solutions/dev-env" // latest commit
	}
}
```

You can now import and extend (etc) the configurations with `@nomad-solutions/dev-env/{package}`.

## Usage

### husky
After installation, you will need to add an npm script to your `package.json`:
```json
// package.json
{
	"scripts": {
		"prepare": "husky"
	}
}
```

Husky is used by other packages to inject effects into git hooks.

### commitlint
After installation, you can extend this commitlint config by adding the following to your own commitlint config:

```javascript
// commitlint.config.mjs
export default { 
	extends: [ '@nomad-solutions/dev-env/commitlint' ],
};
```

Then you must create the file `.husky/commit-msg`:
```bash
# .husky/commit-msg
bunx --no -- commitlint --edit $1
```

### eslint
After installation, you can extend this eslint config by adding the following to your own eslint config:

```javascript
// eslint.config.mjs
import tseslint from 'typescript-eslint';
import config from '@nomad-solutions/dev-env/eslint';

export default tseslint.config(
	config,
);

```

### lint-staged
After installation, you can extend this lint-staged config by adding the following to your own lint-staged config:

```javascript
// lint-staged.config.mjs
import config from '@nomad-solutions/dev-env/lint-staged';

export default {
	...config
};
```

Then you must create the file `.husky/pre-commit`:
```bash
# .husky/pre-commit
lint-staged
```

### tsconfig
After installation, you can extend this tsconfig by adding the following to your own tsconfig:

```json
{
	"extends": "@nomad-solutions/dev-env/tsconfig/tsconfig",
}
```

> For some reason, exporting `"./tsconfig": "./tsconfig/tsconfig.json"` does not really work, so instead you will have to use the full path shown above.

## Development

### Adding a configuration

#### 1. Create a directory with the exported configs in this repository
E.g. `./eslint/eslint.config.mjs`.

#### 2. Add the package's export name in this repo's `package.json`
> The package's export name is the one used when importing the package in the string `@nomad-solutions/dev-env/{package}`.

```json
// package.json
{
	"exports": {
		"./eslint": "./eslint/eslint.config.mjs"
	}
}
```

#### 3. Commit your changes with a fitting message
Format your message with Conventional Commits to make versioning automatic. E.g. `feat(eslint): add eslint config`.

#### 4. Create version tag and changelog
When you have committed all your changes, run the following to create a tagged commit with a changelog and push the tag to GitHub:

```bash
# Create version tag and changelog
bun version

# Push changes
git push

# Push newly created tag
git push origin v{SEMVER} # insert newest version number, e.g. 1.0.0
```