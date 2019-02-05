'use strict';

module.exports = {
  rules: {
    // http://codelyzer.com/rules/component-selector/
    'component-selector': {
      severity: 'error',
      options: [true, 'element', 'ng', 'kebab-case'],
    },

    // http://codelyzer.com/rules/component-class-suffix/
    'component-class-suffix': {
      severity: 'warning',
      options: [true, 'Component'],
    },

    // http://codelyzer.com/rules/enforce-component-selector/
    'enforce-component-selector': {
      severity: 'error',
      options: true,
    },
  },
};
