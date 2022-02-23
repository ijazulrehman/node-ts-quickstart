module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "prettier",
        "import"
    ],
    "rules": {
        "import/order": [
            "error",
            {
              "newlines-between": "never",
              groups: [
                ["builtin", "external"],
                ["internal", 'parent', "sibling", "index"],
              ],
            },
          ],
    },
    "settings": {
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true,
                "project": "./tsconfig.json"
            }
        }
    }
}
