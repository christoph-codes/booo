import EditBooo from "./EditBooo";

export default async function Page({
	params,
}: {
	params: Promise<{ userId: string; year: string }>;
}) {
	const { userId, year } = await params;

	return <EditBooo userId={userId} year={year} />;
}
