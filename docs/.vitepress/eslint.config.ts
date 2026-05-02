import { defineConfig } from "eslint/config";

import js from "@eslint/js";
import ts from "typescript-eslint";
import vue from "eslint-plugin-vue";
import prettier from "eslint-plugin-prettier/recommended";

import globals from "globals";

export default defineConfig([
  js.configs.recommended,
  ...ts.configs.recommended,
  ...vue.configs["flat/recommended"],
  prettier,
  {
    files: ["**/*.{ts,vue}"],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "vue/multi-word-component-names": "off",
      "vue/no-v-html": "off",
      "vue/require-default-prop": "off",
    },
  },
  {
    files: ["theme/client/**/*.{ts,vue}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ["theme/node/**/*.{ts,vue}"],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    ignores: ["cache", "dist"],
  },
]);
