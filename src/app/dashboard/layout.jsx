"use client"
import React, {useState} from "react";
import Sidebar from "@/layout/dashboardLayout/Sidebar"
import Navbar from "@/layout/dashboardLayout/Navbar";
import Image from "next/image"
import Link from "next/link";
import {FaPlus} from "react-icons/fa";
import DashboardProviedr from "@/context/DashboardProviedr";
const Layout = ({children}) => {
    const [showSidebar, setShowSidebar] = useState(true);
    const toggleShowSodebar = () => {
        setShowSidebar(!showSidebar)
    }
    return (
        <div className='row screen bg-[#F9FAFB]'>
            <div
                className={`h-full shadow-md bg-gray-800 overflow-hidden transition-all duration-200 ${showSidebar
                    ? "w-20"
                    : "w-0"}`}>
                <Sidebar/>
            </div>
            <div className='flex-1 col'>
                <Navbar showSidebar={showSidebar} toggleShowSodebar={toggleShowSodebar}/>
                <main className='px-6 overflow-hidden'>
                    <DashboardProviedr>
                        {children}
                    </DashboardProviedr>

                </main>
            </div>
            {/* <Link
                href="/New-post"
                title="Add New Post"
                className="text-2xl	 z-20 flex items-center justify-center bg-main fixed bottom-4 right-[20px]	 w-[70px] h-[70px] rounded-[50px]">
                <FaPlus/>
            </Link> */}
        </div>

    );
};

export default Layout;
