import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type HelperTextProps = {
	className?: string;
	children: ReactNode;
};

const HelperText = ({ children, className }: HelperTextProps) => {
	return (
		<p className={twMerge("text-sm text-gray_medium", className)}>{children}</p>
	);
};

export default HelperText;
