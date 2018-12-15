[![Build Status](https://travis-ci.org/Qulix/frontend-linter-configs.svg?branch=master)](https://travis-ci.org/Qulix/frontend-linter-configs)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Qulix JavaScript StyleGuide

Elegant linter configuration for better frontend development

> StyleGuide is still in an early development stage and not ready for production :smile:

# Style Guides

- [JavaScript](./packages/eslint-config-javascript/STYLEGUIDE.md)
  - [Node](./)
  - [React](./)
- [TypeScript](./packages/tslint-config-typescript/STYLEGUIDE.md)
  - [Node](./)
  - [React](./)
  - [Angular](./)
- [Styles](./)
  - [CSS](./)
  - [SASS](./)

# FAQ

### What versions of Node.js do you support?

We support versions of Node.js from __6.4.0__ and ending with the __latest__ version.

### Do you support ESLint 4 version ?

Yep. For each configuration, we write regression tests that allow us to make sure that our styleguide works correctly on different Node.js environments, as well as on different versions of the e.g. packages. ESLint.

### How to install all packages dependencies ?

We use [lerna](https://lernajs.io/) to manage multi-package structure. All dependencies are installed using `lerna bootstrap` on a `postinstall` npm hook.

Install with npm:

```sh
$ npm install
```

Install with yarn:

```sh
$ yarn
```

# Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

# Versioning

We use [semver](./https://semver.org/) for versioning. For the versions available, see the tags on this repository.

# License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details

