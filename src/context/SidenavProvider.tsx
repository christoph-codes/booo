"use client";

import Sidenav from "@/components/Sidenav";
import {
	createContext,
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from "react";

const SidenavContext = createContext({
	isOpen: false,
	toggleSidenav: () => {},
});

export const useSidenav = () => useContext(SidenavContext);

export const SidenavProvider = ({ children }: PropsWithChildren) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidenav = () => setIsOpen((prev) => !prev);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	});

	return (
		<SidenavContext.Provider value={{ isOpen, toggleSidenav }}>
			{children}
			<Sidenav isOpen={isOpen} toggleSidenav={toggleSidenav} />
		</SidenavContext.Provider>
	);
};
