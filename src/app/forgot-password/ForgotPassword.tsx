"use client";

import { Button } from "@/components/Button";
import Container from "@/components/Container";
import HR from "@/components/HR";
import TextInput from "@/components/TextInput";
import { useAuth } from "@/context/AuthProvider";
import PageTemplate from "@/templates/PageTemplate";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ForgotPassword = () => {
	const router = useRouter();
	const { resetPassword } = useAuth();
	const [email, setEmail] = useState("");

	const submit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		resetPassword(email).then(() => {
			alert("Password reset email sent!");
			router.push("/login");
		});
	};
	const handleLogin = () => {
		router.push("/login");
	};
	const handleSignup = () => {
		router.push("/signup");
	};
	return (
		<PageTemplate
			title="Reset Your Password"
			description="Need to reset your password? No problem! Enter your email below and we'll send you a link to create a new one."
			noBottomPadding
		>
			<Container size="md">
				<form onSubmit={submit} className="flex flex-col gap-4">
					<TextInput
						label="Email"
						name="email"
						placeholder="john_doe@gmail.com"
						type="email"
						onChange={setEmail}
					/>
					<Button type="submit">Recover Password</Button>
				</form>
				<HR />
				<div className="flex flex-col justify-center gap-3">
					<Button onClick={handleLogin} variant="ghost">
						Remember Your Password? Login
					</Button>
					<Button onClick={handleSignup} variant="ghost">
						{`Haven't joined the fun yet. Sign up now!`}
					</Button>
				</div>
			</Container>
		</PageTemplate>
	);
};

export default ForgotPassword;
