const { CONFIG_JAVASCRIPT_MIGRATE } = process.env;

if (CONFIG_JAVASCRIPT_MIGRATE) {
  console.log('ESLint JavaScript Migration Enabled');
}

module.exports = {
  extends: [
    './rules/best-practices',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    strict: 'error',
  },
};
