module.exports = [
  require('@eslint/js').configs.recommended,
  require('./best-practices'),
  require('./errors'),
  require('./es6'),
  require('./imports'),
  require('./node'),
  require('./style'),
  require('./variables'),
  require('./coderich'),
];
