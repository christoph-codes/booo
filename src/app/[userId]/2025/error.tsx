"use client";

import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

const NotFound = () => {
	const router = useRouter();
	const handleCreateButton = () => {
		router.push("/create");
	};
	return (
		<div className="h-[80vh] flex flex-col justify-center items-center gap-6 text-center relative">
			{/* Festive autumn background for error page */}
			<div className="absolute inset-0 bg-orange/15" />

			<div className="relative z-10">
				<h1 className="text-orange text-6xl mb-4">🎃 Oops! 🎃</h1>
				<h2 className="text-gray_black text-4xl mb-4">
					No Halloween Fun Found Here!
				</h2>
				<p className="text-gray_dark mb-8 max-w-md">{`This Halloween celebration seems to be missing! Maybe it hasn't been created yet, or it's hiding behind a jack-o'-lantern...`}</p>

				{/* Fun Halloween emojis for error page */}
				<div className="flex justify-center gap-4 mb-8">
					<span className="text-4xl animate-bounce">🎃</span>
					<span className="text-4xl animate-bounce delay-150">🍂</span>
					<span className="text-4xl animate-bounce delay-300">🍁</span>
					<span className="text-4xl animate-bounce delay-500">🌽</span>
				</div>

				<Button
					onClick={handleCreateButton}
					className="bg-orange hover:bg-orange_hover text-white font-bold shadow-lg"
				>
					🎃 Create Your Own 2025 Halloween Fun! 🎃
				</Button>
			</div>
		</div>
	);
};

export default NotFound;
