"use client"
import React, { useState } from "react";
import Sidebar from "@/layout/dashboardLayout/Sidebar"
import Navbar from "@/layout/dashboardLayout/Navbar";
import Image from "next/image"
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import DashboardProviedr from "@/context/DashboardProviedr";
const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const toggleShowSodebar = () => {
    setShowSidebar(!showSidebar)
  }
  return (
    <div className='flex h-screen bg-[#F9FAFB]'>
    <div className={`shadow-md bg-gray-800 text-white overflow-hidden transition-all duration-200 ${showSidebar ? "w-20" : "w-0"}`}>
    <Sidebar />
    </div>
    <div className='flex-1 flex-col flex'>
      <Navbar showSidebar={showSidebar} toggleShowSodebar={toggleShowSodebar} />
    <main className=' text-white p-6 overflow-auto mt-20'>
      <DashboardProviedr>
      {children}
      </DashboardProviedr>
   
    </main>
    </div>
    <Link href="/New-post" title="Add New Post" className="text-2xl	 z-20 flex items-center justify-center text-white bg-main fixed bottom-4 right-[20px]	 w-[70px] h-[70px] rounded-[50px]">
    <FaPlus />
    </Link>
</div>
  
  );
};

export default Layout;
