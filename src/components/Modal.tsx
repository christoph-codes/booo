import { BiX } from "react-icons/bi";
import { Button } from "./Button";
import { MouseEvent } from "react";

export type ModalProps = {
	title: string;
	description?: string;
	cancel?: boolean;
	onClose?: VoidFunction;
	onSuccess?: VoidFunction;
	successLabel?: string;
	variant?: "default" | "danger";
	isOpen: boolean;
};

const Modal = ({
	title,
	description,
	cancel = true,
	onClose,
	onSuccess,
	successLabel = "Confirm",
	variant = "default",
	isOpen = false,
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
				{title && <h2>{title}</h2>}
				{description && <p>{description}</p>}
				<div className="flex justify-center gap-4">
					<Button
						variant={variant === "danger" ? "error" : undefined}
						onClick={handleSuccessButton}
					>
						{successLabel}
					</Button>
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
