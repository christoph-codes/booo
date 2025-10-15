"use client";

import {
	baseButtonClasses,
	Button,
	buttonSizes,
	buttonVariants,
} from "@/components/Button";
import Container from "@/components/Container";
import ErrorText from "@/components/ErrorText";
import FileUpload from "@/components/FileUpload";
import HR from "@/components/HR";
import Modal from "@/components/Modal";
import Tag from "@/components/Tag";
import TextInput from "@/components/TextInput";
import Video from "@/components/Video";
import FloatingPumpkins from "@/components/FloatingPumpkins";
import BouncingGhosts from "@/components/BouncingGhosts";
import Loading from "@/components/Loading";
import { useAuth } from "@/context/AuthProvider";
import useModal from "@/hooks/useModal";
import PageTemplate from "@/templates/PageTemplate";
import { db } from "@/utils/firebase";
import QRCode from "qrcode";
import { uploadQRCode, uploadVideo } from "@/utils/storage";
import {
	doc,
	updateDoc,
	collection,
	query,
	where,
	getDocs,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export type BoooData = {
	id?: string;
	userId: string;
	qrCodeImage?: string;
	video?: string;
	name?: string;
	message?: string;
	shareable: boolean;
	year?: string;
};

export type EditBoooProps = {
	userId: string;
	year: string;
};

const EditBooo = ({ userId, year }: EditBoooProps) => {
	const router = useRouter();
	const { user } = useAuth();
	const qrCodeModal = useModal();
	const [boooData, setBoooData] = useState<BoooData | null>(null);
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [video, setVideo] = useState<File>();
	const [currentVideoUrl, setCurrentVideoUrl] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [saving, setSaving] = useState(false);
	const [copySuccess, setCopySuccess] = useState(false);

	const finalMessage = name && message && `${message} from ${name}!`;
	const boooURL = `${process.env.NEXT_PUBLIC_ORIGIN}/${userId}/${year}`;

	const handleCopyLink = async () => {
		try {
			await navigator.clipboard.writeText(boooURL);
			setCopySuccess(true);
			setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	};

	// Load existing Booo data
	useEffect(() => {
		const loadBoooData = async () => {
			if (!userId || !year) return;

			try {
				const collectionRef = collection(db, "booos");
				const q = query(
					collectionRef,
					where("userId", "==", userId),
					where("year", "==", year)
				);

				const querySnapshot = await getDocs(q);
				if (!querySnapshot.empty) {
					const doc = querySnapshot.docs[0];
					const data = { id: doc.id, ...doc.data() } as BoooData;
					setBoooData(data);
					setName(data.name || "");
					setMessage(data.message || "");
					setCurrentVideoUrl(data.video || "");
				}
			} catch (error) {
				console.error("Error loading Booo data:", error);
				setError("Failed to load Booo data");
			} finally {
				setLoading(false);
			}
		};

		loadBoooData();
	}, [userId, year]);

	// Check if user owns this Booo
	useEffect(() => {
		if (!loading && (!user || user.uid !== userId)) {
			router.push("/login");
		}
	}, [user, userId, loading, router]);

	const handlePrintQRCode = () => {
		if (boooData?.qrCodeImage) {
			const printWindow = window.open(boooData.qrCodeImage, "_blank");
			printWindow?.print();
		}
	};

	const submit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		if (!user || !boooData?.id) {
			setError("Authentication error");
			return;
		}

		if (!name || !message) {
			setError("Please fill out all fields");
			return;
		}

		setSaving(true);
		setError(null);

		try {
			let videoUrl = currentVideoUrl;

			// Upload new video if one was selected
			if (video) {
				const newVideoUrl = await uploadVideo(video, year, user.uid);
				if (newVideoUrl) {
					videoUrl = newVideoUrl;
				}
			}

			// Generate new QR code if needed
			let qrCodeImage = boooData.qrCodeImage;
			if (!qrCodeImage) {
				const qrDataUrl = await QRCode.toDataURL(
					`${process.env.NEXT_PUBLIC_ORIGIN}/${userId}/${year}`,
					{
						color: { dark: "#000000", light: "#ffffff" },
						width: 600,
						margin: 2,
					}
				);
				qrCodeImage = await uploadQRCode(qrDataUrl, year, user.uid);
			}

			// Update the document
			const docRef = doc(db, "booos", boooData.id);
			await updateDoc(docRef, {
				name,
				message,
				video: videoUrl,
				qrCodeImage,
				shareable: true,
			});

			router.push(`/${userId}/${year}`);
		} catch (error) {
			console.error("Error updating Booo:", error);
			setError("Failed to update Booo");
		} finally {
			setSaving(false);
		}
	};

	if (loading) {
		return <Loading />;
	}

	if (!boooData) {
		return (
			<PageTemplate
				title="Booo Not Found"
				description="This Booo doesn't exist or you don't have permission to edit it."
			>
				<Container size="md">
					<div className="text-center">
						<h2 className="text-2xl mb-4">Booo Not Found</h2>
						<p className="mb-4">
							This Booo doesn't exist or you don't have permission to edit it.
						</p>
						<Button onClick={() => router.push("/create")}>
							Create New Booo
						</Button>
					</div>
				</Container>
			</PageTemplate>
		);
	}

	const PreviewComponent = year === "2025" ? FloatingPumpkins : BouncingGhosts;

	return (
		<>
			<PageTemplate
				title={`Edit Your ${year} Booo!`}
				description="Update your fun moment and manage your QR code!"
				noBottomPadding
			>
				<Container size="md">
					<div className="mb-6 p-4 bg-orange/10 rounded-lg">
						<div className="flex justify-between items-center">
							<div>
								<h3 className="font-bold text-lg">Your QR Code</h3>
								<p className="text-sm text-gray">
									Share this QR code so people can find your Booo!
								</p>
							</div>
							<Button onClick={qrCodeModal.open} variant="secondary" size="sm">
								View QR Code
							</Button>
						</div>
					</div>

					<form onSubmit={submit} className="flex flex-col gap-4">
						<TextInput
							label="Name"
							name="name"
							placeholder="The Kiddos"
							helperText="What name should appear with your fun message?"
							value={name}
							onChange={setName}
						/>
						<TextInput
							label="Message"
							name="message"
							placeholder="You've been spooked by your grands! Love you Mama and Papa!"
							helperText="Write your fun message?"
							value={message}
							onChange={setMessage}
						/>
						<FileUpload
							label="Upload New Video (Optional)"
							name="video"
							helperText="Upload a new video to replace the current one. (.mp4, .mov, .avi). Max size 10MB."
							onChange={setVideo}
						/>

						<HR />
						<Tag className="bg-gray_dark text-gray_medium mx-auto">Preview</Tag>
						<p className="text-center text-md">
							{`Below is a preview of your updated Booo page!`}
						</p>
						<HR />

						<div className="flex flex-col justify-center gap-3">
							<h2 className="text-white text-center font-bold">
								{finalMessage}
							</h2>

							{/* Show current video or new video */}
							{video ? (
								<video
									key={video.name}
									className="inline rounded-lg"
									width="640"
									height="480"
									controls
									controlsList="nodownload"
									autoPlay
								>
									<source src={URL.createObjectURL(video)} type="video/mp4" />
									Your browser does not support the video tag.
								</video>
							) : (
								currentVideoUrl && <Video autoPlay url={currentVideoUrl} />
							)}

							<PreviewComponent />
						</div>

						{error && <ErrorText>{error}</ErrorText>}

						<div className="flex gap-4">
							<Button
								type="button"
								variant="ghost"
								onClick={() => router.push(`/${userId}/${year}`)}
								disabled={saving}
							>
								Cancel
							</Button>
							<Button type="submit" disabled={saving} className="flex-1">
								{saving ? "Saving..." : "Save Changes"}
							</Button>
						</div>
					</form>
				</Container>
			</PageTemplate>

			{/* QR Code Modal */}
			<Modal
				title={`${year} Booo QR Code`}
				description="Print or download this QR code to share your Booo!"
				isOpen={qrCodeModal.isOpen}
				onClose={qrCodeModal.close}
				cancel={false}
				success={false}
			>
				<div className="flex flex-col items-center mt-6 gap-y-4">
					{boooData?.qrCodeImage ? (
						<>
							<div className="p-4 bg-orange/20 rounded-lg">
								<Image
									src={boooData.qrCodeImage}
									width={200}
									height={200}
									alt={`${year} Booo QR Code`}
									className="rounded-lg"
								/>
							</div>
							<p className="text-center text-sm text-gray_dark mb-2">
								Scan this code to go to: {process.env.NEXT_PUBLIC_ORIGIN}/
								{userId}/{year}
							</p>
							<div className="flex flex-col gap-3">
								<div className="flex gap-4">
									<a
										href={boooData.qrCodeImage}
										download={`${year}_Booo_QR_Code.png`}
										target="_blank"
										className={`${baseButtonClasses} ${buttonSizes["lg"]} ${buttonVariants["primary"]} leading-normal`}
									>
										Download
									</a>
									<Button onClick={handlePrintQRCode} variant="tertiary">
										Print
									</Button>
								</div>
								<Button
									onClick={handleCopyLink}
									variant="secondary"
									className={`transition-colors ${
										copySuccess ? "bg-green-500 text-white" : ""
									}`}
								>
									{copySuccess ? "Link Copied!" : "Copy Link"}
								</Button>
							</div>
						</>
					) : (
						<p>QR Code not available</p>
					)}
				</div>
			</Modal>
		</>
	);
};

export default EditBooo;
