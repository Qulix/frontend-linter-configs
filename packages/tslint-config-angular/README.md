# tslint-config-angular


> TSLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [Qulix Angular Style Guide](./STYLEGUIDE.md)


## Installation

Install with `npm`:
```sh
$ npm install --save-dev tslint @qulix/tslint-config-angular
```

Install with `yarn`:
```sh
$ yarn --dev tslint @qulix/tslint-config-angular
```

## Usage

Once the `tslint-config-angular` package is installed, you can use it by specifying `@qulix/tslint-config-angular` in the [`extends`](https://palantir.github.io/tslint/usage/configuration/) section of your [TSLint configuration](https://palantir.github.io/tslint/rules/).

```js
// tslint.json
{
  "extends": [
    "@qulix/tslint-config-angular"
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
RULE_DIRECTIVE="disable"
RULE_RX="disable"
```

Full set of modules with rules:

```sh
RULE_SYNTAX="enable"
RULE_COMPONENT="enable"
RULE_DIRECTIVE="enable"
RULE_RX="enable"
```

## License

[MIT](./LICENSE.md)

