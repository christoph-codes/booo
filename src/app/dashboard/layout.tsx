"use client";

import Loading from "@/components/Loading";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { loggedIn, loading } = useAuth();
  if (loading) {
    return <Loading />;
  }
  if (!loggedIn && !loading) {
    router.push("/login");
    return;
  }
  return children;
};

export default Layout;
