import { Metadata } from "next";
import Dashboard from "./Dashboard";

export const metadata: Metadata = {
	title: "Dashboard",
	description: "Welcome to your dashboard",
};

export default async function Page() {
	return <Dashboard />;
}
