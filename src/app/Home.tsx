"use client";

import {
	EmailShareButton,
	FacebookShareButton,
	TwitterShareButton,
} from "react-share";
import {
	BiLogoFacebookCircle,
	BiMailSend,
	BiLogoTwitter,
} from "react-icons/bi";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

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
		<div className="text-center space-y-6">
			<div>
				<h1 className="md:text-[48px] text-3xl text-white leading-snug">
					Create your Halloween message and Share it with a video!
				</h1>
				<p className="font-medium text-xl md:text-2xl">
					Create a personalized Booo! page that shows a video and a greeting
					this Halloween.
				</p>
			</div>
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
	);
};

export default Home;
