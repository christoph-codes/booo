import { Button } from "./Button";
import { MouseEvent, ReactNode } from "react";

export type ModalProps = {
	title: string;
	description?: string;
	success?: boolean;
	cancel?: boolean;
	onClose?: VoidFunction;
	onSuccess?: VoidFunction;
	successLabel?: string;
	variant?: "default" | "danger";
	isOpen: boolean;
	children?: ReactNode;
};

const Modal = ({
	title,
	description,
	success = true,
	cancel = true,
	onClose,
	onSuccess,
	successLabel = "Confirm",
	variant = "default",
	isOpen = false,
	children,
}: ModalProps) => {
	const handleSuccessButton = () => {
		onSuccess?.();
		onClose?.();
	};
	const handleBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
		if (e.target === e.currentTarget) {
			onClose?.();
		}
	};
	return (
		<dialog
			className={`bg-purple/95 fixed inset-0 w-screen h-screen flex justify-center items-center cursor-pointer z-40 ${
				isOpen ? "block" : "hidden"
			}`}
			open={isOpen}
			onClick={handleBackdropClick}
		>
			<div
				className="flex flex-col bg-black p-12 pt-16 rounded-lg text-center gap-3 relative cursor-default"
				onClick={(e) => e.stopPropagation()}
			>
				<Button
					className="absolute top-1 right-1 text-2xl"
					variant="ghost"
					onClick={onClose}
				>
					X
				</Button>
				{title && <h2 className="text-5xl">{title}</h2>}
				{description && <p>{description}</p>}
				{children && <div className="py-2">{children}</div>}
				<div className="flex justify-center gap-4">
					{success && (
						<Button
							variant={variant === "danger" ? "error" : undefined}
							onClick={handleSuccessButton}
						>
							{successLabel}
						</Button>
					)}
					{cancel && (
						<Button variant="secondary" onClick={onClose}>
							Cancel
						</Button>
					)}
				</div>
			</div>
		</dialog>
	);
};

export default Modal;
