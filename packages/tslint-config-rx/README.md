# tslint-config-rx


> TSLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [Qulix Rx Style Guide](./STYLEGUIDE.md)

**This is an independent package but we recommend using it with:**
  - [@qulix/tslint-config-typescript](https://www.npmjs.com/package/@qulix/tslint-config-typescript)

## Installation

Install with `npm`:
```sh
$ npm install --save-dev tslint @qulix/tslint-config-rx
```

Install with `yarn`:
```sh
$ yarn --dev tslint @qulix/tslint-config-rx
```

## Usage

Once the `tslint-config-rx` package is installed, you can use it by specifying `@qulix/tslint-config-rx` in the [`extends`](https://palantir.github.io/tslint/usage/configuration/) section of your [TSLint configuration](https://palantir.github.io/tslint/rules/).

```js
// tslint.json
{
  "extends": [
    "@qulix/tslint-config-rx"
  ],
  "rules": {
    // Additional, per-project rules...
  }
}
```

## Migration

During migration, you can disable rulesets by overriding them in yours `.tslint` configuration file

> The rule set is stored in `node_modules/@qulix/tslint-config-rx/rules`

```js
  "extends": [
    "@qulix/tslint-config-rx"
  ],
  "rules": {
    "rxjs-just": false,
    "rxjs-no-add": false,
    "rxjs-no-do": false,
    ]
  }
```

## License

[MIT](./LICENSE.md)

