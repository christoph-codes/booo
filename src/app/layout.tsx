import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { luckiest, roboto } from "./fonts";
import "./globals.scss";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
	title: "Booo! 👻",
	description: "You've Been Booo'd! Check out by who!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${roboto.variable} ${luckiest.variable} bg-pattern bg-black bg-center`}
			>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
