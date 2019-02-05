'use strict';

module.exports = {
  plugins: ['stylelint-scss'],

  extends: ['./rules/common'].map(require.resolve),
};
