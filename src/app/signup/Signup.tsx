"use client";

import { Button } from "@/components/Button";
import Container from "@/components/Container";
import ErrorText from "@/components/ErrorText";
import HR from "@/components/HR";
import TextInput from "@/components/TextInput";
import { useAuth } from "@/context/AuthProvider";
import PageTemplate from "@/templates/PageTemplate";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Signup = () => {
  const { createAccount } = useAuth();
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");
    if (!fullName || !email || !password || !confirmPassword) {
      setError("Please fill out all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    createAccount(email, password, fullName)
      .then(() => {
        router.push("/dashboard");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <PageTemplate
      title="Create Account"
      description="Create your account below and get started on crafting your holiday greeting."
      noBottomPadding
    >
      <Container size="md">
        <form onSubmit={submit} className="flex flex-col gap-4">
          <TextInput
            label="Full Name"
            name="fullName"
            placeholder="Jane Doe"
            onChange={setFullName}
          />
          <TextInput
            label="Email"
            name="email"
            placeholder="jane_doe@gmail.com"
            type="email"
            onChange={setEmail}
          />
          <TextInput
            label="Password"
            name="password"
            placeholder="••••••••••••"
            type="password"
            onChange={setPassword}
          />
          <TextInput
            label="Confirm Password"
            name="confirmPassword"
            placeholder="••••••••••••"
            type="password"
            onChange={setConfirmPassword}
          />
          {error && <ErrorText>{error}</ErrorText>}
          <Button type="submit">Create Account</Button>
        </form>
        <HR />
        <div className="flex flex-col justify-center gap-3">
          <Button onClick={handleLogin} variant="ghost">
            Already have an account? Login
          </Button>
        </div>
      </Container>
    </PageTemplate>
  );
};

export default Signup;
