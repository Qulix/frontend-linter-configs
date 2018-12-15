
module.exports = {
  exports: [
    './rules/syntax.json',
    './rules/component.json',
    './rules/directive.json',
    './rules/rx.json',
  ].map(require.resolve),
}
