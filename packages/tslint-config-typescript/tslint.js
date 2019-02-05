'use strict';

module.exports = {
  extends: [
    './rules/format-specific',
    './rules/typescript-specific',
    './rules/javascript-specific',
    './rules/class-specific',
    './rules/function-specific',
  ].map(require.resolve),
};
