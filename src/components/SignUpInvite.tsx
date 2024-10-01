"use client";

import { useRouter } from "next/navigation";
import { Button } from "./Button";

const SignupInvite = () => {
	const router = useRouter();
	const handleSignup = () => {
		router.push("/signup");
	};
	return (
		<section className="py-16 bg-purple">
			<div className="container mx-auto text-center space-y-3">
				<h1 className="text-white">Sounds easy right?</h1>
				<p>Spookify Your Messages in 3 Easy Steps!</p>
				<Button onClick={handleSignup}>Create your booo!</Button>
			</div>
		</section>
	);
};

export default SignupInvite;
