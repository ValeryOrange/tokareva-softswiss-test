import globals from 'globals';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import babelParser from '@babel/eslint-parser';

export default [
    js.configs.recommended,
    {
        plugins: {
            react,
            reactHooks,
            prettier,
        },
        rules: {
            'prettier/prettier': 'error',
            'react/prop-types': 'off'
        },
        files: ['**/*.{js,mjs,cjs,jsx}'],
        languageOptions: {
            globals: globals.browser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            },
        },
    },
];