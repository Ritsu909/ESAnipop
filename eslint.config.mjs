import eslint from "@eslint/js";
import eslintConfigPrettier from "@vue/eslint-config-prettier";
import eslintPluginVue from "eslint-plugin-vue";
import globals from "globals";
import typescriptEslint from "typescript-eslint";

export default typescriptEslint.config(
    { ignores: ["*.d.ts", "**/coverage", "**/dist"] },
    {
        extends: [
            eslint.configs.recommended,
            ...typescriptEslint.configs.recommended,
            ...eslintPluginVue.configs["flat/recommended"]
        ],
        files: ["**/*.{ts,vue}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser,
            parserOptions: {
                parser: typescriptEslint.parser
            }
        },
        rules: {
            "no-duplicate-imports": "error",
            "no-self-compare": "error",
            "no-unmodified-loop-condition": "error",

            "accessor-pairs": [
                "error",
                {
                    setWithoutGet: true,
                    getWithoutSet: true
                }
            ],

            "arrow-body-style": "error",
            "block-scoped-var": "error",
            "camelcase": "error",
            "capitalized-comments": "error",
            "class-methods-use-this": "error",

            "consistent-return": [
                "error",
                {
                    treatUndefinedAsUnspecified: true
                }
            ],

            "consistent-this": "error",
            "curly": "error",
            "default-case-last": "error",
            "default-param-last": "error",
            "dot-notation": "error",
            "eqeqeq": "error",
            "grouped-accessor-pairs": "error",
            "guard-for-in": "error",
            "init-declarations": "error",
            "max-depth": "error",
            "max-nested-callbacks": ["error", 3],
            "no-array-constructor": "error",
            "no-case-declarations": "error",
            "no-delete-var": "error",
            "no-div-regex": "error",
            "no-else-return": "error",
            "no-empty": "error",
            "no-empty-static-block": "error",
            "no-eval": "error",
            "no-extra-bind": "error",
            "no-extra-boolean-cast": "error",
            "no-extra-label": "error",
            "no-implicit-coercion": "error",
            "no-implicit-globals": "error",
            "no-implied-eval": "error",
            "no-invalid-this": "error",
            "no-magic-numbers": "error",
            "no-nested-ternary": "error",
            "no-nonoctal-decimal-escape": "error",
            "no-object-constructor": "error",
            "no-redeclare": "error",
            "no-return-assign": "error",
            "no-script-url": "error",
            "no-underscore-dangle": "error",
            "no-unneeded-ternary": "error",
            "no-unused-expressions": "error",
            "no-unused-labels": "error",
            "no-useless-call": "error",
            "no-useless-catch": "error",
            "no-useless-computed-key": "error",
            "no-useless-concat": "error",
            "no-useless-constructor": "error",
            "no-useless-escape": "error",
            "no-useless-rename": "error",
            "no-useless-return": "error",
            "no-var": "error",
            "no-with": "error",
            "prefer-arrow-callback": "error",
            "prefer-const": "error",
            "prefer-destructuring": "error",
            "prefer-exponentiation-operator": "error",
            "prefer-numeric-literals": "error",
            "prefer-object-has-own": "error",
            "prefer-regex-literals": "error",
            "prefer-rest-params": "error",
            "prefer-spread": "error",
            "prefer-template": "error",
            "require-unicode-regexp": "error",
            "symbol-description": "error",
            "vars-on-top": "error",

            "line-comment-position": [
                "error",
                {
                    position: "above"
                }
            ],

            "unicode-bom": ["error", "never"]
        }
    },
    eslintConfigPrettier
);
