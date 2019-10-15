module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    mocha: true,
    browser: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended'
  ],
  globals: {
    __static: true
  },
  plugins: [
    'html',
    'react',
    'babel'
  ],
  rules: {
    'linebreak-style': 1,
    'max-len': [2, 150],
    'global-require': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'import/extensions': 0,
    'import/newline-after-import': 0,
    'no-multi-assign': 0,
  }
}
