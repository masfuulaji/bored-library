import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <>
            <div>RootLayout</div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <Outlet />
        </>
    );
};

export default RootLayout;
