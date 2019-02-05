'use strict';

module.exports = {
  extends: ['rxjs-tslint-rules'],

  rules: {
    // https://cartant.github.io/rxjs-tslint-rules/
    'rxjs-add': {
      severity: 'off',
      options: false,
    },
    'rxjs-ban-observables': {
      severity: 'error',
      options: true,
    },
    'rxjs-ban-operators': {
      severity: 'error',
      options: true,
    },
    'rxjs-no-create': {
      severity: 'warning',
      options: true,
    },
    'rxjs-just': {
      severity: 'warning',
      options: true,
    },
    'rxjs-no-do': {
      severity: 'warning',
      options: true,
    },
    // https://medium.com/@benlesh/observables-and-finnish-notation-df8356ed1c9b
    'rxjs-finnish': {
      severity: 'warning',
      options: true,
    },
    'rxjs-no-ignored-error': {
      severity: 'off',
      options: false,
    },
    'rxjs-no-ignored-notifier': {
      severity: 'off',
      options: false,
    },
    'rxjs-no-ignored-replay-buffer': {
      severity: 'warning',
      options: true,
    },
    'rxjs-no-ignored-subscribe': {
      severity: 'off',
      options: false,
    },
    'rxjs-no-internal': {
      severity: 'error',
      options: true,
    },
    'rxjs-no-nested-subscribe': {
      severity: 'error',
      options: true,
    },
    'rxjs-no-sharereplay': {
      severity: 'error',
      options: true,
    },
    'rxjs-no-subject-unsubscribe': {
      severity: 'warning',
      options: true,
    },
    'rxjs-no-subject-value': {
      severity: 'warning',
      options: true,
    },
    'rxjs-no-tap': {
      severity: 'warning',
      options: true,
    },
    'rxjs-no-unbound-methods': {
      severity: 'error',
      options: true,
    },
    'rxjs-no-unsafe-catch': {
      severity: 'warning',
      options: true,
    },
    'rxjs-no-unsafe-first': {
      severity: 'warning',
      options: true,
    },
    'rxjs-no-unsafe-scope': {
      severity: 'warning',
      options: true,
    },
    'rxjs-no-unsafe-switchmap': {
      severity: 'warning',
      options: true,
    },
    'rxjs-no-unsafe-takeuntil': {
      severity: 'warning',
      options: true,
    },
    'rxjs-prefer-async-pipe': {
      severity: 'warning',
      options: true,
    },
    'rxjs-prefer-observer': {
      severity: 'error',
      options: true,
    },
    'rxjs-throw-error': {
      severity: 'error',
      options: true,
    },
  },
};
