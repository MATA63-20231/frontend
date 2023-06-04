module.exports = {
    env: { browser: true, es2021: true },
    extends: [
        "eslint:recommended",
        "airbnb",
        "airbnb/hooks",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    plugins: [
        "react",
        "react-refresh",
        "react-hooks",
        "prettier",
        "@typescript-eslint",
    ],
    rules: {
        "react-refresh/only-export-components": "warn",
        indent: ["error", 2],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        camelcase: "error",
        "no-duplicate-imports": "error",
    },
};
