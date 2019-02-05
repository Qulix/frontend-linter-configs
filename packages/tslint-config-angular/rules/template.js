'use strict';

module.exports = {
  rules: {
    // http://codelyzer.com/rules/templates-no-negated-async/
    'templates-no-negated-async': {
      severity: 'error',
      options: true
    },

    // http://codelyzer.com/rules/template-conditional-complexity/
    'template-conditional-complexity': {
      severity: 'error',
      options: [true, 4],
    },

    // http://codelyzer.com/rules/template-cyclomatic-complexity/
    'template-cyclomatic-complexity': {
      severity: 'error',
      options: [true, 6],
    },

    // http://codelyzer.com/rules/trackBy-function/
    'trackBy-function': {
      severity: 'error',
      options: true
    },

    // http://codelyzer.com/rules/use-view-encapsulation/
    'use-view-encapsulation': {
      severity: 'error',
      options: true
    },
  },
};
