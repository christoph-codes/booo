import { Metadata } from "next";
import Home from "./Home";

export const metadata: Metadata = {
  title: "Booo! 👻",
  description: "Welcome to Booo! 👻",
};

export default function Page() {
  return <Home />;
}
