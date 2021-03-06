# tslint-config-rx

> TSLint [shareable config](https://palantir.github.io/tslint/2016/03/31/sharable-configurations-rules.html) for the [Qulix Rx Style Guide](https://github.com/Qulix/frontend-linter-configs/blob/master/packages/tslint-config-rx/STYLEGUIDE.md)

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

> The rule set is stored in `node_modules/@qulix/tslint-config-rx/tslint.js`

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

