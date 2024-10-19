"use client";

import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

const NotFound = () => {
	const router = useRouter();
	const handleCreateButton = () => {
		router.push("/create");
	};
	return (
		<div className="h-[80vh] flex flex-col justify-center items-center gap-6">
			<h1>No Booo Found Here!</h1>
			<p>Oops! It seems like you've taken a wrong turn in the pumpkin patch!</p>
			<Button onClick={handleCreateButton}>Create Your Own!</Button>
		</div>
	);
};

export default NotFound;
