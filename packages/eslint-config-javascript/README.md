# eslint-config-javascript

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [Qulix JavaScript Style Guide](./STYLEGUIDE.md)


## Installation

```sh
$ npm install --save-dev eslint @pbe/eslint-config-javascript
```

## Usage

Once the `eslint-config-javascript` package is installed, you can use it by specifying `@pbe/eslint-config-javascript` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "@pbe/eslint-config-javascript",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## License

[MIT](./LICENSE.md)
