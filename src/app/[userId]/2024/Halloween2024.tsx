"use client";
import BouncingGhosts from "@/components/BouncingGhosts";
import {
	baseButtonClasses,
	Button,
	buttonSizes,
	buttonVariants,
} from "@/components/Button";
import Modal from "@/components/Modal";
import Video from "@/components/Video";
import useModal from "@/hooks/useModal";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent } from "react";
import {
	BiLogoFacebookCircle,
	BiLogoTwitter,
	BiMailSend,
} from "react-icons/bi";
// import { FacebookShareButton, TwitterShareButton } from "react-share";
import { twMerge } from "tailwind-merge";

export type BoooData = {
	userId: string;
	qrCodeImage?: string;
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
	const saveQRCodeModal = useModal();
	const boooURL = `${process.env.NEXT_PUBLIC_ORIGIN}/${booo.userId}/${booo.year}`;
	const handleShareButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		saveQRCodeModal.open();
	};
	const handlePrintQRCode = () => {
		const printWindow = window.open(booo.qrCodeImage, "_blank");
		printWindow?.print();
	};
	return (
		<>
			<div className="text-center min-h-[70vh] flex flex-col items-center justify-center">
				<div className="max-w-3xl mx-auto mt-16">
					<h1 className="text-white mb-1">
						{booo.message} from{" "}
						{booo.name ? (
							<>
								<br />
								<span className="text-orange">
									{booo.name}!
								</span>
							</>
						) : (
							"Booo!"
						)}
					</h1>
					{booo.video && <Video autoPlay url={booo.video} />}
					<BouncingGhosts />
					<Button
						className="mt-8 text-3xl -pb-2"
						size="lg"
						variant="secondary"
						onClick={handleShareButtonClick}
					>
						Share
					</Button>
				</div>
			</div>
			<Modal
				title="Share your Booo!"
				description="Download the QR code to share your Booo with friends and family or share directly to social media!"
				isOpen={saveQRCodeModal.isOpen}
				onClose={saveQRCodeModal.close}
				cancel={false}
				success={false}
			>
				<div className="flex flex-col items-center mt-6 gap-y-4">
					<p>Share to social media</p>
					<div className="flex justify-center items-center gap-x-8 pb-8 border-b border-b-gray_dark w-full">
						{/* <FacebookShareButton
							hashtag="Check out who Boo'd me! #Booo #HappyHalloween"
							url={boooURL}
						>
							<BiLogoFacebookCircle
								className="text-purple"
								size={48}
							/>
						</FacebookShareButton>
						<TwitterShareButton
							title="Check out who Boo'd me!"
							url={boooURL}
							hashtags={["Booo", "HappyHalloween"]}
						>
							<BiLogoTwitter className="text-purple" size={48} />
						</TwitterShareButton> */}
						<Link
							href={`mailto:cjones@thekirkconcept.com?subject=Check out who Boo'd you!&body=You just got Boo'd by ${booo.name}! Check it out at ${boooURL}`}
							className={twMerge(
								buttonVariants["ghost"],
								"cursor-pointer",
							)}
						>
							<BiMailSend className="text-purple" size={48} />
						</Link>
					</div>
					{booo.qrCodeImage && (
						<>
							<p>or save the QR code</p>
							<Image
								src={booo.qrCodeImage}
								width={200}
								height={200}
								alt="2024 Booo Page QR Code"
							/>
							<div className="flex gap-4">
								<Link
									href={booo.qrCodeImage}
									download="2024_Booo_QR_Code.png"
									target="_blank"
									className={twMerge(
										baseButtonClasses,
										buttonSizes["lg"],
										buttonVariants["secondary"],
										"cursor-pointer",
									)}
								>
									Download
								</Link>
								<Button
									size="lg"
									variant="secondary"
									onClick={handlePrintQRCode}
								>
									Print
								</Button>
							</div>
						</>
					)}
				</div>
			</Modal>
		</>
	);
};

export default Holiday2024;
