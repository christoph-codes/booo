"use client";

import { db } from "@/utils/firebase";
import Container from "@/components/Container";
import { useAuth } from "@/context/AuthProvider";
import PageTemplate from "@/templates/PageTemplate";
import { BoooData } from "../[userId]/2024/Halloween2024";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import BoooCard from "@/components/BoooCard";
import { useRouter } from "next/navigation";
import useModal from "@/hooks/useModal";
import Modal from "@/components/Modal";
import { BiPlus } from "react-icons/bi";

const Dashboard = () => {
	const { user } = useAuth();
	const router = useRouter();
	const [booos, setBooos] = useState<BoooData[]>([]);
	const stopBoooCreationModal = useModal();

	useEffect(() => {
		if (!user) return;

		const collectionRef = collection(db, "booos");
		const q = query(collectionRef, where("userId", "==", user.uid));

		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const boooData = querySnapshot.docs.map((doc) => doc.data() as BoooData);
			setBooos(boooData);
		});

		return () => unsubscribe();
	}, [user]);

	const areThereBooos = booos.length > 0;

	const handleAdditionBooCreationButton = () => {
		// trigger modal to explain that only one booo per year
		const currentYear = new Date().getFullYear();
		const hasCurrentYearBooo = booos.some(
			(booo) => Number(booo.year) === currentYear
		);

		if (hasCurrentYearBooo) {
			stopBoooCreationModal.open();
		} else {
			router.push("/create");
		}
	};

	return (
		<>
			<PageTemplate
				title="Dashboard"
				description={`Welcome, ${user?.displayName}`}
				noBottomPadding
			>
				<Container className="h-full border-t border-t-gray_medium pt-6">
					{!areThereBooos ? (
						<div className="p-4 rounded-lg text-center">
							<h2 className="text-gray">No booos yet</h2>
						</div>
					) : (
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
							{booos.map((boo) => (
								<BoooCard key={boo.year} booo={boo} />
							))}
							<button
								onClick={handleAdditionBooCreationButton}
								className="bg-gray_black p-4 rounded-lg hover:bg-gray_dark hover:-translate-y-3 transition-all flex flex-col justify-center items-center"
								key="2024"
							>
								<BiPlus size={64} className="text-gray" />
								<h2 className="text-gray">Create a Booo</h2>
							</button>
						</div>
					)}
				</Container>
			</PageTemplate>
			<Modal
				title="Oops!"
				description="We allow only one booo per year!"
				isOpen={stopBoooCreationModal.isOpen}
				onClose={stopBoooCreationModal.close}
				successLabel="Got it!"
				onSuccess={stopBoooCreationModal.close}
				cancel={false}
			/>
		</>
	);
};

export default Dashboard;
