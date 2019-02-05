'use strict';

module.exports = {
  extends: [
    '@qulix/tslint-config-typescript',
    '@qulix/tslint-config-rx',
    'codelyzer',
    './rules/common',
    './rules/component',
    './rules/decorator',
    './rules/directive',
    './rules/pipe',
    './rules/rx',
    './rules/template',
  ].map(require.resolve),
}
