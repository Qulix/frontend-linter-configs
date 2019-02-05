# tslint-config-react

> TSLint [shareable config](https://palantir.github.io/tslint/2016/03/31/sharable-configurations-rules.html) for the [Qulix React Style Guide](https://github.com/Qulix/frontend-linter-configs/blob/master/packages/tslint-config-react/STYLEGUIDE.md)

## Installation

Install with `npm`:
```sh
$ npm install --save-dev tslint @qulix/tslint-config-react
```

Install with `yarn`:
```sh
$ yarn --dev tslint @qulix/tslint-config-react
```

## Usage

Once the `tslint-config-react` package is installed, you can use it by specifying `@qulix/tslint-config-react` in the [`extends`](https://palantir.github.io/tslint/usage/configuration/) section of your [TSLint configuration](https://palantir.github.io/tslint/rules/).

```js
// tslint.json
{
  "extends": [
    "@qulix/tslint-config-react"
  ],
  "rules": {
    // Additional, per-project rules...
  }
}
```

## Migration

During migration, you can disable rulesets by overriding them in yours `.tslint` configuration file

> The rule set is stored in `node_modules/@qulix/tslint-config-react/tslint.js`

```js
  "extends": [
    "@qulix/tslint-config-react"
  ],
  "rules": {
    "jsx-no-multiline-js": false,
    "jsx-no-string-ref": false,
  }
```

## License

[MIT](./LICENSE.md)

