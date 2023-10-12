"use client";

import Ghost from "@/components/Ghost";
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

const Home = () => {
	const name = "Jax & Kennedy";
	const image = "/booImage.jpg";

	return (
		<div className="text-center">
			<h1 className="md:text-huge/[120px] text-[110px]/[100px] text-orange mb-8">
				Booo!
			</h1>
			<p className="text-3xl md:text-5xl mb-4">
				You officially got{" "}
				<span className="text-orange">{`Boo'd`}</span> by
				<br />
				<span className="text-purple">{name}</span>
			</p>
			{image && (
				<Image
					width="800"
					height="500"
					className="inline-block rounded-lg w-full"
					src={image}
					alt={`${name}'s Booo picture`}
				/>
			)}
			<div className="flex justify-center gap-x-4">
				<Ghost className="text-purple animate-[bounce_1s_infinite_0ms]" />
				<Ghost className="text-orange motion-safe:animate-[bounce_1s_infinite_500ms]" />
				<Ghost className="text-purple animate-[bounce_1s_infinite_50ms]" />
				<Ghost className="text-orange motion-safe:animate-[bounce_1s_infinite_650ms]" />
				<Ghost className="text-purple animate-[bounce_1s_infinite_150ms]" />
				<Ghost className="text-orange motion-safe:animate-[bounce_1s_infinite_800ms]" />
			</div>
			<p className="text-4xl md:text-7xl my-6 md:mt-8">
				Happy Halloween!
			</p>
			<p className="text-xl mb-4">Share:</p>
			{typeof window !== "undefined" && (
				<div className="flex justify-center items-center gap-x-4">
					<FacebookShareButton
						title="Check out who Boo'd me!"
						hashtag="#Booo #HappyHalloween"
						url={window.location.href}
					>
						<BiLogoFacebookCircle
							className="text-purple"
							size={64}
						/>
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
			)}
		</div>
	);
};

export default Home;
