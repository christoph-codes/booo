"use client";
import FloatingPumpkins from "@/components/FloatingPumpkins";
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

export type Halloween2025Props = {
	booo: BoooData;
};

const Halloween2025 = ({ booo }: Halloween2025Props) => {
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
			{/* Custom styles for 2025 animations */}
			<style jsx global>{`
				@keyframes float {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg);
					}
					50% {
						transform: translateY(-15px) rotate(5deg);
					}
				}
			`}</style>
			<div className="relative text-center min-h-[70vh] flex flex-col items-center justify-center">
				<div className="max-w-3xl mx-auto mt-16 relative z-10">
					{/* Cheerful title */}
					<h1 className="text-white mb-1 relative font-bold">
						{booo.message} from{" "}
						{booo.name ? (
							<>
								<br />
								<span className="text-orange text-6xl">{booo.name}!</span>
							</>
						) : (
							"your Halloween friend!"
						)}
					</h1>

					{/* Video with festive frame */}
					{booo.video && (
						<div className="relative border-4 border-orange rounded-lg overflow-hidden shadow-lg shadow-orange/30">
							<Video autoPlay url={booo.video} />
						</div>
					)}

					{/* Floating pumpkins - festive and fun */}
					<FloatingPumpkins />

					{/* Fun Halloween share button */}
					<Button
						className="mt-8 text-3xl -pb-2"
						size="lg"
						variant="tertiary"
						onClick={handleShareButtonClick}
					>
						🎃 Share the Fun! 🎃
					</Button>
				</div>
			</div>

			{/* Festive Halloween modal */}
			<Modal
				title="🎃 Share your 2025 Halloween Fun! 🎃"
				description="Spread the Halloween 2025 joy! Download the QR code or share directly to celebrate with your friends and family!"
				isOpen={saveQRCodeModal.isOpen}
				onClose={saveQRCodeModal.close}
				cancel={false}
				success={false}
			>
				<div className="flex flex-col items-center mt-6 gap-y-4">
					<p className="text-orange font-bold">
						🍂 Spread the Halloween cheer! 🍂
					</p>
					<div className="flex justify-center items-center gap-x-8 pb-8 border-b border-b-orange/30 w-full">
						<Link
							href={`mailto:friend@halloween.com?subject=Happy Halloween 2025 from ${booo.name}!&body=Hey! ${booo.name} sent you a fun Halloween 2025 surprise! Check it out at ${boooURL} - Happy Halloween! 🎃`}
							className={twMerge(
								buttonVariants["ghost"],
								"cursor-pointer hover:text-orange transition-colors"
							)}
						>
							<BiMailSend className="text-orange" size={48} />
						</Link>
					</div>

					{booo.qrCodeImage && (
						<>
							<p className="text-orange font-bold">
								🍁 or save the festive QR code 🍁
							</p>
							<div className="relative">
								{/* Simple border around QR code */}
								<div className="p-4 bg-orange/20 rounded-lg">
									<Image
										src={booo.qrCodeImage}
										width={200}
										height={200}
										alt="2025 Halloween Fun QR Code"
										className="rounded-lg"
									/>
								</div>
							</div>
							<div className="flex gap-4">
								<Link
									href={booo.qrCodeImage}
									download="2025_Halloween_Fun_QR_Code.png"
									target="_blank"
									className={twMerge(
										baseButtonClasses,
										buttonSizes["lg"],
										buttonVariants["secondary"],
										"cursor-pointer bg-orange hover:bg-orange_hover"
									)}
								>
									🎃 Download 🎃
								</Link>
								<Button
									size="lg"
									variant="secondary"
									onClick={handlePrintQRCode}
									className="bg-orange hover:bg-orange_hover"
								>
									🍂 Print 🍂
								</Button>
							</div>
						</>
					)}
				</div>
			</Modal>
		</>
	);
};

export default Halloween2025;
