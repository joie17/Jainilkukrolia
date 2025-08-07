import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import { ReactThreeFiber } from "@react-three/fiber";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@react-three": ReactThreeFiber,
    },
    extends: [
      js.configs.recommended,
      "plugin:react-hooks/recommended",
      "plugin:react-refresh/recommended",
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      // You can add more custom rules here
    },
  },
]);
