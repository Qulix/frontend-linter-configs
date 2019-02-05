'use strict';

module.exports = {
  rules: {
    'promise-function-async': {
      severity: 'off',
      options: false,
    },
    'only-arrow-functions': {
      severity: 'off',
      options: false,
    },
    'arrow-return-shorthand': {
      severity: 'error',
      options: true,
    },
    'callable-types': {
      severity: 'warning',
      options: true,
    },
  },
};
