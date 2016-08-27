module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    ecmaVersion: 6,
  },
  rules: {
    'arrow-body-style': [
      2,
      'always',
    ],
    'object-shorthand': 0,
    'prefer-arrow-callback': 0,
  },
};
