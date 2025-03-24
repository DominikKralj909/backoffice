import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';



import prettierConfig from 'eslint-config-prettier';


export default defineConfig([
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: tsParser,
		},
		env: {
			browser: true,
			es2021: true,
		},
		plugins: {
			react,
			'react-hooks': reactHooks,
			'@typescript-eslint': typescript,
		},
		extends: [
			js.configs.recommended,
			// "plugin:react/recommended",
			// "plugin:react-hooks/recommended",
			// "plugin:@typescript-eslint/recommended",
			prettierConfig,
		],
		rules: {
			// General
			'no-console': 'warn',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/explicit-function-return-type': 'off',

			// React
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
			'react/jsx-uses-vars': 'warn',

			// React Hooks
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',

			// Prettier
			'prettier/prettier': [
				'warn',
				{
					singleQuote: true,
					semi: true,
					trailingComma: 'all',
					tabWidth: 4,
					useTabs: true,
				},
			],
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
]);
