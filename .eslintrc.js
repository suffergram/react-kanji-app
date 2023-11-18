module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:all",
    "plugin:react/all",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/default-param-last": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react/jsx-filename-extension": "off",
    "default-param-last": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-var-requires": "off",
    "import/no-extraneous-dependencies": "off",
  },
  root: true,
  settings: {
    "import/resolver": {
      typescript: {}
    }
  }
};
