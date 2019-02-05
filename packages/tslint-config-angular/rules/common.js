'use strict';

module.exports = {
  rules: {
    // http://codelyzer.com/rules/angular-whitespace/
    'angular-whitespace': {
      severity: 'warning',
      options: [
        true,
        'check-interpolation',
        'check-pipe',
        'check-semicolon',
      ],
    },

    // http://codelyzer.com/rules/banana-in-box/
    'banana-in-box': {
      severity: 'error',
      options: true,
    },

    // http://codelyzer.com/rules/contextual-life-cycle/
    'contextual-life-cycle': {
      severity: 'error',
      options: true,
    },

    // http://codelyzer.com/rules/no-conflicting-life-cycle-hooks/
    'no-conflicting-life-cycle-hooks': {
      severity: 'error',
      options: true,
    },

    // http://codelyzer.com/rules/i18n/
    i18n: {
      severity: 'warning',
      options: [true, 'check-id', 'check-text'],
    },

    // http://codelyzer.com/rules/max-inline-declarations/
    'max-inline-declarations': {
      severity: 'error',
      options: true,
    },

    // http://codelyzer.com/rules/no-input-prefix/
    'no-input-prefix': {
      severity: 'warning',
      options: [true, 'can', 'is', 'should'],
    },

    // http://codelyzer.com/rules/no-life-cycle-call/
    'no-life-cycle-call': {
      severity: 'error',
      options: true,
    },

    // http://codelyzer.com/rules/no-template-call-expression/
    'no-template-call-expression': {
      severity: 'warning',
      options: true,
    },

    // http://codelyzer.com/rules/no-unused-css/
    'no-unused-css': {
      severity: 'warning',
      options: true
    },

    // http://codelyzer.com/rules/use-life-cycle-interface/
    'use-life-cycle-interface': {
      severity: 'error',
      options: true,
    },

    // http://codelyzer.com/rules/no-forward-ref/
    'no-forward-ref': {
      severity: 'error',
      options: true,
    },

    // http://codelyzer.com/rules/import-destructuring-spacing/
    'import-destructuring-spacing': {
      severity: 'warning',
      options: true,
    },

    // http://codelyzer.com/rules/no-queries-parameter/
    'no-queries-parameter': {
      severity: 'warning',
      options: true,
    },
  },
};
