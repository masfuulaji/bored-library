import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../Components/Partials/Admin/Navbar";
import Sidebar from "../Components/Partials/Admin/Sidebar";

const AdminLayout = () => {
    return (
        <div className="bg-slate-200 min-h-screen">
            <Navbar />
            <div className="max-w-[90rem] mx-auto px-3">
                <Sidebar />
                <div className="lg:pl-60 pt-7 ease-in-out duration-500">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
