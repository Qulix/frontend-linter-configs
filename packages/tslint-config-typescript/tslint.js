
module.exports = {
  extends: [
    './rules/format-specific.json',
    './rules/typescript-specific.json',
    './rules/javascript-specific.json',
    './rules/class-specific.json',
    './rules/function-specific.json',
  ].map(require.resolve),
};
