'use client'
import React, {useEffect, useState} from "react";
import Image from "next/image";
import image from "../../../../../public/images/Vector 13 (1).png";
import image2 from "../../../../../public/images/Icon.png";
import largevac from "../../../../../public/images/lg.png";
import medvac from "../../../../../public/images/med.png";
import smvac from "../../../../../public/images/smail.png";
import icon1 from "../../../../../public/images/card1.png";
import icon2 from "../../../../../public/images/card2.png";
import icon3 from "../../../../../public/images/card3.png";
import {IoMdArrowDropup} from "react-icons/io";
import {useAppContext} from "@/context/ContextProviedr";

const Cards = () => {
    const {userGroupData, setUserGroupData} = useAppContext()
    const {userLog, posts} = userGroupData || {};
    const {successfulPostCount, failPostCount, totalPostCount, todayPosts} = userLog || {};
    const {successfulPostCount: successToday, failPostCount: failToday, totalPostCount: totalToday} = todayPosts || {}

    const activePostCount = posts ? posts.filter(el => el.active == true).length : 0

    return (
        <div
            className="full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-2">
            {/* Card */}
            <div className="bg-white shadow-custom  full rounded-[12px] p-2 relative">
                <div className="flex justify-between p-2 items-center">
                    <div className="flex gap-4 items-center ">
                        <Image src={icon1} alt="icon" className="w-[18px] h-[18px] rounded-[23px]"/>
                        <span className="text-[#191919]">Today’s reposts</span>
                    </div>
                    <span className="text-[#191919]">...</span>
                </div>
                <div className=" flex gap-3 items-end justify-start h-3/4	p-2">
                    <h1 className="text-head text-3xl	font-semibold	">{successToday || 0}</h1>
                    <span
                        className="bg-[#16A34A1A] flex gap-1 w-[53px] h-[27px] rounded-[12px] text-[#16A34A] items-center justify-center p-1">
                        <IoMdArrowDropup/>
                        12
                    </span>
                </div>
                <Image alt="vactor" src={image} className="absolute bottom-0	right-px"/>
            </div>
            <div className="bg-white shadow-custom  full rounded-[12px]  p-4 relative">
                <div className="flex justify-between p-2 items-center">
                    <div className="flex gap-4 items-center ">
                        <Image src={icon2} alt="icon" className="w-[30px] h-[30px] "/>
                        <span className="text-[#191919]">Active products</span>
                    </div>
                    <span className="text-[#191919]">...</span>
                </div>
                <div className=" flex gap-3 items-end justify-start h-3/4	p-2">
                    <h1 className="text-head text-3xl	font-semibold	">{activePostCount}</h1>

                </div>
                <Image alt="vactor" src={image} className="absolute bottom-0	right-px"/>
            </div>
            <div className="bg-white shadow-custom  full rounded-[12px]  p-4 relative">
                <div className="flex justify-between p-2 items-center">
                    <div className="flex gap-4 items-center ">
                        <Image src={icon3} alt="icon" className="w-[30px] h-[30px] "/>
                        <span className="text-[#191919]">Overall reposts</span>
                    </div>
                    <span className="text-[#191919]">...</span>
                </div>
                <div className=" flex gap-3 items-end justify-start h-3/4	p-2">
                    <h1 className="text-head text-3xl	font-semibold	">{successfulPostCount}</h1>

                </div>
                <Image alt="vactor" src={image} className="absolute bottom-0	right-px"/>
            </div>
            <div
                className="bg-[#145A68] shadow-custom border-2-[#145A68] flex flex-col	  items-center justify-center  full rounded-[12px]  p-4 relative">
                <h2 className="text-white font-semibold mb-2">Upgrade To Pro</h2>
                <p className="text-white text-center">
                    Upgrade to Pro for uninterrupted access to premium features
                </p>
                <Image
                    src={image2}
                    alt="vactor"
                    className="absolute bottom-5 left-20 rigth-5 top-1	"/>
                <Image src={largevac} alt="vactor" className="absolute  right-8 top-10	"/>
                <Image src={medvac} alt="vactor" className="absolute bottom-10 left-10 	"/>
                <Image src={smvac} alt="vactor" className="absolute top-10 left-10 "/>
                <Image src={smvac} alt="vactor" className="absolute bottom-10 right-10 "/>
            </div>
        </div>
    );
};

export default Cards;
