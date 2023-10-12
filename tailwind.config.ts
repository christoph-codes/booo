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
				orange: "#FF5823",
			},
			fontSize: {
				huge: "180px",
			},
			backgroundImage: {
				pattern: "url('/bg.png')",
			},
		},
	},
	plugins: [],
};
export default config;
