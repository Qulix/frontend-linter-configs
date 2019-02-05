'use strict';

module.exports = {
  rules: {
    'no-bitwise': {
      severity: 'warning',
      options: true,
    },
    'no-console': {
      severity: 'warning',
      options: [true, 'debug', 'info', 'time', 'timeEnd', 'trace'],
    },
    'comment-format': {
      severity: 'warning',
      options: [true, 'check-space'],
    },
    curly: {
      severity: 'error',
      options: true,
    },
    eofline: {
      severity: 'warning',
      options: true,
    },
    forin: {
      severity: 'error',
      options: true,
    },
    'import-spacing': {
      severity: 'warning',
      options: true,
    },
    'no-arg': {
      severity: 'error',
      options: true,
    },
    'no-construct': {
      severity: 'error',
      options: true,
    },
    'no-debugger': {
      severity: 'warning',
      options: true,
    },
    'no-duplicate-super': {
      severity: 'error',
      options: true,
    },
    'no-empty': {
      severity: 'error',
      options: true,
    },
    'no-eval': {
      severity: 'error',
      options: true,
    },
    'no-non-null-assertion': {
      severity: 'off',
      options: false,
    },
    'no-shadowed-variable': {
      severity: 'warning',
      options: true,
    },
    'no-string-literal': {
      severity: 'off',
      options: false,
    },
    'no-string-throw': {
      severity: 'error',
      options: true,
    },
    'no-switch-case-fall-through': {
      severity: 'warning',
      options: true,
    },
    'no-trailing-whitespace': {
      severity: 'warning',
      options: true,
    },
    'no-unnecessary-initializer': {
      severity: 'error',
      options: true,
    },
    'no-unused-expression': {
      severity: 'error',
      options: true,
    },
    'no-use-before-declare': {
      severity: 'error',
      options: true,
    },
    'no-var-keyword': {
      severity: 'warning',
      options: true,
    },
    'object-literal-sort-keys': {
      severity: 'off',
      options: false,
    },
    'one-line': {
      severity: 'warning',
      options: [
        true,
        'check-open-brace',
        'check-catch',
        'check-else',
        'check-whitespace',
      ],
    },
    'prefer-const': {
      severity: 'error',
      options: true,
    },
    radix: {
      severity: 'error',
      options: true,
    },
    'triple-equals': {
      severity: 'error',
      options: [true, 'allow-null-check'],
    },
    'unified-signatures': {
      severity: 'warning',
      options: true,
    },
    'variable-name': {
      severity: 'error',
      options: true,
    },
  },
};
