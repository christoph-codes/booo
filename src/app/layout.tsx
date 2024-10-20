"use client";
import Footer from "@/components/Footer";
import { luckiest, roboto } from "./fonts";
import "./globals.scss";
import Nav from "@/components/Nav";
import { SidenavProvider } from "@/context/SidenavProvider";
import AuthProvider from "@/context/AuthProvider";

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
				<AuthProvider>
					<SidenavProvider>
						<Nav />
						{children}
						<Footer />
					</SidenavProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
