
module.exports = {
  extends: [
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
