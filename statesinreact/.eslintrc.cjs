module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  parser: "@babel/eslint-parser", // Ensure ESLint understands modern JavaScript features
  parserOptions: {
    ecmaVersion: 12, // Use ECMAScript 2021 features
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended", // Use eslint-plugin-prettier to integrate Prettier with ESLint
  ],
  plugins: ["react", "react-hooks", "prettier"],
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
  rules: {
    "react/jsx-no-target-blank": "off", // Disable the rule that prohibits using target="_blank"
    "react/prop-types": "off", // Disable prop-types validation (if you're using TypeScript or PropTypes, you can remove this line)
    "prettier/prettier": [
      "error",
      {
        // Configure Prettier to show errors for formatting issues
        endOfLine: "auto", // Ensure consistent end-of-line characters
      },
    ],
    "no-unused-vars": "error", // Show errors for unused variables
    "no-unused-imports": "error", // Show errors for unused imports
  },
};
