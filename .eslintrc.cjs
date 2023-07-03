module.exports = {
  env: { browser: true, es2021: true },
  extends: [
    "eslint:recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react", "react-refresh", "react-hooks", "@typescript-eslint"],
  rules: {
    "no-duplicate-imports": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    camelcase: "error",
  },
};
