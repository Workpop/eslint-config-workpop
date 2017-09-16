module.exports = {
  extends: [
    'eslint-config-airbnb',
    './config/globals.js',
    './config/es6.js',
    './config/flow.js',
    './config/react.js',
    './config/opinions.js',
  ].map(require.resolve),
  rules: {
    "eol-last": 2
  },
};
