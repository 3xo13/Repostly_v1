"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image"
import image from "../../../public/images/product.png"
import Lievpost from "../../../public/images/liev-post.png"
import {CiPlay1} from "react-icons/ci";
import {HiMiniNoSymbol} from "react-icons/hi2";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'
import { useDahboardContext } from '@/context/DashboardProviedr'
import { FaPause } from 'react-icons/fa'
import { useAppContext } from '@/context/ContextProviedr'
import updatePost from '@/utils/helpers/functions/updatePost'

const tableHeaders = ["Product Image", "Title", "Description", "Address", "Subcategory", "Status", "Reposts", "action",]

const Table = ({product, rows}) => {
    const { moduleMode, handelModulemode, currentProductId } = useDahboardContext();
    const {userGroupData, setUserGroupData} = useAppContext();
    const [products, setProducts] = useState([]);
    const [errMsg, setErrMsg] = useState("")
    const postRef = useRef(null)

    useEffect(() => {
        if (userGroupData?.posts) {
            setProducts(userGroupData.posts)
        }
    }, [userGroupData])


    const handlePostClick = async (e, id) => {
        handelModulemode(id)
    }

    const handlePostDelete = async (e, id) => {
        e.stopPropagation()
        console.log("🚀 ~ handlePostDelete ~ id:", id)
        try {
            const {data} = await axios.post('/api/post/delete', {postId: id})
            if (data.success) {
                const newData = {
                    ...userGroupData,
                    posts: userGroupData.posts.filter(el => el._id == id ? null : el)
                }
                setUserGroupData(newData)
            }
            console.log("🚀 ~ handlePostDelete ~ data:", data)
        } catch (error) {
            console.log("🚀 ~ handlePostDelete ~ error:", error)
        }
    }

    const handleStateToggle = async (e, post) => {
        e.stopPropagation()
        const {_id, data, active} = post;
        console.log("🚀 ~ handleStateToggle ~ data:", data)
        const product = await updatePost(_id, data, active);
        setUserGroupData({
            ...userGroupData,
            posts: userGroupData.posts.map(post => post._id == _id ? { ...post, active: !active } : post)
        })
    };

    const productTableHeaders = tableHeaders.map(el => <th key={uuidv4()} className="p-4 border-b border-slate-200 bg-slate-200">
        <p className=" font-semibold leading-none text-gray-700">
            {el}
        </p>
    </th>)

    const tableProducts = products.map((item) => {
            return (
                <tr
                    className="hover:bg-slate-50 border-b border-slate-200 text-center h-24 max-h-24 overflow-hidden cursor-pointer"
                    key={item._id}
                    onClick={e => handlePostClick(e, item._id)}>
                    <td className="px-2">
                        <Image
                            className='w-[70px] h-[70px] rounded-[6px] object-contain bg-gray-200'
                            src={item.data.images[0] || "/images/repostly-logo.svg"} width={100} height={100}
                            alt="productName" />
                    </td>
                    <td className="px-2">
                        <div className="text-sm text-slate-500">
                            <h2 className="text-head text-wrap max-w-40">
                                {item.data.title}
                            </h2>
                        </div>
                    </td>
                    <td className="px-2">
                        <p className='text-wrap max-w-40 line-clamp-3'>{item.data?.options?.description}</p>
                    </td>
                    <td className="px-2">
                        <p className='text-wrap max-w-40'>{item.data?.options?.address}</p>
                    </td>
                    <td className="px-2">
                        <p className='text-wrap max-w-40'>{item.data.subCategory}</p>
                    </td>
                    <td className="px-2 capitalize">
                        {item.status}
                    </td>
                    <td className="px-2">
                        <div
                            className='bg-[#F3F7FF] font-normal	flex gap-1 w-[94px] text-sm h-[29px] border-[#C0D2F3] border rounded-[20px] text-[#0C2554] center p-1'>
                            <h2>{item.reposts}</h2>
                            reposts
                        </div>
                    </td>
                    <td className=" px-2 gap-4 col center h-[125px]">
                        {/* Fixed alignment */}
                        <button
                            className="bg-[#F3F4F6] flex center w-[27px] h-[27px]  font-bold	text-xl		 rounded-full text-[#6B7280] p-1"
                            onClick={e => handleStateToggle(e, item)}>
                                {item.active ? <CiPlay1 /> : <FaPause width={"10px"} height={"10px"}/> }
                            
                        </button>
                        <button
                            className="bg-[#EF44441A]  flex center w-[27px] h-[27px]  font-bold	text-xl	rounded-full text-[#EF4444] p-1"
                            onClick={e => handlePostDelete(e, item._id)}>
                            <HiMiniNoSymbol />
                        </button>
                    </td>
                </tr>
            )
        })
    
    

    return (
        <div className="col gap-3 pb-10 ">
            <div
                className="relative flex flex-col h-full text-gray-700 bg-white shadow-md rounded-lg">
                <table className="w-full text-left table-auto min-w-max rounded-lg overflow-hidden">
                    <thead className='text-center sticky -top-5'>
                        <tr className=''>
                            {productTableHeaders}
                        </tr>
                    </thead>
                    <tbody>
                        {tableProducts}
                    </tbody>
                </table>
                {/* <div className="flex justify-between items-center px-4 py-3">
                    <div className="text-sm text-slate-500">
                        Showing
                        <b>1-5</b>
                        of 45
                    </div>
                    <div className="flex space-x-1">
                        <button
                            className="tablePageBtn transition duration-200 ease">
                            Prev
                        </button>
                        <button
                            className="tablePageBtn transition duration-200 ease">
                            1
                        </button>
                        <button
                            className="tablePageBtn transition duration-200 ease">
                            2
                        </button>
                        <button
                            className="tablePageBtn transition duration-200 ease">
                            3
                        </button>
                        <button
                            className="tablePageBtn transition duration-200 ease">
                            Next
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Table