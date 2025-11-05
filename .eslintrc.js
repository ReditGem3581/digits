module.exports = {
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb/hooks'
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'eol-last': 0,
    'linebreak-style': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'import/extensions': 0,
    'object-curly-newline': 0,
    'max-len': ['error', { code: 120 }],
    'react/function-component-definition': 0,
    'no-undef': 0,
    'no-console': 1,
    'indent': ['error', 2],
    '@typescript-eslint/no-explicit-any': 'off'
  }
};