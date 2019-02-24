'use strict';

module.exports = {
  extends: [
    '@qulix/stylelint-config-css'
  ],
  processors: [
    'stylelint-processor-styled-components'
  ],
  rules: {
    'value-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'no-empty-source': null,
    'no-missing-end-of-source-newline': null,
  },
};
