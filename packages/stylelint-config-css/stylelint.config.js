'use strict';

module.exports = {
  extends: [
    './rules/common',
    './rules/color',
    './rules/font',
  ].map(require.resolve),
}
