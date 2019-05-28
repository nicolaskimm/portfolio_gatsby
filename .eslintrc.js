module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  rules: {
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js'],
      },
    ],
    'linebreak-style': [2, 'windows'],
    'import/no-extraneous-dependencies': 0,
    'react/destructuring-assignment': 0,
    'import/no-unresolved': 0,
    'react/jsx-curly-brace-presence': 0,
  },
};
