"use client";

import Container from "@/components/Container";
import { useAuth } from "@/context/AuthProvider";
import PageTemplate from "@/templates/PageTemplate";
import BoooCard from "@/components/BoooCard";

const Dashboard = () => {
							{booos.map((boo) => (
								<BoooCard key={boo.year} booo={boo} />
							))}
};

export default Dashboard;
