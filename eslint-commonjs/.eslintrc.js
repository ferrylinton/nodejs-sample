module.exports = {
	env: {
		commonjs: true,
		node: true,
		es6: true,
		jest: true,
	},
	extends: ['eslint:recommended'],
	overrides: [
		{
			files: ['.eslintrc.{js,cjs}', '**/*.test.js'],
			parserOptions: {
				sourceType: 'script',
			}
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'no-unused-vars': 'warn',
		'no-var': 'warn',
		'prefer-const': 'warn',
	},
};
