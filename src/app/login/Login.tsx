"use client";

import { Button } from "@/components/Button";
import Container from "@/components/Container";
import HR from "@/components/HR";
import TextInput from "@/components/TextInput";
import PageTemplate from "@/templates/PageTemplate";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		console.log("Email:", email);
		console.log("Password:", password);
		// Implement login logic here
	};
	const handleForgotPassword = () => {
		router.push("/forgot-password");
	};
	const handleSignup = () => {
		router.push("/signup");
	};
	return (
		<PageTemplate
			title="Login"
			description="Enter your credentials to access your account and manage your holiday messages."
		>
			<Container size="md">
				<form onSubmit={login} className="flex flex-col gap-4">
					<TextInput
						label="Email"
						name="email"
						placeholder="john_doe@gmail.com"
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
					<Button type="submit">Login</Button>
				</form>
				<HR />
				<div className="flex flex-col justify-center gap-3">
					<Button onClick={handleForgotPassword} variant="ghost">
						Forgot Password?
					</Button>
					<Button onClick={handleSignup} variant="ghost">
						Haven't joined the fun yet. Sign up now!
					</Button>
				</div>
			</Container>
		</PageTemplate>
	);
};

export default Login;
