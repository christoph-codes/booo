"use client";

import { Button } from "@/components/Button";
import Container from "@/components/Container";
import ErrorText from "@/components/ErrorText";
import HR from "@/components/HR";
import TextInput from "@/components/TextInput";
import { useAuth } from "@/context/AuthProvider";
import PageTemplate from "@/templates/PageTemplate";
import { useRouter } from "next/navigation";
import { FormEvent, MouseEvent, useState } from "react";

const Account = () => {
  const router = useRouter();
  const { user, resetPassword } = useAuth();
  const [email, setEmail] = useState(user?.email ?? "");
  const [error, setError] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setError("You must provide an email address.");
      return;
    }
    resetPassword(email)
      .then(() => {
        router.push("/dashboard");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/dashboard/account");
  };
  return (
    <PageTemplate
      title="Reset Your Password"
      description="Need to reset your password? No problem! Enter your email below and we'll send you a link to create a new one."
    >
      <Container className="flex flex-col justify-center" size="md">
        <form onSubmit={submit} className="flex flex-col gap-4">
          <TextInput
            label="Email"
            name="email"
            placeholder="john_doe@gmail.com"
            type="email"
            onChange={setEmail}
          />
          {error && <ErrorText>{error}</ErrorText>}
          <Button type="submit">Reset Your Password</Button>
          <Button variant="ghost" onClick={handleCancel}>
            Cancel
          </Button>
        </form>
      </Container>
    </PageTemplate>
  );
};

export default Account;
