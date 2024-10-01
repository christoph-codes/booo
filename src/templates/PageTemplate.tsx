import { ReactNode } from "react";

export type PageProps = {
	title: string;
	description?: string;
	children: ReactNode;
};

const PageTemplate = ({ children, title, description }: PageProps) => {
	return (
		<main className="flex w-full flex-col pt-16 bg-pattern bg-center">
			<section className="mx-auto text-center mb-10 max-w-3xl">
				<h1 className="md:text-[48px] text-3xl text-white leading-none text-center mb-1">
					{title}
				</h1>
				{description && <p className="text-xl">{description}</p>}
			</section>
			{children}
		</main>
	);
};

export default PageTemplate;
