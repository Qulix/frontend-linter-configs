# eslint-config-node

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [Qulix Node.js Style Guide](./STYLEGUIDE.md)

## Installation

Install with `npm`:
```sh
$ npm install --save-dev eslint @qulix/eslint-config-node
```

Install with `yarn`:
```sh
$ yarn --dev eslint @qulix/eslint-config-node
```

## Usage

Once the `eslint-config-node` package is installed, you can use it by specifying `@qulix/eslint-config-node` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
// .eslintrc.json
{
  "extends": [
    "@qulix/eslint-config-node"
  ],
  "rules": {
    // Additional, per-project rules...
  }
}
```

## Migration

During migration, you can disable rulesets by overriding them in yours `.eslintrc` configuration file

> The rule set is stored in `node_modules/@qulix/eslint-config-node/rules`

```js
  "extends": [
    "@qulix/eslint-config-node"
  ],
  "rules": {

  }
```

## License

[MIT](./LICENSE)

