import { ReactNode } from "react";

export type PageProps = {
	title: string;
	description?: string;
	children: ReactNode;
};

const PageTemplate = ({ children, title, description }: PageProps) => {
	return (
		<main className="flex w-full flex-col bg-center">
			<section className="mx-auto text-center max-w-3xl py-32">
				<h1 className="md:text-[48px] text-3xl text-white leading-none text-center mb-1">
					{title}
				</h1>
				{description && <p className="text-xl">{description}</p>}
			</section>
			<div className="min-h-[70vh]">{children}</div>
		</main>
	);
};

export default PageTemplate;
