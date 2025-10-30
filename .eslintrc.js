module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    '@react-native',
  ],
  plugins: ['@typescript-eslint', 'react', '@tanstack/eslint-plugin-query'],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
