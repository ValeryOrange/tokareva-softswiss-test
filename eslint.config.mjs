import globals from 'globals';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactRefresh from 'eslint-plugin-react-refresh';
import babelParser from '@babel/eslint-parser';

export default [
    js.configs.recommended,
    react.configs.flat.recommended,
    reactHooks.configs['recommended-latest'],
    reactRefresh.configs.recommended,
    {
        plugins: {
            react,
            reactHooks,
            prettier,
            reactRefresh,
        },
        rules: {
            'prettier/prettier': 'error',
            'react/prop-types': 'off',
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            'react-refresh/only-export-components': 'error',
        },
        files: ['**/*.{js,mjs,cjs,jsx}'],
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
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
    eslintPluginPrettierRecommended,
];
