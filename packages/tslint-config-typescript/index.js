require('dotenv').config();
const {
  RULE_FORMAT_SPECIFIC = 'enable',
  RULE_TYPESCRIPT_SPECIFIC = 'enable',
  RULE_JAVASCRIPT_SPECIFIC = 'enable',
  RULE_CLASS_SPECIFIC = 'enable',
  RULE_FUNCTION_SPECIFIC = 'enable',
} = process.env;

module.exports = {
  extends: [
    RULE_FORMAT_SPECIFIC === 'enable' ? './rules/format-specific.json' : null,
    RULE_TYPESCRIPT_SPECIFIC === 'enable' ? './rules/typescript-specific.json' : null,
    RULE_JAVASCRIPT_SPECIFIC === 'enable' ? './rules/javascript-specific.json' : null,
    RULE_CLASS_SPECIFIC === 'enable' ? './rules/class-specific.json' : null,
    RULE_FUNCTION_SPECIFIC === 'enable' ? './rules/function-specific.json' : null,
  ].filter((value) => value !== null).map(require.resolve),
};
