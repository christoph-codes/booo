"use client";

import { Button } from "@/components/Button";
import Container from "@/components/Container";
import HR from "@/components/HR";
import { useAuth } from "@/context/AuthProvider";
import PageTemplate from "@/templates/PageTemplate";
import { useRouter } from "next/navigation";

const Account = () => {
  const router = useRouter();
  const { user, logout } = useAuth();
  const handleResetPassword = () => {
    router.push("/dashboard/reset-password");
  };
  return (
    <PageTemplate
      title="Account"
      description="The place to manage your account settings."
    >
      <Container className="flex flex-col justify-center" size="md">
        <div className="flex flex-col gap-4">
          <h3>Account Details</h3>
          <p>
            Full Name:{" "}
            <span className="font-bold text-white">{user?.displayName}</span>
          </p>
          <p>
            Email: <span className="font-bold text-white">{user?.email}</span>
          </p>
          <div className="flex items-center justify-between">
            <p>
              Password:{" "}
              <span className="font-bold text-white">••••••••••••••••</span>
            </p>
            <Button variant="secondary" size="md" onClick={handleResetPassword}>
              Reset Password
            </Button>
          </div>
        </div>
        <HR />

        <Button onClick={logout} variant="error_subtle">
          Logout
        </Button>
        <p className="text-sm pt-3 text-center text-gray_dark">
          Account Created:{" "}
          <span className="font-bold">
            {new Date(user?.metadata.creationTime ?? "").toLocaleDateString()}
          </span>
        </p>
      </Container>
    </PageTemplate>
  );
};

export default Account;
