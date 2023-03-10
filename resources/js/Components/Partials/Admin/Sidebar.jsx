import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaReact, FaHome, FaAngleDown, FaBorderAll, FaDollyFlatbed } from "react-icons/fa";

function Sidebar() {
    const menus = [
        {
            id: "dashboard",
            name: "Dashboard",
            link: "/admin",
            is_parent: false,
            icon: <FaHome size={20} />,
        },
        {
            id: "master",
            name: "Master",
            link: "#",
            is_parent: true,
            icon: <FaBorderAll size={20} />,
            children: [
                {
                    name: "Category",
                    link: "/admin/category",
                },
                {
                    name: "Language",
                    link: "/admin/language",
                },
            ],
        },
        {
            id: "about",
            name: "About",
            link: "/admin/about",
            is_parent: false,
            icon: <FaDollyFlatbed size={20} />,
        },
    ];

    const [linkActive, setLinkActive] = useState("");

    const onMenu = (menu) => {
        if (linkActive === menu) {
            setLinkActive("");
        } else {
            setLinkActive(menu);
        }
    };
    return (
        <div className="fixed inset-0 top-16 left-[-100%] lg:left-[max(0px,calc(50%-45rem))] w-60 pb-10 px-8 pt-2 overflow-y-auto ease-in-out duration-500 bg-slate-100 border-2">
            <ul className="flex flex-col space-y-2">
                {menus ? (
                    menus.map((menu, index) => {
                        return (
                            <li key={menu.id}>
                                <div
                                    className="relative flex justify-between"
                                    onClick={() => onMenu(menu.id)}
                                >
                                    <div className="flex items-center w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                                            {menu.icon}
                                        </div>
                                        <NavLink
                                            to={menu.link}
                                            className="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-slate-200 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-slate-200 font-bold"
                                        >
                                            {menu.name}
                                        </NavLink>
                                    </div>
                                    {menu.is_parent && (
                                        <button className="absolute bottom-1 right-0 block items-center p-1">
                                            <FaAngleDown size={20} />
                                        </button>
                                    )}
                                </div>
                                {menu.is_parent && (
                                    <div
                                        className={
                                            "pt-2 pl-4 " +
                                            (linkActive == menu.id
                                                ? ""
                                                : "hidden")
                                        }
                                    >
                                        <ul className="flex flex-col pl-2 text-gray-700 font-bold border-l border-gray-700">
                                            {menu.children &&
                                                menu.children.map(
                                                    (child, childI) => {
                                                        return (
                                                            <li
                                                                key={child.name}
                                                            >
                                                                <NavLink
                                                                    to={
                                                                        child.link
                                                                    }
                                                                    className="inline-block w-full px-4 py-2 text-xs rounded hover:bg-slate-200  focus:outline-none focus:ring-1 focus:ring-gray-500 mb-1"
                                                                >
                                                                    {child.name}
                                                                </NavLink>
                                                            </li>
                                                        );
                                                    }
                                                )}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        );
                    })
                ) : (
                    <></>
                )}
            </ul>
        </div>
    );
}

export default Sidebar;
