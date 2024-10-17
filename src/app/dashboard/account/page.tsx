import { Metadata } from "next";
import Account from "./Account";

export const metadata: Metadata = {
  title: "Account",
  description: "View and manage your account settings.",
};

const Page = () => <Account />;

export default Page;
