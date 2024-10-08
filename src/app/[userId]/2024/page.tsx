import Halloween2024 from "./Halloween2024";

export default async function Page({ params }: { params: { userId: string } }) {
	const userId = params.userId;

	// TODO: Fetch user from database

	const user = {
		id: userId,
		name: "Jax & Kennedy",
		message: "Happy Halloween Family",
		image: "",
		video: "/happy_halloween_2023.MOV",
		shareable: false,
	};

	return <Halloween2024 user={user} />;
}
