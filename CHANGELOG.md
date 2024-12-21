# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [3.0.0-4](https://github.com/Nomad-Solutions/dev-env/compare/v3.0.0-3...v3.0.0-4) (2024-12-21)


### Bug Fixes

* **eslint:** ignore all node_modules from typescript eslint config ([0876cad](https://github.com/Nomad-Solutions/dev-env/commit/0876cad1adfdc13e24066ae73856d619268b9c13))
* **eslint:** ignore mjs and cjs files in typechecked typescript eslint config ([1d3f7b1](https://github.com/Nomad-Solutions/dev-env/commit/1d3f7b110f2de335edc060bf1e305c2f86c50a6e))

## [3.0.0-3](https://github.com/Nomad-Solutions/dev-env/compare/v3.0.0-2...v3.0.0-3) (2024-12-21)


### Bug Fixes

* **eslint:** enable md formatting by disabling md linting (only nuxt) ([2a61dad](https://github.com/Nomad-Solutions/dev-env/commit/2a61dad3d37e4c4da6b822c3f4e09b834ae0aba6))

## [3.0.0-2](https://github.com/Nomad-Solutions/dev-env/compare/v3.0.0-1...v3.0.0-2) (2024-12-21)

## [3.0.0-1](https://github.com/Nomad-Solutions/dev-env/compare/v2.4.0...v3.0.0-1) (2024-12-20)


### ⚠ BREAKING CHANGES

* import paths have been changed to allow for different versions of configurations

### Features

* add .vscode settings config ([397746b](https://github.com/Nomad-Solutions/dev-env/commit/397746b7db6e79bf0d8ddb4967fd9a50ea313362))
* add @eslint/json and @eslint/markdown ([1b6d582](https://github.com/Nomad-Solutions/dev-env/commit/1b6d582d2ef4cf1c29c7b54b4dfa1f021529c970))
* add nuxt dev env + rewrite ([ec5cc6f](https://github.com/Nomad-Solutions/dev-env/commit/ec5cc6f14a174217dcde9f6ec6868bce752f0328))
* **eslint:** add typed linting and more lint rules ([9352a22](https://github.com/Nomad-Solutions/dev-env/commit/9352a2285d90fc98621a8b7e6614fdc4a61ed3e5))


### Bug Fixes

* **eslint:** allow while(true) ([b80ca10](https://github.com/Nomad-Solutions/dev-env/commit/b80ca10384e2877ada1722b36bc9f8afdd571466))
* **eslint:** change eslint to lint markdown istead of markdown code blocks ([68941a2](https://github.com/Nomad-Solutions/dev-env/commit/68941a29ca0ccaff30f25d69b6a2a722f470b049))
* **eslint:** change tsConfigRootDir to work with any consuming project ([eab9e56](https://github.com/Nomad-Solutions/dev-env/commit/eab9e5667b6249fe11b1d587d54ba3e863f8b6fe))
* **eslint:** only prefer destructuring on objects ([78db77f](https://github.com/Nomad-Solutions/dev-env/commit/78db77ff4c666c746d6dc446d1fdf93f4eb079af))
* **lint-staged:** add more js filetypes and json types and markdown types to linted types ([fac6d17](https://github.com/Nomad-Solutions/dev-env/commit/fac6d17722280f30f05eae74d338c3b75620d7fc))
* syntax errors in tsconfigs ([088919d](https://github.com/Nomad-Solutions/dev-env/commit/088919d4f99a8c26d06716589e5bdbd1f23f44f1))

## [3.0.0-0](https://github.com/Nomad-Solutions/dev-env/compare/v2.4.0...v3.0.0-0) (2024-12-20)


### ⚠ BREAKING CHANGES

* import paths have been changed to allow for different versions of configurations

### Features

* add .vscode settings config ([397746b](https://github.com/Nomad-Solutions/dev-env/commit/397746b7db6e79bf0d8ddb4967fd9a50ea313362))
* add @eslint/json and @eslint/markdown ([1b6d582](https://github.com/Nomad-Solutions/dev-env/commit/1b6d582d2ef4cf1c29c7b54b4dfa1f021529c970))
* add nuxt dev env + rewrite ([3ac61c5](https://github.com/Nomad-Solutions/dev-env/commit/3ac61c591c75b797203f0f4277d28b05225b21b8))
* **eslint:** add typed linting and more lint rules ([9352a22](https://github.com/Nomad-Solutions/dev-env/commit/9352a2285d90fc98621a8b7e6614fdc4a61ed3e5))


### Bug Fixes

* **eslint:** allow while(true) ([b80ca10](https://github.com/Nomad-Solutions/dev-env/commit/b80ca10384e2877ada1722b36bc9f8afdd571466))
* **eslint:** change eslint to lint markdown istead of markdown code blocks ([68941a2](https://github.com/Nomad-Solutions/dev-env/commit/68941a29ca0ccaff30f25d69b6a2a722f470b049))
* **eslint:** change tsConfigRootDir to work with any consuming project ([eab9e56](https://github.com/Nomad-Solutions/dev-env/commit/eab9e5667b6249fe11b1d587d54ba3e863f8b6fe))
* **eslint:** only prefer destructuring on objects ([78db77f](https://github.com/Nomad-Solutions/dev-env/commit/78db77ff4c666c746d6dc446d1fdf93f4eb079af))
* **lint-staged:** add more js filetypes and json types and markdown types to linted types ([fac6d17](https://github.com/Nomad-Solutions/dev-env/commit/fac6d17722280f30f05eae74d338c3b75620d7fc))
* syntax errors in tsconfigs ([088919d](https://github.com/Nomad-Solutions/dev-env/commit/088919d4f99a8c26d06716589e5bdbd1f23f44f1))

## [2.4.0](https://github.com/Nomad-Solutions/dev-env/compare/v2.3.0...v2.4.0) (2024-12-02)


### Features

* add blank line linting after imports ([c692afe](https://github.com/Nomad-Solutions/dev-env/commit/c692afe09c41dfbe0452e083c463d62241746338))

## [2.3.0](https://github.com/Nomad-Solutions/dev-env/compare/v2.2.0...v2.3.0) (2024-12-02)


### Features

* add 1tbs brace style eslint rule ([e63f56f](https://github.com/Nomad-Solutions/dev-env/commit/e63f56f9e79aa6d3e21b3313a9d181d1fa4c9c8a))

## [2.2.0](https://github.com/Nomad-Solutions/dev-env/compare/v2.1.0...v2.2.0) (2024-12-01)


### Features

* add spacing rules to eslint ([b8c767b](https://github.com/Nomad-Solutions/dev-env/commit/b8c767b213a2fec8a7024d10b114808f8cdcef24))

## [2.1.0](https://github.com/Nomad-Solutions/dev-env/compare/v2.0.1...v2.1.0) (2024-12-01)


### Features

* add stricter rules ([b831c95](https://github.com/Nomad-Solutions/dev-env/commit/b831c95d8328fac1fc31d33dc637e46f4e9677b8))

## [2.0.1](https://github.com/Nomad-Solutions/dev-env/compare/v2.0.0...v2.0.1) (2024-11-28)

## [2.0.0](https://github.com/Nomad-Solutions/dev-env/compare/v1.0.1...v2.0.0) (2024-11-27)


### ⚠ BREAKING CHANGES

* change package export for tsconfig to avoid name conflict

### Bug Fixes

* change package export for tsconfig to avoid name conflict ([f6ba944](https://github.com/Nomad-Solutions/dev-env/commit/f6ba94452d7ae772db2f147976330101dd13e107))

## [1.0.1](https://github.com/Nomad-Solutions/dev-env/compare/v1.0.0...v1.0.1) (2024-11-27)


### Bug Fixes

* add husky as trusted dependency to allow prepare hook ([ff939cd](https://github.com/Nomad-Solutions/dev-env/commit/ff939cde5f652e63c7a7aa9631873b8b954007b8))

## 1.0.0 (2024-11-27)


### Features

* add package exports for configs ([5fc9cd7](https://github.com/Nomad-Solutions/dev-env/commit/5fc9cd7db60eb3ece7a14388407acf55e32a955e))
* initialize configs ([5113e7d](https://github.com/Nomad-Solutions/dev-env/commit/5113e7d9f5ea4aa874c3b7e36c553491fd2cda3d))
