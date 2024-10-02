import Container from "@/components/Container";
import SignupInvite from "@/components/SignUpInvite";
import PageTemplate from "@/templates/PageTemplate";
import Image from "next/image";

const HowItWorks = () => {
	return (
		<PageTemplate
			title="How It Works"
			description="Have fun creating a fun message for this season with friends and
					family from anywhere in 3 easy steps!"
		>
			<Container className="space-y-8">
				<Image
					src="/how_it_works_hero.png"
					width={1180}
					height={365}
					alt="How it works Hero Banner"
					className="w-full rounded-xl"
				/>
				<section className="grid gap-6 grid-cols-3 py-8">
					<div className="flex flex-col gap-3">
						<h2 className="text-white">1. Create and Upload a Video</h2>
						<Image
							src="/how_it_works_upload.png"
							width={365}
							height={134}
							alt="How it works Step 1 Upload video"
							className="w-full rounded-xl"
						/>
						<p>Record or upload your festive video in just a few clicks.</p>
					</div>
					<div className="flex flex-col gap-3">
						<h2 className="text-white">2. Enter Details & Preview</h2>
						<Image
							src="/how_it_works_details.png"
							width={365}
							height={134}
							alt="How it works Step 2 Enter details"
							className="w-full rounded-xl"
						/>
						<p>
							Add your name and a spooky greeting to go along with your video.
						</p>
					</div>
					<div className="flex flex-col gap-3">
						<h2 className="text-white">3. Save, Generate, & Share</h2>
						<Image
							src="/how_it_works_share.png"
							width={365}
							height={134}
							alt="How it works Step 3 Share"
							className="w-full rounded-xl"
						/>
						<p>
							Instantly get a custom link and QR code to share with friends and
							family. Be creative!
						</p>
					</div>
				</section>
				<SignupInvite />
			</Container>
		</PageTemplate>
	);
};

export default HowItWorks;
