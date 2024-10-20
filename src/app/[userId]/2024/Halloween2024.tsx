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
										"cursor-pointer"
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
	);
};

export default Holiday2024;
