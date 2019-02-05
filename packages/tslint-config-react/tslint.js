'use strict';

module.exports = {
  extends: [
    '@qulix/tslint-config-typescript',
    'tslint-react',
  ],

  rules: {
    // @rules: https://github.com/palantir/tslint-react
    'variable-name': {
      severity: 'off',
      options: false,
    },
    'jsx-alignment': {
      severity: 'warning',
      options: true,
    },
    'jsx-ban-elements': {
      severity: 'off',
      options: false,
    },
    'jsx-ban-props': {
      severity: 'off',
      options: false,
    },
    'jsx-boolean-value': {
      severity: 'warning',
      options: 'never',
    },
    'jsx-curly-spacing': {
      severity: 'warning',
      options: true,
    },
    'jsx-equals-spacing': {
      severity: 'warning',
      options: 'always',
    },
    'jsx-key': {
      severity: 'warning',
      options: true,
    },
    'jsx-no-bind': {
      severity: 'error',
      options: true,
    },
    'jsx-no-lambda': {
      severity: 'warning',
      options: true,
    },
    'jsx-no-multiline-js': {
      severity: 'error',
      options: true,
    },
    'jsx-no-string-ref': {
      severity: 'error',
      options: true,
    },
    'jsx-use-translation-function': {
      severity: 'error',
      options: 'allow-punctuation'
    },
    'jsx-self-close': {
      severity: 'error',
      options: true,
    },
    'jsx-space-before-trailing-slash': {
      severity: 'warning',
      options: true,
    },
    'jsx-wrap-multiline': {
      severity: 'warning',
      options: true,
    },
  },
};
