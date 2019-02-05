'use strict';

module.exports = {
  rules: {
    // http://codelyzer.com/rules/directive-selector/
    'directive-selector': {
      severity: 'warning',
      options: [true, 'element', 'ng', 'camelCase'],
    },

    // http://codelyzer.com/rules/directive-class-suffix/
    'directive-class-suffix': {
      severity: 'warning',
      options: [true, 'Directive'],
    },

    // http://codelyzer.com/rules/no-output-named-after-standard-event/
    'no-output-named-after-standard-event': {
      severity: 'warning',
      options: true,
    },
  },
};
