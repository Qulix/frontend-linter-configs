'use strict';

module.exports = {
  rules: {
    // http://codelyzer.com/rules/pipe-prefix/
    'pipe-prefix': {
      severity: 'warning',
      options: [true, 'Pipe'],
    },

    // http://codelyzer.com/rules/pipe-impure/
    'pipe-impure': {
      severity: 'error',
      options: true,
    },

    // http://codelyzer.com/rules/use-pipe-decorator/
    'use-pipe-decorator': {
      severity: 'error',
      options: true,
    },

    // http://codelyzer.com/rules/use-pipe-transform-interface/
    'use-pipe-transform-interface': {
      severity: 'error',
      options: true,
    },
  },
};
