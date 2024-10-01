import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				purple: "#3D1AC6",
				purple_hover: "#281085",
				orange: "#FF5823",
				orange_hover: "#CB3506",
				gray: "#BFBFBF",
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
