// eslint.config.js (flat config для ESLint v9)
import tseslint from "typescript-eslint";

export default [
  { ignores: ["dist/**"] },
  // базовые рекомендации для TypeScript
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
];
