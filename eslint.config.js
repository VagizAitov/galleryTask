import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigAirbnb from "eslint-config-airbnb";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  {
    plugins: {
      eslintPluginJsxA11y,
      eslintPluginPrettier,
      eslintPluginReactHooks,
    },
  },
  {
    configs: {
      eslintConfigAirbnb,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
