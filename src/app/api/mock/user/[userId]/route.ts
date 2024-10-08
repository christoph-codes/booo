export default async function GET({ params }: { params: { userId: string } }) {
	const userId = params.userId;
	return {
		status: 200,
		body: {
			id: userId,
			name: "Jax & Kennedy",
			image: "",
			video: "/happy_halloween_2023.MOV",
			shareable: true,
		},
	};
}
