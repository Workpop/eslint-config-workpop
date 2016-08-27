module.exports = {
  extends: [
    'eslint-config-airbnb',
    './config/globals.js',
    './config/es6.js',
    './config/flow.js',
    './config/react.js',
    './config/customize.js',
  ].map(require.resolve),
  rules: {},
};
