import BouncingGhosts from "@/components/BouncingGhosts";
import Video from "@/components/Video";
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

export type BoooData = {
	userId: string;
	video?: string;
	name?: string;
	message?: string;
	shareable: boolean;
	year?: string;
};

export type Halloween2024Props = {
	booo: BoooData;
};

const Holiday2024 = ({ booo }: Halloween2024Props) => {
	return (
		<div className="text-center min-h-[70vh] flex flex-col items-center justify-center">
			<div className="max-w-3xl mx-auto">
				<h1 className="text-white mb-1">
					{booo.message} from{" "}
					{booo.name ? (
						<>
							<br />
							<span className="text-orange">{booo.name}!</span>
						</>
					) : (
						"Booo!"
					)}
				</h1>
				{booo.video && <Video autoPlay url={booo.video} />}
				<BouncingGhosts />
				{booo.shareable && typeof window !== "undefined" && (
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
