module.exports = {
    "env": {
        "commonjs": true,
        "node": true,
        "es6": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "files": [
                ".eslintrc.{js,cjs}",
                "**/*.test.js",
            ],
            "parserOptions": {
                "sourceType": "script"
            },
            "plugins": ["jest"]
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
    }
}
