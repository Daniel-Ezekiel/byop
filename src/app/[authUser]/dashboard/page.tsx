import MainLayout from "@/app/_layouts/MainLayout";
import React from "react";

function Dashboard() {
  return (
    <MainLayout isDashboardPage={true}>
      <div className='min-h-[70dvh] my-12'>Dashboard</div>
    </MainLayout>
  );
}

export default Dashboard;
