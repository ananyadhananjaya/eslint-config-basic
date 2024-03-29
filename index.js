module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  ignorePatterns: ["*.html"],
  rules: {
    "no-unused-vars": "error",
    "no-var": "error",
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-style": ["error", "last"],
    "computed-property-spacing": [
      "error",
      "never",
      { enforceForClassMembers: true },
    ],
    "eol-last": ["error", "always"],
    "func-call-spacing": "error",
    "key-spacing": ["error", { beforeColon: false, afterColon: true }],
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    quotes: [
      "error",
      "single",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    semi: ["error", "never"],
    "semi-spacing": ["error", { before: false, after: true }],
    "space-before-blocks": ["error", "always"],
    "space-in-parens": ["error", "never"],
    eqeqeq: "error",
  },
};
