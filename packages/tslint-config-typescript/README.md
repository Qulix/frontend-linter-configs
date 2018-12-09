# tslint-config-typescript

> TSLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [Qulix TypeScript Style Guide](./STYLEGUIDE.md)


## Installation

Install with `npm`:
```sh
$ npm install --save-dev tslint @qulix/tslint-config-typescript
```

Install with `yarn`:
```sh
$ yarn --dev tslint @qulix/tslint-config-typescript
```

## Usage

Once the `tslint-config-typescript` package is installed, you can use it by specifying `@qulix/tslint-config-typescript` in the [`extends`](https://palantir.github.io/tslint/usage/configuration/) section of your [TSLint configuration](https://palantir.github.io/tslint/rules/).

```js
// tslint.json
{
  "extends": [
    "@qulix/tslint-config-typescript"
  ],
  "rules": {
    // Additional, per-project rules...
  }
}
```

## Migration

During migration, you can disable modules with a set of rules in order to make configuration in your project incrementally.

You can use a global environment variable or define variables in a `.env` file:

```sh
# .env
RULE_JAVASCRIPT_SPECIFIC="disable"
RULE_FUNCTION_SPECIFIC="disable"
```

Full set of modules with rules:

```sh
RULE_FORMAT_SPECIFIC="enable"
RULE_TYPESCRIPT_SPECIFIC="enable"
RULE_JAVASCRIPT_SPECIFIC="enable"
RULE_CLASS_SPECIFIC="enable"
RULE_FUNCTION_SPECIFIC="enable"
```

## License

[MIT](./LICENSE.md)
