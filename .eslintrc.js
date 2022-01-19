module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint/eslint-plugin'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	root: true,
	env: {
		node: true
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'accessor-pairs': 'error',
		'array-bracket-newline': 'off',
		'array-bracket-spacing': 'error',
		'array-callback-return': 'error',
		'array-element-newline': 'off',
		'arrow-body-style': 'off',
		'arrow-parens': ['error', 'as-needed'],
		'arrow-spacing': [
			'error',
			{
				after: true,
				before: true
			}
		],
		'block-scoped-var': 'error',
		'block-spacing': 'warn',
		'brace-style': 'error',
		'camelcase': 'warn',
		'capitalized-comments': 'off',
		'class-methods-use-this': 'off',
		'comma-dangle': 'off',
		'comma-spacing': [
			'error',
			{
				after: true,
				before: false
			}
		],
		'comma-style': 'error',
		'complexity': 'off',
		'computed-property-spacing': 'error',
		'consistent-return': 'off',
		'consistent-this': 'error',
		'curly': 'error',
		'default-case': 'error',
		'default-case-last': 'error',
		'default-param-last': 'error',
		'dot-location': 'off',
		'dot-notation': 'off',
		'eol-last': 'warn',
		'eqeqeq': 'error',
		'func-call-spacing': 'error',
		'func-name-matching': 'error',
		'func-names': 'off',
		'func-style': ['error', 'expression'],
		'function-call-argument-newline': 'off',
		'function-paren-newline': 'off',
		'generator-star-spacing': 'error',
		'grouped-accessor-pairs': 'error',
		'guard-for-in': 'error',
		'id-denylist': 'error',
		'id-length': 'off',
		'id-match': 'error',
		'implicit-arrow-linebreak': 'off',
		'indent': 'off',
		'init-declarations': 'off',
		'jsx-quotes': ['warn', 'prefer-single'],
		'key-spacing': 'error',
		'keyword-spacing': [
			'error',
			{
				after: true,
				before: true
			}
		],
		'line-comment-position': 'off',
		'linebreak-style': ['error', 'unix'],
		'lines-around-comment': 'warn',
		'lines-between-class-members': 'warn',
		'max-classes-per-file': 'off',
		'max-depth': 'off',
		'max-len': [
			'warn',
			{
				code: 120,
				ignoreComments: true,
				ignoreUrls: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true
			}
		],
		'max-lines': 'off',
		'max-lines-per-function': 'off',
		'max-nested-callbacks': 'error',
		'max-params': 'off',
		'max-statements': 'off',
		'max-statements-per-line': 'error',
		'multiline-comment-style': 'off',
		'multiline-ternary': 'off',
		'new-cap': 'off',
		'new-parens': 'error',
		'newline-per-chained-call': 'error',
		'no-alert': 'error',
		'no-array-constructor': 'error',
		'no-await-in-loop': 'off',
		'no-bitwise': 'off',
		'no-caller': 'error',
		'no-confusing-arrow': 'off',
		'no-console': 'off',
		'no-constructor-return': 'error',
		'no-continue': 'error',
		'no-div-regex': 'error',
		'no-duplicate-imports': 'error',
		'no-else-return': 'error',
		'no-empty-function': 'off',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-extra-parens': 'off',
		'no-floating-decimal': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-inline-comments': 'off',
		'no-invalid-this': 'off',
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-loss-of-precision': 'error',
		'no-magic-numbers': 'off',
		'no-mixed-operators': 'off',
		'no-multi-assign': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-multiple-empty-lines': 'error',
		'no-negated-condition': 'off',
		'no-nested-ternary': 'off',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'error',
		'no-plusplus': 'off',
		'no-promise-executor-return': 'error',
		'no-proto': 'error',
		'no-restricted-exports': 'error',
		'no-restricted-globals': 'error',
		'no-restricted-imports': 'error',
		'no-restricted-properties': 'error',
		'no-restricted-syntax': 'error',
		'no-return-assign': 'error',
		'no-return-await': 'off',
		'no-script-url': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-shadow': 'off',
		'no-tabs': 'off',
		'no-template-curly-in-string': 'error',
		'no-ternary': 'off',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'off',
		'no-underscore-dangle': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': 'error',
		'no-unreachable-loop': 'error',
		'no-unsafe-optional-chaining': 'error',
		'no-unused-expressions': 'error',
		'no-unused-vars': 'off',
		'no-use-before-define': 'error',
		'no-useless-backreference': 'error',
		'no-useless-call': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'off',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': 'error',
		'no-warning-comments': 'off',
		'no-whitespace-before-property': 'error',
		'nonblock-statement-body-position': 'error',
		'object-curly-newline': 'error',
		'object-curly-spacing': ['error', 'always'],
		'object-property-newline': 'off',
		'object-shorthand': 'error',
		'one-var': 'off',
		'one-var-declaration-per-line': 'error',
		'operator-assignment': 'error',
		'operator-linebreak': 'error',
		'padded-blocks': 'off',
		'padding-line-between-statements': 'error',
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'prefer-destructuring': 'off',
		'prefer-exponentiation-operator': 'error',
		'prefer-named-capture-group': 'off',
		'prefer-numeric-literals': 'error',
		'prefer-object-spread': 'off',
		'prefer-promise-reject-errors': 'off',
		'prefer-regex-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'quote-props': 'off',
		'quotes': ['warn', 'single'],
		'radix': 'off',
		'require-atomic-updates': 'error',
		'require-await': 'error',
		'require-unicode-regexp': 'off',
		'rest-spread-spacing': 'error',
		'semi': 'error',
		'semi-spacing': 'error',
		'semi-style': ['error', 'last'],
		'sort-keys': 'off',
		'sort-vars': 'off',
		'space-before-blocks': 'error',
		'space-before-function-paren': 'off',
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': 'error',
		'strict': 'off',
		'switch-colon-spacing': 'error',
		'symbol-description': 'error',
		'template-curly-spacing': 'error',
		'template-tag-spacing': 'error',
		'unicode-bom': ['error', 'never'],
		'vars-on-top': 'error',
		'wrap-iife': 'error',
		'wrap-regex': 'error',
		'yield-star-spacing': 'error',
		'yoda': 'error',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-explicit-any': 'off'
	}
};
