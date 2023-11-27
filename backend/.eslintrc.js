module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["plugin:prettier/recommended", "prettier", "eslint:recommended"],
    plugins: ["@typescript-eslint"],
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        // project: "./tsconfig.json",
        // tsconfigRootDir: __dirname,
    },
    env: {
        es6: true,
        node: true,
    },
    rules: {
        "prettier/prettier": 0,
        "no-var": "error",
        semi: "error",
        indent: ["error", 4, { SwitchCase: 1 }],
        "no-multi-spaces": "error",
        "space-in-parens": "error",
        "no-multiple-empty-lines": "error",
        "prefer-const": "error",
    },
};
