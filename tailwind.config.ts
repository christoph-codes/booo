import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				black: "#000000",
				purple: "#3D1AC6",
				purple_hover: "#281085",
				purple_dark: "#04040e",
				orange: "#FF5823",
				orange_hover: "#CB3506",
				gray: "#BFBFBF",
				gray_dark: "#383838",
				gray_medium: "#929292",
				white: "#FFFFFF",
				white_hover: "#F2F2F2",
			},
			fontSize: {
				huge: "180px",
			},
			backgroundImage: {
				pattern: "url('/bg.png')",
			},
			fontFamily: {
				sans: ["var(--font-luckiest)"],
				body: ["var(--font-roboto)"],
			},
		},
	},
	plugins: [],
};
export default config;
