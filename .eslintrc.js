module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {},
  globals: {},
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
