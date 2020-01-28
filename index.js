module.exports = {
  "extends": ["stylelint-prettier/recommended"],
  "ignoreFiles": ["**/*.!(css)"],
  "plugins": [
    "stylelint-order"
  ],
  "rules": {
    "order/properties-alphabetical-order": true,
    "prettier/prettier": [true, { "printWidth": 120 }],
    "selector-nested-pattern": "^&"
  }
};
