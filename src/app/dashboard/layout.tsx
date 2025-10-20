"use client";

import Loading from "@/components/Loading";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

const Layout = ({ children }: PropsWithChildren) => {
	const router = useRouter();
	const { loggedIn, loading } = useAuth();

	useEffect(() => {
		if (!loggedIn && !loading) {
			router.push("/login");
		}
	}, [loggedIn, loading, router]);

	if (loading) {
		return <Loading />;
	}

	if (!loggedIn) {
		return null; // Don't render anything while redirecting
	}

	return children;
};

export default Layout;
