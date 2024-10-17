"use client";

import Container from "@/components/Container";
import { useAuth } from "@/context/AuthProvider";
import PageTemplate from "@/templates/PageTemplate";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <PageTemplate
      title="Dashboard"
      description={`Welcome, ${user?.displayName}`}
    >
      <Container className="h-full">
        <p className="mt-auto">Dashboard content</p>
      </Container>
    </PageTemplate>
  );
};

export default Dashboard;
