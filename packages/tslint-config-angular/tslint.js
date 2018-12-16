
module.exports = {
  exports: [
    'codelyzer',
    './rules/common.js',
    './rules/component.js',
    './rules/decorator.js'
    './rules/directive.js',
    './rules/pipe.js',
    './rules/rx.js',
    './rules/template.js',
  ].map(require.resolve),
}
