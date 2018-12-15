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

During migration, you can disable rulesets by overriding them in yours `.tslint` configuration file

> The rule set is stored in `node_modules/@qulix/tslint-config-typescript/rules`

```js
  "extends": [
    "@qulix/tslint-config-typescript"
  ],
  "rules": {
    // format-specific
    "quotemark": false,
    // class-specific
    "class-name": false,
    "member-access": false,
  }
```

## License

[MIT](./LICENSE.md)
