'use strict';

module.exports = {
  rules: {
    'class-name': {
      severity: 'error',
      options: true,
    },
    'member-access': {
      severity: 'warning',
      options: true,
    },
    'member-ordering': {
      severity: 'warning',
      options: [
        true,
        {
          order: [
            'public-static-field',
            'private-static-field',
            'public-instance-field',
            'private-instance-field',
            'private-constructor',
            'public-constructor',
            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
          ],
        },
      ],
    },
    'no-empty-interface': {
      severity: 'warning',
      options: true,
    },
    'interface-over-type-literal': {
      severity: 'off',
      options: false,
    },
    'no-misused-new': {
      severity: 'error',
      options: true,
    },
  },
};
