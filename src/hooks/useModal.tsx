import { useEffect, useState } from "react";

const useModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [isOpen]);

	return { isOpen, open, close };
};

export default useModal;
