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
	BiSolidHeart,
} from "react-icons/bi";

const Home = () => {
	const shareable = false;
	const name = "Jax & Kennedy";
	const image = "";
	const video = "/happy_halloween_2023.MOV";

	return (
		<div className="text-center">
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
			<div className="flex justify-center gap-x-4">
				<Ghost className="text-purple animate-[bounce_1s_infinite_0ms]" />
				<Ghost className="text-orange motion-safe:animate-[bounce_1s_infinite_500ms]" />
				<Ghost className="text-purple animate-[bounce_1s_infinite_50ms]" />
				<Ghost className="text-orange motion-safe:animate-[bounce_1s_infinite_650ms]" />
				<Ghost className="text-purple animate-[bounce_1s_infinite_150ms]" />
				<Ghost className="text-orange motion-safe:animate-[bounce_1s_infinite_800ms]" />
			</div>
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
				</>
			)}
			<p className="text-xl mt-8">
				Page created with{" "}
				<BiSolidHeart className="inline text-orange" /> love by <br />
				<a
					className="hover:text-purple text-orange transition ease-in-out duration-300"
					href="https://thekirkconcept.com"
					target="_blank"
				>
					The Kirk Concept
				</a>
			</p>
		</div>
	);
};

export default Home;
