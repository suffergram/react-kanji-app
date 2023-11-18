module.exports = {
    "*.{js,jsx,ts,tsx}": [
      () => "npm run tscheck",
      "npm run lint-fix",
    ]
};