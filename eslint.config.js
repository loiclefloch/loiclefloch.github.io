const markdown = require('eslint-plugin-markdown');
const noQuoteRule = require('./eslint-rules/no-quote');

const loiclefloch = { rules: { "no-quote": noQuoteRule } };

module.exports = [
  {
    plugins: {
      markdown,
      loiclefloch,
    },
  },
  {
    files: ['**/*.md'],
    processor: 'markdown/markdown',
    rules: {
      'no-unused-vars': 'warn',
      'semi': ['error', 'always'],
      'loiclefloch/no-quote': 'error', // Set severity to "error"
    },
  },
];