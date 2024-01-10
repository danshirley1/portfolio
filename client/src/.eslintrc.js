module.exports = {
  // root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'babel',
    'import',
    '@typescript-eslint',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'linebreak-style': 1,
    'max-len': [2, 150],
    'import/no-unresolved': 0,
    'react/prop-types': 1,
    'react/jsx-props-no-spreading': 0,

    // TODO filter out in time
    'react/forbid-prop-types': 1,
  },
};
