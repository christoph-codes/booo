import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = {
	children: string;
	className?: string;
	variant?: "primary" | "secondary" | "ghost";
};

const baseButtonClasses =
	"px-4 pt-3 pb-2 rounded-xl text-white hover:text-gray text-center font-sans leading-none text-lg border-2 transition-all ease-in-out duration-300";

const buttonClasses = {
	primary:
		"bg-orange hover:bg-orange_hover border-orange hover:border-orange_hover",
	secondary: "bg-transparent hover:border-orange_hover border-orange",
	ghost: "bg-transparent border-transparent",
};

export function Button({
	children,
	className,
	variant = "primary",
	...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			{...rest}
			className={twMerge(
				baseButtonClasses,
				buttonClasses[variant] ?? "",
				className
			)}
		>
			{children}
		</button>
	);
}
