import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
	return (
		<div className="container mx-auto space-y-4 px-2 md:px-6">{children}</div>
	);
};

export default Container;
