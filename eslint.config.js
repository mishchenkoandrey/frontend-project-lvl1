import airbnbBase from 'eslint-config-airbnb-base';
import globals from 'globals';

export default [
  airbnbBase,

  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

    rules: {
      'no-console': 'off',
      'import/extensions': 'off',
  },
];
