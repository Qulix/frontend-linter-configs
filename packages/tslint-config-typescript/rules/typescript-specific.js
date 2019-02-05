'use strict';

const banType = 'Avoid using the primitive constructor as a type';

module.exports = {
  rules: {
    'adjacent-overload-signatures': {
      severity: 'warning',
      options: true,
    },
    'ban-types': {
      severity: 'warning',
      options: [
        true,
        ['Object', `${banType}. Use 'object' instead`],
        [
          'Function',
          `${banType}. Use a specific function type, like '() => void'`,
        ],
        ['Boolean', `${banType}. Use 'boolean' instead`],
        ['Number', `${banType}. Use 'number' instead`],
        ['String', `${banType}. Use 'string' instead`],
        ['Symbol', `${banType}. Use 'symbol' instead`],
      ],
    },
    'no-any': {
      severity: 'warning',
      options: true,
    },
    'no-import-side-effect': {
      severity: 'off',
      options: false,
    },
    'no-inferrable-types': {
      severity: 'off',
      options: false,
    },
    'no-internal-module': {
      severity: 'warning',
      options: true,
    },
    'no-namespace': {
      severity: 'warning',
      options: true,
    },
    'no-non-null-assertion': {
      severity: 'off',
      options: false,
    },
    'no-parameter-reassignment': {
      severity: 'error',
      options: true,
    },
    'no-reference': {
      severity: 'warning',
      options: true,
    },
    'no-unnecessary-type-assertion': {
      severity: 'error',
      options: true,
    },
    'no-angle-bracket-type-assertion': {
      severity: 'warning',
      options: true,
    },
    'no-var-requires': {
      severity: 'warning',
      options: true,
    },
    'prefer-for-of': {
      severity: 'warning',
      options: true,
    },
    deprecation: {
      severity: 'warning',
    },
    'label-position': {
      severity: 'error',
      options: true,
    },
  },
};
