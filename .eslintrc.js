module.exports = {
	root: true,
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"prettier",
		"prettier/@typescript-eslint",
	],
	plugins: ["simple-import-sort"],
	rules: {
		"prettier/prettier": "warn",
		"simple-import-sort/sort": "warn",
		"@typescript-eslint/camelcase": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-member-accessibility": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-object-literal-type-assertion": "off", // See https://github.com/bradzacher/eslint-plugin-typescript/issues/286
		"@typescript-eslint/no-parameter-properties": "off",
		"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
		"@typescript-eslint/no-use-before-define": "off",
	},
}
