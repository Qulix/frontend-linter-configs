'use strict';

module.exports = {
  rules: {
    // http://codelyzer.com/rules/decorator-not-allowed/
    'decorator-not-allowed': {
      severity: 'error',
      options: true,
    },

    // http://codelyzer.com/rules/no-input-rename/
    'no-input-rename': {
      severity: 'warning',
      options: true,
    },

    // http://codelyzer.com/rules/no-output-on-prefix/
    'no-output-on-prefix': {
      severity: 'warning',
      options: true,
    },

    // http://codelyzer.com/rules/no-output-rename/
    'no-output-rename': {
      severity: 'warning',
      options: true,
    },

    // http://codelyzer.com/rules/prefer-output-readonly/
    'prefer-output-readonly': {
      severity: 'warning',
      options: true,
    },

    // http://codelyzer.com/rules/no-attribute-parameter-decorator/
    'no-attribute-parameter-decorator': {
      severity: 'error',
      options: true,
    },

    // http://codelyzer.com/rules/prefer-inline-decorator/
    'prefer-inline-decorator': {
      severity: 'off',
      options: false,
    },

    // http://codelyzer.com/rules/use-host-property-decorator/
    'use-host-property-decorator': {
      severity: 'warning',
      options: true,
    },

    // http://codelyzer.com/rules/use-input-property-decorator/
    'use-input-property-decorator': {
      severity: 'warning',
      options: true,
    },

    // http://codelyzer.com/rules/use-output-property-decorator/
    'use-output-property-decorator': {
      severity: 'warning',
      options: true,
    },
  },
};
