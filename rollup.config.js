import ts from "@wessberg/rollup-plugin-ts"
import cleaner from "rollup-plugin-cleaner"

export default {
	input: "src/index.ts",
	output: {
		file: "dist/index.js",
		format: "cjs",
		sourcemap: true,
	},
	plugins: [cleaner({ targets: ["./dist/"] }), ts()],
}
