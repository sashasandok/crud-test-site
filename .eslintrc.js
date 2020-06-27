module.exports = {
	env: {
		browser: true,
		es6: true,
		amd: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		indent: 0,
		'linebreak-style': 0,
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				imports: 'always-multiline',
				functions: 'ignore',
			},
		],
		'no-console': 'off',
		'no-undef': 'off',
	},
}
