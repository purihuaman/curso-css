module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['standard', 'eslint-config-prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
		'comma-dangle': ['error', 'only-multiline'],
		'space-before-function-paren': ['error', 'never'],
		'no-unused-vars': 'warn',
		'react/prop-types': 'off',
	},
};
