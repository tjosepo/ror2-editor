// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
  {
    ignores: ["dist"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  {
    languageOptions: {
      parserOptions: {
        project: "tsconfig.lint.json",
      },
    },
    rules: {
      "no-shadow": "error",

      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/explicit-function-return-type": "error",
    },
  },
  {
    files: ["scripts/**"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
);
