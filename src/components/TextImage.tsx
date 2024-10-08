import Image from "next/image";
import { twMerge } from "tailwind-merge";

export type TextImageProps = {
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	className?: string;
};

const TextImage = ({
	title,
	description,
	image,
	imageAlt,
	className,
}: TextImageProps) => {
	return (
		<article className={twMerge(className, "flex flex-col gap-3")}>
			{title && <h2 className="text-white">{title}</h2>}
			{image && imageAlt && (
				<Image
					src={image}
					width={365}
					height={134}
					alt={imageAlt}
					className="w-full rounded-xl"
				/>
			)}
			{description && <p>{description}</p>}
		</article>
	);
};

export default TextImage;
