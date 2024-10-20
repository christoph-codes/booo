import { collection, getDocs, query, where } from "firebase/firestore";
import Halloween2024, { BoooData } from "./Halloween2024";
import { db } from "@/utils/firebase";

export default async function Page({ params }: { params: { userId: string } }) {
	const userId = params.userId;
	const year = "2024";

	const collectionRef = collection(db, "booos");
	const q = query(
		collectionRef,
		where("userId", "==", userId),
		where("year", "==", year)
	);

	const querySnapshot = await getDocs(q);
	const boooData = querySnapshot.docs[0]?.data() as BoooData;

	if (!boooData) {
		throw new Error("No Booo found here!");
	}

	return <Halloween2024 booo={boooData} />;
}
