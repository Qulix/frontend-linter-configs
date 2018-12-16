# tslint-config-angular


> TSLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [Qulix Angular Style Guide](./STYLEGUIDE.md)

**This is an independent package but we recommend using it with:**
  - [@qulix/tslint-config-typescript](https://www.npmjs.com/package/@qulix/tslint-config-typescript)
  - [@qulix/tslint-config-rx](https://www.npmjs.com/package/@qulix/tslint-config-rx)

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

During migration, you can disable rulesets by overriding them in yours `.tslint` configuration file

> The rule set is stored in `node_modules/@qulix/tslint-config-angular/rules`

```js
  "extends": [
    "@qulix/tslint-config-angular"
  ],
  "rules": {
    // components
    "component-selector": [
      true,
      "element",
      ["foo"],
      "kebab-case"
    ]
  }
```

## License

[MIT](./LICENSE.md)

