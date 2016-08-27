module.exports = {
  plugins: [
    'flowtype',
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  rules: {
    'flowtype/require-parameter-type': 2,
    'flowtype/require-return-type': [
      2,
      'always',
      {
        'annotateUndefined': 'never',
      },
    ],
    'flowtype/space-after-type-colon': [
      2,
      'always',
    ],
    'flowtype/space-before-type-colon': [
      2,
      'never',
    ],
    'flowtype/type-id-match': [
      2,
      '^([A-Z][a-z0-9]+)+Type$',
    ],
  },
};
