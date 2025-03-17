import globals from "globals";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";
import jsxParser from "babel-eslint";

export default [
    js.configs.recommended,
    {
        plugins: {
            react,
            reactHooks,
            prettier,
        },
        rules: {
            "prettier/prettier": "error",
            "react/prop-types": "off"
        },
        files: ["**/*.{js,mjs,cjs,jsx,sass,scss,css}"],
        languageOptions: {
            globals: globals.browser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            parser: jsxParser,
        },
        rules: {
            "prettier/prettier": "error",
            "react/prop-types": "off",
        },
    },
];