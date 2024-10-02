"use client";

import BouncingGhosts from "@/components/BouncingGhosts";
import { Button } from "@/components/Button";
import Container from "@/components/Container";
import FileUpload from "@/components/FileUpload";
import HR from "@/components/HR";
import Tag from "@/components/Tag";
import TextInput from "@/components/TextInput";
import PageTemplate from "@/templates/PageTemplate";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Create = () => {
	const router = useRouter();
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [video, setVideo] = useState<File>();
	const finalMessage = name && message && `${message} from ${name}!`;

	const submit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		console.log({ name, message, video });
		// Implement login logic here
	};
	return (
		<PageTemplate
			title="Create Your Booo!"
			description="Share a fun moment with family and friends!"
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
					<Button type="submit">Publish Live</Button>
				</form>
			</Container>
		</PageTemplate>
	);
};

export default Create;
