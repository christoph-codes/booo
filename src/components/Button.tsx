import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = {
	children: string;
	className?: string;
	variant?: "primary" | "secondary" | "tertiary" | "ghost";
};

export const baseButtonClasses =
	"px-4 cursor-pointer pt-3 pb-2 rounded-xl text-white hover:text-gray text-center font-sans leading-none text-lg border-2 transition-all ease-in-out duration-300";

const buttonClasses = {
	primary:
		"bg-orange hover:bg-orange_hover border-orange hover:border-orange_hover",
	secondary: "bg-transparent hover:border-orange_hover border-orange",
	tertiary:
		"bg-purple hover:bg-purple_hover border-purple hover:border-purple_hover",
	ghost: "bg-transparent border-transparent",
};

import { forwardRef } from "react";

export const Button = forwardRef<
	HTMLButtonElement,
	ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, variant = "primary", ...rest }, ref) => {
	return (
		<button
			{...rest}
			ref={ref}
			className={twMerge(
				baseButtonClasses,
				buttonClasses[variant] ?? "",
				className
			)}
		>
			{children}
		</button>
	);
});

Button.displayName = "Button";
