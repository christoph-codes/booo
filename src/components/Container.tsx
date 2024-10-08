import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type ContainerProps = {
	size?: "sm" | "md" | "lg";
	children: ReactNode;
	className?: string;
};

const Container = ({ children, size, className }: ContainerProps) => {
	return (
		<div
			className={twMerge(
				"container mx-auto px-2 md:px-6",
				className,
				size === "sm"
					? "max-w-md"
					: size === "md"
					? "max-w-lg"
					: size === "lg" && "max-w-5xl"
			)}
		>
			{children}
		</div>
	);
};

export default Container;
