import Halloween2024, { User } from "./Halloween2024";

export default async function Page({ params }: { params: { userId: string } }) {
	const userId = params.userId;

	// TODO: Fetch user from database

	const user: User = {
		id: userId,
		name: "Jax & Kennedy",
		message: "Happy Halloween Family",
		image: "",
		video: "/happy_halloween_2023.MOV",
		shareable: false,
	};

	return <Halloween2024 user={user} />;
}
