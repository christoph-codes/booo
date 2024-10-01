import Image from "next/image";
import Link from "next/link";

const Nav = () => {
	const navItems = [
		{ name: "How It Works", href: "/how-it-works" },
		{ name: "Login", href: "/login" },
		{ name: "Create Booo!", href: "/create", cta: true },
	];
	return (
		<header className="py-6 bg-purple">
			<div className="container flex items-center justify-between mx-auto">
				<Link href="/">
					<Image src="/booo_logo.svg" alt="Booo Logo" width={151} height={42} />
				</Link>
				<nav className="gap-3 flex">
					{navItems.map((item) => (
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
			</div>
		</header>
	);
};

export default Nav;
