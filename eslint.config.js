import airbnbBase from "eslint-config-airbnb-base";
import globals from "globals";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [

  ...compat.extends("airbnb-base"),

  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

    rules: {
      "no-console": "off",
      "import/extensions": "off",
    },
  },
];
