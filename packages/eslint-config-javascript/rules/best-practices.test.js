const assert = require('assert');
const { Linter } = require('eslint');
const config = require('./best-practices');

const linter = new Linter();

describe('best-practices', () => {
  it('no-console', () => {
    const [message] = linter.verify(`
      function f() {
        console.log();
      }
    `, config);
    assert.ok(message.severity === 2);
  });
})

