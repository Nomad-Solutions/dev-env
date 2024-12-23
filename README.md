# Nomad Solutions Development Environment
This repo contains shared development environment configurations for projects.

## Install
Add this repository as a development dependency in your `package.json`:

<!-- eslint-disable-next-line markdown/no-missing-label-refs -- not a ref -->
> [!TIP]
> Jump to the [`package.json` section](#packagejson) for a full `package.json` you can copy + paste.

**Specific tag (recommended)**
```json5
// package.json

{
	"devDependencies": {
		"@nomad-solutions/dev-env": "github:Nomad-Solutions/dev-env#v{version}"
	}
}
```

**Latest commit**
```json5
// package.json

{
	"devDependencies": {
		"@nomad-solutions/dev-env": "github:Nomad-Solutions/dev-env"
	}
}
```

You can now import and extend (etc) the configurations with `@nomad-solutions/dev-env/{package}`.

### VSCode
Add the following content to your `.vscode/extensions.json` and install the extensions:

```json5
// extensions.json

{
	"recommendations": [
		// Necessary for this dev-env package to work correctly
		"kalimahapps.tabaqa",
		"dbaeumer.vscode-eslint",
		"stylelint.vscode-stylelint",

		// Recommended
		"github.vscode-github-actions",
		"oven.bun-vscode",
		"thebearingedge.vscode-sql-lit",
		"adam-bender.commit-message-editor",
		"aaron-bond.better-comments",
		"bruno-api-client.bruno",
		"skyboost.nuxt-3-goto",
		"csstools.postcss",
		"mylesmurphy.prettify-ts",
		"yoavbls.pretty-ts-errors",
		"bradlc.vscode-tailwindcss",
		"wraith13.unsaved-files-vscode",
		"vue.volar",
		"wscats.vue"
	]
}
```

## Usage

### VSCode settings
<!-- eslint-disable-next-line markdown/no-missing-label-refs -- not a ref -->
> [!WARNING]
> Before using tabaqa, you should backup your current `.vscode/settings.json` file, since it will be overwritten by the tabaqa extension.


Add the file `.vscode/tabaqa.json` to your workspace with the following content:

**Specific tag (recommended)**
```json5
// .vscode/tabaqa.json

{
  "extends": "https://raw.githubusercontent.com/Nomad-Solutions/dev-env/refs/tags/{version}/vscode/base.json",
  "root": true,
  "settings": {
		// Your custom VSCode settings here
  }
}
```

**Latest commit to main**
```json5
// .vscode/tabaqa.json

{
  "extends": "https://raw.githubusercontent.com/Nomad-Solutions/dev-env/refs/heads/main/vscode/base.json",
  "root": true,
  "settings": {
		// Your custom VSCode settings here
  }
}
```

When this file is saved, it will automatically create a `settings.json` file for you. **This file should not be edited manually.**

### package.json
Various parts of the development environment need scripts in your `package.json`:

```json5
// package.json

{
	"scripts": {
		// Husky is used by other packages to inject effects into git hooks.
		"prepare": "husky",
		// Will lint and format your files (be careful with --fix if there are many files)
		"lint:es": "eslint '**/*.{ts,js,mjs,cjs,json,jsonc,json5,md,vue,html,svg,css,postcss,pcss}'",
		"lint:fix:es": "eslint '**/*.{ts,js,mjs,cjs,json,jsonc,json5,md,vue,html,svg,css,postcss,pcss}' --fix",
		"lint:style": "stylelint '**/*.{css,postcss,pcss,vue}'",
		"lint:fix:style": "stylelint '**/*.{css,postcss,pcss,vue}' --fix",
		// Execute `bun version` before pushing commits to increment version and generate changelog
		"version": "commit-and-tag-version"
	},
	"devDependencies": {
		"@nomad-solutions/dev-env": "github:Nomad-Solutions/dev-env#v{version}"
	},
	// If you don't add this, Bun might ask you to trust the package manually because some dependencies run scripts on installation
	"trustedDependencies": [
		"@nomad-solutions/dev-env"
	]
}
```

### commitlint
You can extend this commitlint config by adding the following to your own `commitlint.config.mjs`:

```javascript
// commitlint.config.mjs

export default { 
	extends: [ '@nomad-solutions/dev-env/commitlint' ],
	rules: {
		'scope-enum': [
			2,
			'always',
			[
				// add strings here, if you want to enforce specific scopes
			] 
		]
	}
};
```

<!-- eslint-disable-next-line markdown/no-missing-label-refs -- not a ref -->
> [!TIP]
> [More info on conventional commits scopes](https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-scope)


Then you must create the file `.husky/commit-msg`:
```bash
# .husky/commit-msg

bunx --no -- commitlint --edit $1
```

### eslint
You can extend these eslint configs by adding them to your own `eslint.config` as shown in the following sections.

#### Typescript
Add the following to your `eslint.config.mjs`:

```javascript
// eslint.config.mjs

import tseslint from 'typescript-eslint';
import base from '@nomad-solutions/dev-env/eslint/typescript';

export default tseslint.config(
	base,
);
```

#### Nuxt
Add the following to your `eslint.config.mjs`:
```javascript
// eslint.config.mjs

import createConfig from '@nomad-solutions/dev-env/eslint/nuxt'
import withNuxt from './.nuxt/eslint.config.mjs'

export default createConfig(withNuxt, import.meta.dirname)
```

<!-- eslint-disable-next-line markdown/no-missing-label-refs -- not a ref -->
> [!INFO]
> When using this config, you do not need to use the above [Typescript config](#typescript)

The remaining configuration is automatically handled when extending the [Nuxt layer](#nuxt-layer) from this package.

### stylelint
You can extend this config by adding it to your own `stylelint.config.mjs`:

```javascript
// stylelint.config.mjs

/** @type {import('stylelint').Config} */
export default {
	extends: [ '@nomad-solutions/dev-env/stylelint' ],
}

```

### lint-staged
You can extend this lint-staged config by adding the following to your own `lint-staged.config.mjs`:

```javascript
// lint-staged.config.mjs

import eslintConfig from './lint-staged/base.eslint.config.mjs';
import createStylelintConfig from './lint-staged/base.stylelint.config.mjs';

export default {
	...eslintConfig,
	...createStylelintConfig()
};
```

This config will both lint with ESLint and Stylelint on commits, but you can of course omit any linter / formatter you don't need (e.g. stylelint, if you have no CSS to lint).

<!-- eslint-disable-next-line markdown/no-missing-label-refs -- not a ref -->
> [!TIP]
> If you have different `lint-staged` needs for different packages in a monorepo, you just add a `lint-staged.config.mjs` file to the root of your specific package.
> Running `lint-staged` from the root of your monorepo will automatically use configs from subfolders when linting staged files from those subfolders and down. 

<!-- eslint-disable-next-line markdown/no-missing-label-refs -- not a ref -->
> [!INFO]
> The `lint-staged` ESLint config will automatically look for the nearest parent `eslint.config` file (any of the regular supported config files) for any given linted file, so this config will work just fine in monorepos wherever your `lint-staged` config file might be.
>

<!-- eslint-disable-next-line markdown/no-missing-label-refs -- not a ref -->
> [!INFO]
> The `lint-staged` Stylelint config will by default use the `stylelint.config.mjs` file that is situated in the same directory as the calling `lint-staged.config.mjs` file.
>
> If you want to use a different file, you can do so like this:
> ```javascript
> // lint-staged.config.mjs
> 
> import createStylelintConfig from './lint-staged/base.stylelint.config.mjs';
> 
> export default {
> 	...createStylelintConfig('./somewhere/else/some.config.mjs')
> };
> ```
>

Then you must create the file `.husky/pre-commit`:
```bash
# .husky/pre-commit

lint-staged
```

### tsconfig
After installation, you can extend this tsconfig by adding the following to your own `tsconfig.json`:

```json5
// tsconfig.json

{
	"extends": "@nomad-solutions/dev-env/tsconfig/base"
}
```

### Nuxt layer
To extend the Nuxt base layer, simply add the following to your `nuxt.config.ts`:

```typescript
// nuxt.config.ts

export default defineNuxtConfig({
	future: {
		// Might as well get ready for Nuxt 4
		compatibilityVersion: 4,
	},

	extends: [ '@nomad-solutions/dev-env/nuxt/base' ],
})
```

This will configure Nuxt with linting rules, Tailwind, Typescript, some nice default settings, etc.

### Tailwind

#### Tailwind configuration
To extend this configuration, add the following to your `tailwind.config.ts`:

```typescript
// tailwind.config.ts

import type { Config } from 'tailwindcss'
import baseConfig from '@nomad-solutions/dev-env/tailwind/base'

export default {
	presets: [ baseConfig ],
} satisfies Partial<Config>
```

### Versioning
To enable automatic version incrementation and changelog generation based on your commit messages (thank you commitlint), you will have to add a `.versionrc.mjs` file in the root of your project:

```javascript
// .versionrc.mjs

export default {
	path: '.',
	'tag-prefix': 'v'
}
```

Afterwards you should set a fitting first version number in your `package.json`, e.g.:

```json5
// package.json

{
	"name": "@nomad-solutions/{package}",
	"version": "0.1.0",
	// ...
}
```

You can now use the command `commit-and-tag-version`, but I recommend using `bun version` instead, [if you added the `version` script in your `package.json`](#packagejson).

<!-- eslint-disable-next-line markdown/no-missing-label-refs -- not a ref -->
> [!IMPORTANT]
> For this to work, you must use [`commitlint`](#commitlint) or be really good at writing consistent, correctly formatted commit messages (lol).

#### Release flow
1. Make your code changes.
2. Commit your changes as atomic as possible, so every change can have a descriptive commit message (follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) when writing messages).
3. Fix any potential linting errors thrown by `lint-staged` if necessary and try step 2 again.
4. Run `bun version` to increment version number and generate changelog.
5. Run `git push --follow-tags` to push your changes as well as the new version tag.

<!-- eslint-disable-next-line markdown/no-missing-label-refs -- not a ref -->
> [!TIP]
> If you are not using the command line to push changes, try setting `git config --global push.followTags true` so regular pushes always push tags as well.

<!-- eslint-disable-next-line markdown/no-missing-label-refs -- not a ref -->
> [!TIP]
> You can use the VSCode extension `adam-bender.commit-message-editor` if you want help with commit message formatting.
> You can find this editor in the top right (the small pencil icon) of the VSCode Source Control sidebar.

<!-- eslint-disable-next-line markdown/no-missing-label-refs -- not a ref -->
> [!NOTE]
> Use `bun version -- --first-release` when you want to create your first version. This will not increment the current version number.

<!-- eslint-disable-next-line markdown/no-missing-label-refs -- not a ref -->
> [!NOTE]
> Use `bun version -- --prerelease` when you are not yet sure of the stability of the version you are authoring. Instead of just incrementing the version number, it will append a prerelease version number after the targeted version, e.g.: `3.0.0-0`. Running this multiple times will increment the prerelease version.


## Development

### Developing with other application
When developing on this package, it might be beneficial to see how changes interact with your source code in your application. To do this, you can use [bun link](https://bun.sh/docs/cli/link).

**TLDR**:
1. Execute `bun link` from the root of this repository.
2. Execute `bun link @nomad-solutions/dev-env` in the root of your application.

This package should now be usable in your application (see [Usage section](#usage)), and updates to this package will be reflected instantly in your application (by the magic of symlinks).

<!-- eslint-disable-next-line markdown/no-missing-label-refs -- not a ref -->
> [!IMPORTANT]  
> This will not add the dependency to your `package.json`, so you will need to [install](#install) this package manually when you wish to do use it.

<!-- eslint-disable-next-line markdown/no-missing-label-refs -- not a ref -->
> [!TIP]  
> Remember to execute `bun link @nomad-solutions/dev-env` again if you delete your `node_modules/` or run a `bun install` in the consuming project, since that will unlink this package.

### Adding a configuration

#### 1. Create a directory with the exported configs (etc.) in this repository
E.g. `./eslint/eslint.config.mjs`.

#### 2. Add the package's export name in this repo's `package.json`
<!-- eslint-disable-next-line markdown/no-missing-label-refs -- not a ref -->
> [!TIP]  
> The package's export name is the one used when importing the package in the string `@nomad-solutions/dev-env/{package}`.

E.g.:
```json5
// package.json

{
	"exports": {
		// ...
		"./eslint": "./eslint/eslint.config.mjs"
		// ...
	}
}
```

#### 3. Write a section in this readme
Remember to add any preconditions such as peer dependencies in the [Install](#install) section or necessary [VSCode extensions](#vscode).

Then write a section under [Usage](#usage) about how to import (and configure, if needed) the configs.

#### 4. Commit your changes with a fitting message
Format your message with Conventional Commits to make versioning automatic. E.g. `feat(eslint): add eslint config`.

#### 5. Create version tag and changelog
When you have committed all your changes, run the following to create a tagged commit with a changelog and push the tag to GitHub:

```bash
# Create version tag and changelog
bun version

# Push changes
git push --follow-tags
```
