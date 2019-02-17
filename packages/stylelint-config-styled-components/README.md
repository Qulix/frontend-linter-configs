# stylelint-config-styled-components

> Stylelint [shareable config](https://stylelint.io/user-guide/configuration/) for the [Qulix SCSS Style Guide](https://github.com/Qulix/frontend-linter-configs/blob/master/packages/stylelint-config-sass/STYLEGUIDE.md)

## Installation

Install with `npm`:
```sh
$ npm install --save-dev tslint @qulix/stylelint-config-scss
```

Install with `yarn`:
```sh
$ yarn --dev tslint @qulix/stylelint-config-scss
```

## Usage

Once the `stylelint-config-scss` package is installed, you can use it by specifying `@qulix/stylelint-config-scss` in the [`extends`](https://stylelint.io/user-guide/configuration/#extends) section of your [TSLint configuration](https://github.com/kristerkari/stylelint-scss/tree/b2a4acf64776bd9a0d00f5ca069b919815f4b6a1#stylelint-scss).

```js
// .stylelintrc
{
  "extends": [
    "@qulix/stylelint-config-scss"
  ],
  "rules": {
    // Additional, per-project rules...
  }
}
```

## Migration

During migration, you can disable rulesets by overriding them in yours `.stylelintrc` configuration file

> The rule set is stored in `node_modules/@qulix/stylelint-config-scss/rules`

```js
  "extends": [
    "@qulix/stylelint-config-styled-components"
  ],
  "rules": {

  }
```

## License

[MIT](./LICENSE.md)

