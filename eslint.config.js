const NodePlugin = require('eslint-plugin-n');
const JestPlugin = require('eslint-plugin-jest');
const ImportPlugin = require('eslint-plugin-import');
const { node } = require('globals');
const rules = require('./src/rules');

module.exports = [
  {
    languageOptions: {
      parserOptions: {
        sourceType: 'commonjs',
      },
      globals: {
        ...node,
        ...JestPlugin.environments.globals.globals,
      },
    },
    plugins: {
      n: NodePlugin,
      jest: JestPlugin,
      import: ImportPlugin,
    },
    settings: {
      'import/core-modules': [
        '@coderich/dev',
      ],
    },
  },
  ...rules,
];
