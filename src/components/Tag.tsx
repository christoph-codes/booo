import { twMerge } from "tailwind-merge";

export type TagProps = {
	children: string;
	className?: string;
};

const Tag = ({ children, className }: TagProps) => {
	return (
		<span
			className={twMerge(
				"text-sm px-2 pt-1 rounded-lg font-sans w-fit",
				className
			)}
		>
			{children}
		</span>
	);
};

export default Tag;
