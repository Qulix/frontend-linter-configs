require('dotenv').config();

const {
  RULE_SYNTAX = 'enable',
  RULE_COMPONENT = 'enable',
  RULE_DIRECTIVE = 'enable',
  RULE_RX = 'enable',
} = process.env;

module.exports = {
  exports: [
    RULE_SYNTAX === 'enable' ? './rules/syntax.json' : null,
    RULE_COMPONENT === 'enable' ? './rules/component.json' : null,
    RULE_DIRECTIVE === 'enable' ? './rules/directive.json' : null,
    RULE_RX === 'enable' ? './rules/rx.json' : null,
  ].filter((value) => value !== null).map(require.resolve),
}
