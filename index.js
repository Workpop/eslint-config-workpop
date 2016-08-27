module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/globals.js',
    './rules/es6.js',
    './rules/flow.js',
    './rules/react.js',
    './rules/customize.js',
  ].map(require.resolve),
  rules: {},
};
