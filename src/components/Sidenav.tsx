"use client";

import { navItems } from "@/utils/navItems";
import Link from "next/link";
import { BiX } from "react-icons/bi";
import { baseButtonClasses } from "./Button";
import { twMerge } from "tailwind-merge";

export type SidenavProps = {
	isOpen: boolean;
	toggleSidenav: () => void;
};

const Sidenav = ({ isOpen, toggleSidenav }: SidenavProps) => {
	return (
		<div
			className={`text-white bg-black absolute top-0 left-0 transition-transform ${
				isOpen ? "translate-x-0" : "translate-x-full"
			} w-screen h-screen z-50`}
		>
			<div className="flex flex-col items-end p-4 justify-between h-full">
				<button
					className="transition-colors rounded-sm hover:bg-gray_dark flex justify-self-end w-fit"
					onClick={toggleSidenav}
				>
					<BiX className="text-gray" size={42} />
				</button>
				<div className="p-4 flex flex-col text-right gap-y-12 w-full">
					{navItems.map((item) => (
						<Link
							className={twMerge(
								baseButtonClasses,
								"text-4xl  pb-1 pt-4 border-0",
								item.cta
									? "bg-orange hover:bg-orange_hover "
									: "text-white hover:text-purple"
							)}
							onClick={toggleSidenav}
							key={item.name}
							href={item.href}
						>
							{item.name}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidenav;
