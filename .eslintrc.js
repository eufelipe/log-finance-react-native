module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],

  rules: {
    'no-tabs': ['error', {allowIndentationTabs: true}],
    quotes: ['error', 'single', {avoidEscape: true}],
    semi: 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/semi': ['error'],
  },
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        indent: ['error', 2, {SwitchCase: 1}],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
