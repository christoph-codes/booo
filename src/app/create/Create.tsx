"use client";

import BouncingGhosts from "@/components/BouncingGhosts";
import { Button } from "@/components/Button";
import Container from "@/components/Container";
import ErrorText from "@/components/ErrorText";
import FileUpload from "@/components/FileUpload";
import HR from "@/components/HR";
import Modal from "@/components/Modal";
import Tag from "@/components/Tag";
import TextInput from "@/components/TextInput";
import { useAuth } from "@/context/AuthProvider";
import useModal from "@/hooks/useModal";
import PageTemplate from "@/templates/PageTemplate";
import { db } from "@/utils/firebase";
import { uploadVideo } from "@/utils/storage";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Create = () => {
	const router = useRouter();
	const { user } = useAuth();
	const createAccountModal = useModal();
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [video, setVideo] = useState<File>();
	const [error, setError] = useState<string | null>(null);
	const finalMessage = name && message && `${message} from ${name}!`;

	useEffect(() => {
		if (user) {
			const storedData = localStorage.getItem("boooData");
			if (storedData) {
				const { name, message, video } = JSON.parse(storedData);
				setName(name);
				setMessage(message);
				if (video) {
					fetch(video)
						.then((res) => res.blob())
						.then((blob) => {
							const file = new File([blob], "video.mp4", { type: "video/mp4" });
							setVideo(file);
						});
				}
				localStorage.removeItem("boooData");
			}
		}
	}, [user]);

	const submit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		if (!user) {
			localStorage.setItem(
				"boooData",
				JSON.stringify({
					name,
					message,
					video: video ? URL.createObjectURL(video) : null,
				})
			);
			createAccountModal.open();
			return;
		}
		if (!video) {
			setError("Please upload a video");
			return;
		}
		if (!name || !message) {
			setError("Please fill out all fields");
			return;
		}

		const year = new Date().getFullYear().toString();
		uploadVideo(video, `${user?.uid}/${year}`).then((videoUrl) => {
			if (videoUrl) {
				addDoc(collection(db, "booos"), {
					name,
					message,
					video: videoUrl,
					year,
					userId: user?.uid,
				})
					.then(() => {
						console.log("Document successfully written!");
						router.push(`/${user?.uid}/${year}`);
					})
					.catch((error) => {
						console.error("Error writing document: ", error);
					});
			}
		});
	};
	const redirectToSignup = () => {
		const queryParams = new URLSearchParams();
		if (name) queryParams.append("name", name);
		if (message) queryParams.append("message", message);
		const videoUrl = video && URL.createObjectURL(video);
		if (videoUrl) queryParams.append("video", videoUrl);
		const addQuery = name || message || video;
		router.push(
			`/signup?redirect=create${
				addQuery ? `&${queryParams.toString()}` : ""
			}`.trim()
		);
	};
	return (
		<>
			<PageTemplate
				title="Create Your Booo!"
				description="Share a fun moment with family and friends!"
				noBottomPadding
			>
				<Container size="md">
					<form onSubmit={submit} className="flex flex-col gap-4">
						<TextInput
							label="Name"
							name="name"
							placeholder="The Kiddos"
							helperText="What name should appear with your fun message?"
							onChange={setName}
						/>
						<TextInput
							label="Message"
							name="message"
							placeholder="You’ve been spooked by your grands! Love you Mama and Papa!"
							helperText="Write your fun message?"
							onChange={setMessage}
						/>
						<FileUpload
							label="Upload Your Personal Video"
							name="image"
							helperText="Upload your fun video to go with your fun message. (.mp4, .mov, .avi). Max size 10MB."
							onChange={setVideo}
						/>

						<HR />
						<Tag className="bg-gray_dark text-gray_medium mx-auto">Preview</Tag>
						{(name || message || video) && (
							<p className="text-center text-md">
								{`Below will be a sneak peek of your page! It may look a little
							different once it's live, but focus on confirming the awesome
							content you've added. Get ready to share it!`}
							</p>
						)}
						<HR />
						<div className="flex flex-col justify-center gap-3">
							<h2 className="text-white text-center">{finalMessage}</h2>
							{video && (
								<video
									key={video.name} // Added key to force re-render
									className="inline"
									width="640"
									height="480"
									controls
									controlsList="nodownload"
									autoPlay
								>
									<source src={URL.createObjectURL(video)} type="video/mp4" />
									Your browser does not support the video tag.
								</video>
							)}
							<BouncingGhosts />
						</div>
						{error && <ErrorText>{error}</ErrorText>}
						<Button type="submit">Publish Live</Button>
					</form>
				</Container>
			</PageTemplate>
			<Modal
				isOpen={createAccountModal.isOpen}
				onClose={createAccountModal.close}
				title="First Create an Account"
				description="To create your first Booo you must first create your account."
				onSuccess={redirectToSignup}
			/>
		</>
	);
};

export default Create;
