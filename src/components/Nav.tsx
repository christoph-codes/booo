"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { BiMenu } from "react-icons/bi";
import { useSidenav } from "@/context/SidenavProvider";
import { navItems } from "@/utils/navItems";
import { useAuth } from "@/context/AuthProvider";

const Nav = () => {
	const { loggedIn } = useAuth();
	const { toggleSidenav } = useSidenav();

	return (
		<header className="py-6 bg-purple">
			<Container className="flex items-center justify-between gap-3">
				<Link href={loggedIn ? "/dashboard" : "/"}>
					<Image
						src="/booo_logo.svg"
						alt="Booo Logo"
						width={151}
						height={42}
						className="min-w-[100px]"
					/>
				</Link>
				<nav className="gap-3 md:flex hidden">
					{navItems
						.filter((item) =>
							loggedIn
								? item.authenticated !== false
								: item.authenticated !== true
						)
						.map((item) => (
							<Link
								key={item.href + item.name}
								href={item.href}
								className={`text-white hover:text-gray transition-colors ease-in-out duration-300 font-sans px-4 text-xl pt-3 pb-2 rounded-xl ${
									item.cta ? "bg-orange hover:bg-orange_hover " : ""
								}`}
							>
								{item.name}
							</Link>
						))}
				</nav>
				<button
					onClick={toggleSidenav}
					className="md:hidden p-1 hover:bg-purple_hover rounded-md transition-colors"
				>
					<BiMenu size={48} className="text-white text-2xl" />
				</button>
			</Container>
		</header>
	);
};

export default Nav;
