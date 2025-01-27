"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiCalendar } from "react-icons/ci";
import { TbSettings2 } from "react-icons/tb";
import { LiaShareAltSolid } from "react-icons/lia";
import "../styles/layout.css"
import Image from "next/image"
import Logo from "../../../public/images/side-bar-logo.png"
import toast from "react-hot-toast";

const Sidebar = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "My Dashboard",
      href: "/dashboard",
      icon: <MdOutlineDashboard size={24} />,
    },
    {
      name: "My Products",
      href: "/dashboard/products",
      icon: <HiOutlineShoppingBag size={24} />,
    },
    {
      name: "calendar",
      href: "/dashboard/calendar",
      icon: <CiCalendar size={24} />,
    },
    // {
    //   name: "profile",
    //   href: "/dashboard/profile",
    //   icon: <TbSettings2 size={24} />,
    // },
    // {
    //   name: "Share",
    //   href: "/dashboard/share",
    //   icon: <LiaShareAltSolid size={24} />,
    // },

  ];

  return (
    <div className="border-b border-[#E8EBF1] min-h-screen bg-[#F9FAFB] overflow-hidden ">
      <div className="mt-4 flex items-center justify-center pb-3  pt-4 border-b border-[#E8EBF1]">
          <Image src={Logo} alt="logo-sidebar" />
      </div>
    <div className=" flex flex-col gap-10 items-center py-4 space-y-6">
       
      {navLinks.map((item) => (
        <Link
          href={item.href}
          key={item.name}
          className={`pt-7 flex items-center justify-center w-[90px] h-[50px] rounded-lg ${
            pathname === item.href
              ? "bg-primary text-white"
              : " text-muted hover:bg-gray-100 hover:text-primary"
          } transition-all duration-200`}
        >
            <span className={ pathname === item.href ? "icon-style active-dashboard-page" : "icon-style"}>
            {item.icon}
            </span>
          
        </Link>
      ))}
        <button className="text-black " onClick={e => {
          navigator.clipboard.writeText("https://www.repostly.com").then(() => {
            toast("Link compied to clipboard")
          })
          }}>
          <LiaShareAltSolid size={30} />
      </button>
    </div>    
    </div>

  );
};

export default Sidebar;
