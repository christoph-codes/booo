import "./globals.scss";
import type { Metadata } from "next";
import { Luckiest_Guy } from "next/font/google";

const font = Luckiest_Guy({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Booo",
	description: "Your Custom Boo Page!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>{children}</body>
		</html>
	);
}
