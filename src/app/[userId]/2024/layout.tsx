import Container from "@/components/Container";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
	return <Container className="px-4">{children}</Container>;
};

export default Layout;
