module.exports = {
  "plugins": [ "react" ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  // "parserOptions": {
  //   "ecmaVersion": 2019,
  // },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "rules": {
    "no-console": ["error", { allow: ["info", "warn", "error"] }]
  }
};