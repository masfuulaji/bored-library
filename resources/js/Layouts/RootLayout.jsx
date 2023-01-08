import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Partials/Root/Navbar";

const RootLayout = () => {
    return (
        <>
            <div className="bg-slate-200 min-h-screen">
                <Navbar />
                <div className="max-w-[90rem] mx-auto px-3 pt-7">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default RootLayout;
