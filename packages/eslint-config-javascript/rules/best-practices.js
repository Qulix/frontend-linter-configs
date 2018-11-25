const { CONFIG_JAVASCRIPT_MIGRATE } = process.env;

const ERROR = CONFIG_JAVASCRIPT_MIGRATE ? 'warn' : 'error';
const WARN = 'warn';
const OFF = 'off';

module.exports = {
  rules: {
    'no-console': ERROR,
    
  }
};
