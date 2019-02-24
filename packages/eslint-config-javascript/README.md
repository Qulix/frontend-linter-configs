# eslint-config-javascript

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [Qulix JavaScript Style Guide](./STYLEGUIDE.md)

## Installation

Install with `npm`:
```sh
$ npm install --save-dev eslint @qulix/eslint-config-javascript
```

Install with `yarn`:
```sh
$ yarn --dev eslint @qulix/eslint-config-javascript
```

## Usage

Once the `eslint-config-javascript` package is installed, you can use it by specifying `@qulix/eslint-config-javascript` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
// .eslintrc.json
{
  "extends": [
    "@qulix/eslint-config-javascript"
  ],
  "rules": {
    // Additional, per-project rules...
  }
}
```

## Migration

During migration, you can disable rulesets by overriding them in yours `.eslintrc` configuration file

> The rule set is stored in `node_modules/@qulix/eslint-config-javascript/rules`

```js
  "extends": [
    "@qulix/eslint-config-javascript"
  ],
  "rules": {

  }
```

## License

[MIT](./LICENSE)

