# tslint-config-react


> TSLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [Qulix React Style Guide](./STYLEGUIDE.md)

**This is an independent package but we recommend using it with:**
  - [@qulix/tslint-config-typescript](https://www.npmjs.com/package/@qulix/tslint-config-typescript)

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

> The rule set is stored in `node_modules/@qulix/tslint-config-react/rules`

```js
  "extends": [
    "@qulix/tslint-config-react"
  ],
  "rules": {

    ]
  }
```

## License

[MIT](./LICENSE.md)

