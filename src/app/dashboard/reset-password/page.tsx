import { Metadata } from "next";
import ResetPassword from "./ResetPassword";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Reset your account password.",
};

const Page = () => <ResetPassword />;

export default Page;
