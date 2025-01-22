"use client";
import {IoSearchSharp} from "react-icons/io5";
import User from "./User";
import {SlPresent} from "react-icons/sl";

import {CgMenuRight} from "react-icons/cg";
import {CgMenuLeft} from "react-icons/cg";
import {usePathname, useRouter} from "next/navigation"; // Use 'next/navigation' here

const navLinks = [
    {
        name: "My Dashboard",
        href: "/dashboard"
    }, {
        name: "My Products",
        href: "/dashboard/products"
    }, {
        name: "My calendar",
        href: "/dashboard/calendar"
    }, {
        name: "My Account",
        href: "/dashboard/profile"
    }
];

const Navbar = ({showSidebar, toggleShowSodebar}) => {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div
            className="dark:bg-gray-800 rounded-lg mb-0 py-5 text-gray-300 h-14 top-0 w-full p-4 px-10">
            <nav className="flex items-center justify-between px-4">
                <div className="flex items-center gap-10 transition-all duration-200 w-full">
                    {
                        showSidebar
                            ? <CgMenuRight
                                    onClick={toggleShowSodebar}
                                    className=" transition-all duration-200 cursor-pointer text-xl text-gray-600 dark:text-gray-300  hover:text-teal-500 dark:hover:text-teal-500 "/>
                            : <CgMenuLeft
                                    onClick={toggleShowSodebar}
                                    className=" cursor-pointer text-xl text-gray-600 transition-all duration-200 dark:text-gray-300  hover:text-teal-500 dark:hover:text-teal-500"/>
                    }

                    <h2 className="text-main text-2xl w-full">
                        {
                            navLinks.map((item) => {
                                if (pathname === item.href) 
                                    return item.name
                            })
                        }
                    </h2>
                </div>

                <div className='flex pr-10 items-center gap-8 justify-end w-full text-sm '>
                    <button
                        style={{
                            width: "200px"
                        }}
                        className='hidden  bg-gradient-to-r from-tealCustom via-whiteTransparent to-blackCustom lg:flex gap-3 items-center w-[200px] h-[50px] p-2 rounded-[8px] border-2 text-white'>
                        <SlPresent/>
                        upgrade your plan
                    </button>
                    <div className="user_show">
                        <User/>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
