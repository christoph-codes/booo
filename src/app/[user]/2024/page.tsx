"use client";

import Image from "next/image";
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
import BouncingGhosts from "@/components/BouncingGhosts";

const Home = () => {
	const shareable = false;
	const name = "Jax & Kennedy";
	const image = "";
	const video = "/happy_halloween_2023.MOV";

	return (
		<div className="text-center">
			<div className="max-w-3xl mx-auto">
				<h1 className="md:text-huge/[120px] text-[110px]/[100px] text-orange mb-8">
					Booo!
				</h1>

				{image && (
					<Image
						width="800"
						height="500"
						className="inline-block rounded-lg w-full"
						src={image}
						alt={`${name}'s Booo picture`}
					/>
				)}
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
				<BouncingGhosts />
				<p className="text-3xl md:text-5xl mt-8">
					Happy Halloween from <br />
					<span className="text-purple">{name}</span>
				</p>
				{shareable && typeof window !== "undefined" && (
					<>
						<p className="text-xl mb-4">Share:</p>
						<div className="flex justify-center items-center gap-x-4">
							<FacebookShareButton
								title="Check out who Boo'd me!"
								hashtag="#Booo #HappyHalloween"
								url={window.location.href}
							>
								<BiLogoFacebookCircle className="text-purple" size={64} />
							</FacebookShareButton>
							<TwitterShareButton
								title="Check out who Boo'd me!"
								url={window.location.href}
								hashtags={["Booo", "HappyHalloween"]}
							>
								<BiLogoTwitter className="text-purple" size={64} />
							</TwitterShareButton>
							<EmailShareButton
								subject="Check out who Boo'd me!"
								url={window.location.href}
							>
								<BiMailSend className="text-purple" size={64} />
							</EmailShareButton>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Home;
