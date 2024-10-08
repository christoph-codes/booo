import BouncingGhosts from "@/components/BouncingGhosts";
import Image from "next/image";
import {
	BiLogoFacebookCircle,
	BiLogoTwitter,
	BiMailSend,
} from "react-icons/bi";
import {
	EmailShareButton,
	FacebookShareButton,
	TwitterShareButton,
} from "react-share";

export type User = {
	id: string;
	image?: string;
	video?: string;
	name?: string;
	message?: string;
	shareable: boolean;
};

const Holiday2024 = ({ user }: { user: User }) => {
	return (
		<div className="text-center min-h-[70vh] flex flex-col items-center justify-center">
			<div className="max-w-3xl mx-auto">
				<h1 className="text-white mb-1">
					{user.message} from{" "}
					{user.name ? (
						<>
							<br />
							<span className="text-orange">{user.name}!</span>
						</>
					) : (
						"Booo!"
					)}
				</h1>

				{user.image && (
					<Image
						width="800"
						height="500"
						className="inline-block rounded-lg w-full"
						src={user.image}
						alt={`${user.name}'s Booo picture`}
					/>
				)}
				{user.video && (
					<video
						className="inline"
						width="640"
						height="480"
						controls
						controlsList="nodownload"
						autoPlay
					>
						<source src={user.video} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				)}
				<BouncingGhosts />
				{user.shareable && typeof window !== "undefined" && (
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

export default Holiday2024;
