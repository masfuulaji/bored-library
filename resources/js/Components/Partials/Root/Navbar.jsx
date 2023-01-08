import React from "react";

const Navbar = () => {
    return (
        <div className="sticky w-full top-0 bg-slate-100 shadow-sm border-b">
            <div className="max-w-8xl mx-auto flex justify-between items-center h-16">
                <div className="w-52 lg:w-60 px-4 flex items-center">
                    <p className="text-xl ml-2 font-extrabold mr-auto">React</p>
                </div>
                <div className="px-4 flex items-center">
                    <button className="h-10 p-2 hover:bg-slate-200 rounded-lg">
                        X
                    </button>
                    <button className="h-10 p-2 hover:bg-slate-200 rounded-full flex items-center">
                        <p className="mx-2 font-semibold">Super Admin</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
