"use client";

import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import PageTemplate from "@/templates/PageTemplate";
import Container from "@/components/Container";
import SignupInvite from "@/components/SignUpInvite";
import TextImage from "@/components/TextImage";

const Home = () => {
	const router = useRouter();
	const video = "/happy_halloween_2023.MOV";

	const handleLogin = () => {
		router.push("/login");
	};
	const handleCreateBooo = () => {
		router.push("/create");
	};
	return (
		<PageTemplate
			title="Surprise friends and family with a personalized holiday page!"
			description="Create a personalized Booo page that shows a video and a greeting
						this holiday season."
			noBottomPadding
		>
			<Container className="flex flex-col items-center">
				<section className="text-center space-y-6">
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
					<div className="flex justify-center items-center gap-x-4">
						<Button
							className="w-full"
							variant="secondary"
							onClick={handleLogin}
						>
							Login
						</Button>
						<Button className="w-full" onClick={handleCreateBooo}>
							Create Booo!
						</Button>
					</div>
				</section>
				<section className="space-y-8">
					<article className={`mx-auto text-center max-w-3xl pt-32 pb-4`}>
						<h1 className="md:text-[48px] text-3xl text-white leading-none text-center mb-1">
							How It Works
						</h1>
						<p className="text-xl">
							Have fun creating a fun message for this season with friends and
							family from anywhere in 3 easy steps!
						</p>
					</article>
					<article className="grid md:gap-6 gap-12 md:grid-cols-3 grid-cols-1 py-8">
						<TextImage
							title="1. Create and Upload a Video"
							image="/how_it_works_upload.png"
							imageAlt="How it works Step 1 Upload video"
							description="Record or upload your festive video in just a few clicks."
						/>
						<TextImage
							title="2. Enter Details & Preview"
							image="/how_it_works_details.png"
							imageAlt="How it works Step 2 Enter details"
							description="Add your name and a spooky greeting to go along with your video."
						/>
						<TextImage
							title="3. Save, Generate, & Share"
							image="/how_it_works_share.png"
							imageAlt="How it works Step 3 Share"
							description="Instantly get a custom link and QR code to share with friends and family. Be creative!"
						/>
					</article>
					<SignupInvite />
				</section>
			</Container>
		</PageTemplate>
	);
};

export default Home;
