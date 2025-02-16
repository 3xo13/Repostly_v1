"use client"
import React, { useEffect, useState } from 'react'
import {FaLongArrowAltLeft, FaPause} from "react-icons/fa";
import image from "../../../public/images/sinagle-product.png"
import Image from 'next/image';
import {FaArrowTrendUp} from "react-icons/fa6";
import {IoMdArrowDropup} from "react-icons/io";
import {MdOutlineEditNote} from "react-icons/md";
import {FaPlay} from "react-icons/fa";
import Lievpost from "../../../public/images/liev-post.png"
import image2 from "../../../public/images/Rectangle 141812.png"
import {useDahboardContext} from "@/context/DashboardProviedr"
import { useAppContext } from '@/context/ContextProviedr';
import axios from 'axios';
import EditPost from './EditPost';
import updatePost from '@/utils/helpers/functions/updatePost';



const Modulepopup = () => {
    const { moduleMode, SetModulemode, currentProductId } = useDahboardContext();
    const {userGroupData, setUserGroupData} = useAppContext(false)
    const { userLog, posts } = userGroupData || {};
    const [currentProduct, setCurrentProduct] = useState({})
    const [isEditMode, setIsEditMode] = useState(false)

    useEffect(()=>{
        if (posts?.length) {
            setCurrentProduct(posts.filter(post => post._id == currentProductId)[0])
        }
    },[posts, userGroupData, currentProductId]);

    const handleStateToggle = async (e) => {
        const active = !currentProduct.active;
        const product = await updatePost(currentProduct._id, currentProduct.data, active)
        setCurrentProduct(product);
        setUserGroupData({
            ...userGroupData,
            posts: posts.map(post => post._id == currentProductId ? {...currentProduct, active } : post)
        })
    };

    const handleEdit = () => {
        setIsEditMode(true);
    }

    if (isEditMode) {
        return <EditPost setIsEditMode={setIsEditMode} currentProduct={currentProduct} />
    }

    return (
        <div
            className={moduleMode
                ? 'opacity-1 block'
                : 'opacity-0 hidden'}>
            {/* Background Overlay */}
            <div
                className='fixed top-0 left-0 bottom-0 w-[45%] bg-black opacity-60 z-40 '
                onClick={() => SetModulemode(false)}></div>

            {/* Modal Content */}
            <div className="fixed top-0 right-0 bottom-0 w-[55%] bg-white z-40 max-h-full h-full ">
                <h2 className="text-main flex gap-4 items-center font-medium text-xl p-4 h-[10%]">
                    <span onClick={() => SetModulemode(false)}><FaLongArrowAltLeft/></span>
                    Product view
                </h2>
                <div className="flex gap-2 items-start p-3 border-t border-[#D0D5DD66] max-h-1/2 h-[45%] ">
                    
                    <Image
                        src={currentProduct?.data?.images[0] || "/images/repostly-logo.svg"}
                        width={100}
                        height={100}
                        alt="product-image"
                        className='object-contain object-center	rounded-[8px] h-full w-1/2' />
                    <div
                        className=" lg:w-[50%] border border-[#D0D5DD66] rounded-[12px] p-3 px-5">
                        <h2 className="text-main flex gap-4 items-center font-medium text-xl p-4">
                            <span><FaArrowTrendUp/></span>
                            Repost stats
                        </h2>
                        <div
                            className="flex gap-3 items-center justify-center border-t border-[#D0D5DD66] pt-3">
                            {/* <div
                                className="w-[160px] h-[130px] rounded-[8px] border border-[#F0F0F0] shadow-custom p-2 flex flex-col justify-between">

                                <span className="text-main">Today’s repost</span>

                                <div className="flex gap-3">
                                    <span className="text-main text-xl">24</span>
                                    <span className="flex gap-0 items-center text-[#16A34A]">
                                        <IoMdArrowDropup/>
                                        12%
                                    </span>
                                </div>
                            </div> */}
                            {/* <div
                                className="w-[160px] h-[130px] rounded-[8px] border border-[#F0F0F0] shadow-custom p-2 flex flex-col justify-between">

                                <span className="text-main">Overall repost</span>

                                <div className="flex gap-3">
                                    <span className="text-main text-xl">24</span>

                                </div>
                            </div> */}

                        </div>
                        <button
                            className="text-[#131525] text-sm	 mt-4 w-full h-[48px] rounded-full flex items-center justify-center gap-2 border border-[#D0D5DD]"
                            onClick={handleEdit}>
                            <MdOutlineEditNote className='text-lg font-bold	 text-main'/>
                            Edit post details
                        </button>
                        <button
                            className="text-white bg-main text-sm	 mt-4 w-full h-[48px] rounded-full flex items-center justify-center gap-2 border border-[#D0D5DD]"
                            onClick={handleStateToggle}>
                            
                            {currentProduct?.active ? 
                            <span className='row gap-3'>
                                    <FaPause className='text-lg font-bold' /> 
                                    {"Pause Reposting"}
                            </span>
                                : <span className='row gap-3'>
                                    <FaPlay className='text-lg font-bold'/>
                                    {"Continue Reposting"}
                                </span>}
                        </button>
                    </div>
                </div>
                <div className="border-b border-[#D0D5DD66] p-3 pt-10 h-[45%] col gap-3 overflow-y-auto">
                    <div className="flex gap-3">
                        {currentProduct?.active ? <div
                            className='backdrop-blur-lg bg-opacity-50 bg-[rgba(0, 0, 0, 0.22)] flex gap-1 w-fit text-xs h-[23px] border-[#F0F0F038] border rounded-[57px] text-[#191919] items-center justify-center p-1 row gap-2 '>
                                                            <Image src={Lievpost} alt="live-post"/>
                                                            live post
                                                        </div> : <div
                                className=' backdrop-blur-lg bg-opacity-50 bg-[rgba(0, 0, 0, 0.22)] flex gap-1 w-fit text-xs h-[23px] border-[#F0F0F038] border rounded-[57px] text-[#191919] items-center justify-center p-1 row gap-2 '>
                                                                <FaPause className='' />
                                                            inactive post
                                                        </div>}
                        <div
                            className=' backdrop-blur-lg bg-opacity-50 bg-[rgba(0, 0, 0, 0.22)] flex gap-1 w-[90px] text-xs		 h-[23px] border-[#F0F0F038] border rounded-[57px] text-[#191919] items-center justify-center p-1'>
                            <Image src={Lievpost} alt="liev-post"/>
                            {currentProduct?.status}
                        </div>
                    </div>
                    <h1 className='text-main text-xl w-[80%]'>
                        {`${currentProduct?.data?.title} - ${currentProduct?.data?.options?.address} ${currentProduct?.data?.options?.color || ""} - ${currentProduct?.data?.options?.state}`}
                    </h1>
                    <p>
                        Product description <br />
                        <span>{currentProduct?.data?.options?.description}</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Modulepopup