import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import svelteParser from "svelte-eslint-parser";

export default [
  js.configs.recommended,
  prettier,
  {
    files: ["**/*.{js,ts,svelte}"],
    plugins: {
      "@typescript-eslint": typescript,
    },
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        browser: true,
        es2017: true,
        node: true,
      },
    },
    rules: {
      ...typescript.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.svelte"],
    plugins: {
      svelte,
    },
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: typescriptParser,
      },
    },
    rules: {
      ...svelte.configs.recommended.rules,
    },
  },
  {
    ignores: ["build/", ".svelte-kit/", "dist/", "node_modules/"],
  },
];
