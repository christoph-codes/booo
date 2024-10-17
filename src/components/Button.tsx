import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = {
  children: string;
  className?: string;
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "ghost"
    | "error"
    | "error_subtle";
  size?: "sm" | "md" | "lg";
};

export const baseButtonClasses =
  " cursor-pointer  rounded-xl text-white hover:text-gray text-center font-sans leading-none  border-2 transition-all ease-in-out duration-300";

const buttonClasses = {
  primary:
    "bg-orange hover:bg-orange_hover border-orange hover:border-orange_hover",
  secondary: "bg-transparent hover:border-orange_hover border-orange",
  tertiary:
    "bg-purple hover:bg-purple_hover border-purple hover:border-purple_hover",
  error: "bg-red-700 hover:bg-red-900 border-red-700 hover:border-red-900",
  error_subtle: "bg-transparent border-red-700 hover:border-red-900",
  ghost: "bg-transparent border-transparent",
};

export const buttonSizes = {
  sm: "px-2 pt-1 pb-0 text-sm",
  md: "px-3 pt-2 pb-1 text-md",
  lg: "px-4 pt-3 pb-2 text-lg",
};

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, variant = "primary", size = "lg", ...rest }, ref) => {
  return (
    <button
      {...rest}
      ref={ref}
      className={twMerge(
        baseButtonClasses,
        buttonClasses[variant] ?? "",
        buttonSizes[size] ?? "",
        className
      )}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
