import { Luckiest_Guy, Roboto } from "next/font/google";

export const luckiest = Luckiest_Guy({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-luckiest",
});
export const roboto = Roboto({
	weight: ["400", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto",
});
