module.exports = {
    extends: [
      'next/core-web-vitals',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'prettier',  // Disable conflicting ESLint rules with Prettier
    ],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error',  // Show Prettier formatting issues as ESLint errors
      '@typescript-eslint/no-unused-vars': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  };
  