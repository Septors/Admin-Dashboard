import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from './Header/Header';
import { Outlet } from "react-router-dom";
import DashboardPage from "../../features/dashboard/Dashboard.page";

const AppLayout = () => {
  return (
    <div className="flex max-w-[1440px] mx-auto" >
      <Sidebar />
      <div>
        <Header />
        <main className="bg-[#F5F6FA] rounded-[2px]">
          <Outlet />
        </main>
      </div>
    </div>

  )
}

export default AppLayout;