# stylelint-config-css

> Stylelint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [Qulix CSS Style Guide](./STYLEGUIDE.md)

## Installation

Install with `npm`:
```sh
$ npm install --save-dev tslint @qulix/stylelint-config-css
```

Install with `yarn`:
```sh
$ yarn --dev tslint @qulix/stylelint-config-css
```

## Usage

Once the `stylelint-config-css` package is installed, you can use it by specifying `@qulix/stylelint-config-css` in the [`extends`](https://stylelint.io/user-guide/configuration/#extends) section of your [TSLint configuration](https://stylelint.io/user-guide/rules/).

```js
// .stylelintrc
{
  "extends": [
    "@qulix/stylelint-config-css"
  ],
  "rules": {
    // Additional, per-project rules...
  }
}
```

## Migration

During migration, you can disable rulesets by overriding them in yours `.stylelintrc` configuration file

> The rule set is stored in `node_modules/@qulix/stylelint-config-css/rules`

```js
  "extends": [
    "@qulix/stylelint-config-css"
  ],
  "rules": {
    "color-hex-case": "upper",
    "color-hex-length": "short",
  }
```

## License

[MIT](./LICENSE.md)

