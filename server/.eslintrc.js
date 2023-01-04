module.exports = {
  root: true,
  env: {
    jest: true,
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'babel',
    'import',
    '@typescript-eslint',
  ],
  globals: {
    assert: true,
    expect: true,
    should: true,
    describe: true,
    it: true,
    __static: true,
  },
  rules: {
    'linebreak-style': 1,
    'max-len': [2, 150],
    'import/no-unresolved': 0,
    camelcase: 1,

    // TODO
    'import/no-extraneous-dependencies': 1,
    'import/no-import-module-exports': 1,
  },
};
