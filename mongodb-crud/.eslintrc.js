module.exports = {
	env: {
		commonjs: true,
		node: true,
		es6: true,
		jest: true,
	},
	extends: ['plugin:prettier/recommended', 'prettier', 'eslint:recommended'],
	overrides: [
		{
			files: ['.eslintrc.{js,cjs}', '**/*.test.js'],
			parserOptions: {
				sourceType: 'script',
			},
			plugins: ['jest'],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'prettier/prettier': 'warn',
		'no-unused-vars': 'warn',
		'no-var': 'warn',
		'prefer-const': 'warn',
	},
};
