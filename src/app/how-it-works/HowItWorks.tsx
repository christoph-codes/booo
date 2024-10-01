import SignupInvite from "@/components/SignUpInvite";
import { Sign } from "crypto";
import Image from "next/image";

const HowItWorks = () => {
	return (
		<div className="container mx-auto space-y-4">
			<div className="">
				<h1 className="md:text-[48px] text-3xl text-white leading-snug text-center">
					How It Works
				</h1>
				<p>
					Have fun creating a fun message for this season with friends and
					family from anywhere in 3 easy steps!
				</p>
			</div>
			<Image
				src="/how_it_works_hero.png"
				width={1180}
				height={365}
				alt="How it works Hero Banner"
			/>
			<section className="grid gap-6 grid-cols-3 py-8">
				<div className="flex flex-col gap-3">
					<h2 className="text-white">1. Upload a video</h2>
					<Image
						src="/how_it_works_upload.png"
						width={365}
						height={134}
						alt="How it works Step 1"
					/>
					<p>Record or upload your festive video in just a few clicks.</p>
				</div>
				<div className="flex flex-col gap-3">
					<h2 className="text-white">2. Enter Details & Preview</h2>
					<Image
						src="/how_it_works_details.png"
						width={365}
						height={134}
						alt="How it works Step 2"
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
						alt="How it works Step 3"
					/>
					<p>
						Instantly get a custom link and QR code to share with friends and
						family. Be creative!
					</p>
				</div>
			</section>
			<SignupInvite />
		</div>
	);
};

export default HowItWorks;
