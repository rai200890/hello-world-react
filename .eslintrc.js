module.exports =  {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
              "jsx": true
        }
    },
    "plugins": ["env", "react"],
    "rules": {
       "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
}
