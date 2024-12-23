'use client'
import React, { useState } from 'react'
import user from "../../../public/images/user-nav-image.png"
import Image from 'next/image'
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex items-center justify-center  w-full">
              <button className="text-[#374151]" >
              <IoMdNotificationsOutline size={30} className='text-main' />

            </button>
            <div className="relative inline-block text-2xl ">
        
                <button
                    type="button"
                    className="px-4 py-2 text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
                    onClick={toggleDropdown}
                >
                  <Image src={user} alt="user-image" />
                      
                </button>

                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-t-none rounded-md shadow-lg bg-gray-800 text-gray-200 ring-1 ring-black ring-opacity-5">
                        <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <li>
                                <a
                                    href="#"
                                    className={dropdownLinkStyle}
                                    onClick={closeDropdown}
                                >
                                    <CiUser />

                                    my profile
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className={dropdownLinkStyle}
                                    onClick={closeDropdown}
                                >
                                    <CiSettings />

                                    account settings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className={`${dropdownLinkStyle} border-t-2 border-gray-600`}
                                    onClick={closeDropdown}
                                >
                                    <CiLogout />

                                    log out
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

const dropdownLinkStyle = " flex items-center gap-2 block p-4 py-2 text-sm text-gray-400 hover:text-teal-500 capitalize"

export default Dropdown;