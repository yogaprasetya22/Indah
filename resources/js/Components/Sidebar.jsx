import { MenuDashboardValidate } from "@/Layouts/libs/LibSidebar";
import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

const Sidebar = ({ isSidebarOpen, user }) => {
    const [OpenDropdown, setOpenDropdown] = useState({
        dropdown1: false,
        dropdown2: false,
    });
    const MenuDashboard = MenuDashboardValidate(user);
    return (
        <aside
            className={`h-screen lg:w-80 shadow-md  w-full  lg:relative absolute z-10 ${
                isSidebarOpen
                    ? "transform translate-x-0 "
                    : "lg:translate-x-0  transform -translate-x-full"
            } lg:flex transition-transform duration-300 ease-in-out`}
        >
            <div className="lg:w-full md:w-[40%] w-[75%] bg-white h-full ">
                <div className="pt-5 flex flex-col justify-between h-full">
                    <div className="w-full flex justify-center items-center flex-col gap-4 lg:mt-0 mt-12 mb-6 px-5">
                        <h1 className="font-extrabold text-indigo-400 text-4xl text-shadow flex items-center gap-2">
                            <img
                                src="https://akpol.ac.id/wp-content/uploads/2020/10/pusinafis.png"
                                alt=""
                                className="w-8 h-8"
                            />{" "}
                            INDAH
                        </h1>
                        <hr className="border-t-2 border-gray-300 w-full" />
                    </div>
                    {/* divider */}
                    <div className=" overflow-y-auto overflow_type h-screen px-5  flex flex-col justify-between gap-10">
                        <ul className="flex flex-col gap-2 w-full">
                            {MenuDashboard &&
                                MenuDashboard.map((menu, index) => (
                                    <div key={index}>
                                        {!menu.dropdown ? (
                                            <Link
                                                href={menu.url}
                                                className="cursor-pointer"
                                            >
                                                <li
                                                    className={`font-medium w-full rounded-md text-gray-700 p-2 flex gap-2 items-center select-none ${
                                                        menu.url ===
                                                        window.location.pathname
                                                            ? "text-white  bg-indigo-500"
                                                            : "hover:text-black hover:bg-blue-gray-200"
                                                    }`}
                                                >
                                                    <i
                                                        className={`text-md ${menu.icon}`}
                                                    ></i>
                                                    {menu.name}
                                                </li>
                                            </Link>
                                        ) : (
                                            <>
                                                <li
                                                    className={`font-medium w-full cursor-pointer transition-all ease-in-out delay-75 flex justify-between rounded-md text-gray-700 p-2 gap-2 items-center select-none ${
                                                        menu.url ===
                                                        window.location.pathname
                                                            ? "text-gray-900  bg-blue-gray-200"
                                                            : "hover:text-black hover:bg-blue-gray-200"
                                                    }`}
                                                    onClick={() => {
                                                        if (
                                                            menu.url ===
                                                            window.location
                                                                .pathname
                                                        ) {
                                                            setOpenDropdown(
                                                                (
                                                                    prevState
                                                                ) => ({
                                                                    ...prevState,
                                                                    dropdown1: true,
                                                                })
                                                            );
                                                        } else {
                                                            setOpenDropdown(
                                                                (
                                                                    prevState
                                                                ) => ({
                                                                    ...prevState,
                                                                    dropdown1:
                                                                        !prevState.dropdown1,
                                                                })
                                                            );
                                                        }
                                                    }}
                                                >
                                                    <p className=" flex gap-2 items-center  ">
                                                        <i
                                                            className={`text-md ${menu.icon}`}
                                                        ></i>
                                                        {menu.name}
                                                    </p>
                                                    <i
                                                        className={`fas fa-chevron-${
                                                            OpenDropdown.dropdown1
                                                                ? "up"
                                                                : "down"
                                                        }`}
                                                    ></i>
                                                </li>
                                                <ul
                                                    className={` pl-2 transition-all duration-500 overflow-hidden ease-in-out ${
                                                        OpenDropdown.dropdown1
                                                            ? "max-h-96 border-t"
                                                            : "max-h-0 "
                                                    }`}
                                                >
                                                    {OpenDropdown.dropdown1 &&
                                                        menu.dropdown.map(
                                                            (menu, index) => (
                                                                <Link
                                                                    key={index}
                                                                    href={
                                                                        menu.url
                                                                    }
                                                                    className="cursor-pointer"
                                                                >
                                                                    <li
                                                                        className={`font-medium w-full rounded-md text-gray-700 p-2 flex gap-2 items-center select-none ${
                                                                            menu.url ===
                                                                            window
                                                                                .location
                                                                                .pathname
                                                                                ? "text-white  bg-indigo-500"
                                                                                : "hover:text-black hover:bg-blue-gray-200"
                                                                        }`}
                                                                    >
                                                                        <i
                                                                            className={`text-md ${menu.icon}`}
                                                                        ></i>
                                                                        <p className="text-sm">
                                                                            {
                                                                                menu.name
                                                                            }
                                                                        </p>
                                                                    </li>
                                                                    <hr />
                                                                </Link>
                                                            )
                                                        )}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                ))}
                        </ul>
                        <ul className="flex flex-col gap-1 w-full mb-4">
                            {/* Dropdown */}
                            <li
                                className={`font-medium w-full cursor-pointer transition-all ease-in-out delay-75 flex justify-between rounded-md text-gray-700 px-2 items-center select-none hover:text-black hover:bg-blue-gray-200`}
                                onClick={() =>
                                    setOpenDropdown((prevState) => ({
                                        ...prevState,
                                        dropdown2: !prevState.dropdown2,
                                    }))
                                }
                            >
                                <p className="flex gap-2 items-center">
                                    <i className={`text-md fas fa-cog`}></i>
                                    Settings
                                </p>
                                <i
                                    className={`fas fa-chevron-${
                                        OpenDropdown.dropdown2 ? "up" : "down"
                                    } transition-transform duration-300`}
                                ></i>
                            </li>
                            <ul
                                className={`pl-5 transition-all duration-500 overflow-hidden ease-in-out ${
                                    OpenDropdown.dropdown2
                                        ? "max-h-96"
                                        : "max-h-0"
                                }`}
                            >
                                {OpenDropdown.dropdown2 && (
                                    <>
                                        <Link
                                            href={route("profile.edit")}
                                            className="cursor-pointer"
                                        >
                                            <li
                                                className={`font-medium w-full rounded-md text-gray-700 p-1 flex gap-2 items-center select-none ${
                                                    route("profile.edit").slice(
                                                        21
                                                    ) ===
                                                    window.location.pathname
                                                        ? "text-white bg-indigo-500"
                                                        : "hover:text-black hover:bg-blue-gray-200"
                                                }`}
                                            >
                                                <i
                                                    className={`text-md fas fa-user`}
                                                ></i>
                                                Profile
                                            </li>
                                        </Link>
                                        <Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                            className="cursor-pointer"
                                        >
                                            <li
                                                className={`font-medium w-full rounded-md text-gray-700 p-1 flex gap-2 items-center hover:text-black hover:bg-blue-gray-200`}
                                            >
                                                <i
                                                    className={`text-md fas fa-sign-out-alt`}
                                                ></i>
                                                Logout
                                            </li>
                                        </Link>
                                    </>
                                )}
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
