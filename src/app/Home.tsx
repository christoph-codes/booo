"use client";

import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import PageTemplate from "@/templates/PageTemplate";
import Container from "@/components/Container";

const Home = () => {
	const router = useRouter();
	const shareable = false;
	const name = "Jax & Kennedy";
	const image = "";
	const video = "/happy_halloween_2023.MOV";

	const handleHowItWorks = () => {
		router.push("/how-it-works");
	};
	const handleCreateBooo = () => {
		router.push("/create");
	};
	return (
		<PageTemplate
			title="Surprise friends and family with a personalized holiday page!"
			description="Create a personalized Booo page that shows a video and a greeting
						this holiday season."
		>
			<Container>
				<div className="text-center space-y-6">
					<div className="flex justify-center items-center gap-x-4">
						<Button variant="secondary" onClick={handleHowItWorks}>
							How it Works
						</Button>
						<Button onClick={handleCreateBooo}>Create Booo!</Button>
					</div>
					{video && (
						<video
							className="inline"
							width="640"
							height="480"
							controls
							controlsList="nodownload"
							autoPlay
						>
							<source src={video} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					)}
				</div>
			</Container>
		</PageTemplate>
	);
};

export default Home;
