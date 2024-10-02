"use client";

import { useRouter } from "next/navigation";
import { Button } from "./Button";

const SignupInvite = () => {
	const router = useRouter();
	const handleSignup = () => {
		router.push("/signup");
	};
	return (
		<section className="py-16 bg-purple rounded-xl">
			<div className="container mx-auto text-center">
				<h1 className="text-white">Sounds easy right?</h1>
				<p className="mb-4">Customize Your Holiday in 3 Easy Steps!</p>
				<Button onClick={handleSignup}>Create your booo!</Button>
			</div>
		</section>
	);
};

export default SignupInvite;
