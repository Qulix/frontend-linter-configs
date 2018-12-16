
module.exports = {
  exports: [
    'codelyzer',
    './rules/syntax.json',
    './rules/component.json',
    './rules/directive.json',
    './rules/rx.json',
  ].map(require.resolve),
}
