import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [
					[
						"@locator/babel-jsx/dist",
						{
							env: "development",
						},
					],
				],
			},
		}),
	],
	resolve: {
		alias: [
			{ find: "@", replacement: path.resolve(__dirname, "src") },
			{
				find: "@components",
				replacement: path.resolve(__dirname, "src/components"),
			},
			{ find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
			{ find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
			{ find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
			{ find: "@types", replacement: path.resolve(__dirname, "src/types") },
			{
				find: "@pages",
				replacement: path.resolve(__dirname, "src/pages"),
			},
		],
	},
	css: {
		preprocessorOptions: {
			sass: {
				additionalData: `@import "@styles/variables.scss";`,
			},
		},
	},
});
