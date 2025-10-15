import { twMerge } from "tailwind-merge";

export type VideoProps = {
	url: string;
	autoPlay?: boolean;
	controls?: boolean;
	width?: number;
	height?: number;
	className?: string;
};

const Video = ({
	url,
	autoPlay = false,
	controls = false,
	width = 640,
	height = 480,
	className,
}: VideoProps) => {
	// Don't set width/height if className includes responsive classes
	const isResponsive =
		className?.includes("w-full") || className?.includes("h-full");

	return (
		<video
			className={twMerge("inline", className)}
			width={isResponsive ? undefined : width}
			height={isResponsive ? undefined : height}
			controls={controls}
			controlsList="nodownload"
			autoPlay={autoPlay}
		>
			<source src={url} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	);
};

export default Video;
