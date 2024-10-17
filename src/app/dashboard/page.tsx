import { Metadata } from "next";
import Dashboard from "./Dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Welcome to your dashboard",
};

const Page = () => <Dashboard />;

export default Page;
