
module.exports = {
  exports: [
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
