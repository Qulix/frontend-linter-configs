'use strict';

module.exports = {
  rules: {
    quotemark: {
      severity: 'error',
      options: [true, 'single'],
    },
    indent: {
      severity: 'error',
      options: [true, 'spaces'],
    },
    'max-line-length': {
      severity: 'warning',
      options: { limit: 140 },
    },
    whitespace: {
      severity: 'warning',
      options: [
        true,
        'check-branch',
        'check-decl',
        'check-operator',
        'check-separator',
        'check-type',
      ],
    },
    semicolon: {
      severity: 'warning',
      options: [true, 'always'],
    },
    typedef: {
      severity: 'off',
      options: false,
    },
    'typedef-whitespace': {
      siverity: 'warning',
      options: [
        {
          'call-signature': 'nospace',
          'index-signature': 'nospace',
          parameter: 'nospace',
          'property-declaration': 'nospace',
          'variable-declaration': 'nospace',
        },
        {
          'call-signature': 'onespace',
          'index-signature': 'onespace',
          parameter: 'onespace',
          'property-declaration': 'onespace',
          'variable-declaration': 'onespace',
        },
      ],
    },
  },
};
