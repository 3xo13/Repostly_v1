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

const tableHeaders = ["Product Image", "Title", "Description", "Category", "Subcategory", "Status", "Reposts", "action",]

const Table = ({product, rows}) => {
    const [products, setProducts] = useState([]);
    const [errMsg, setErrMsg] = useState("")
    const postRef = useRef(null)

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.post("/api/post/getAll")
                if (data.success) {
                    setProducts(data.posts)
                }
            } catch (error) {
                console.log("🚀 ~ error:", error)
            }
        })()
    }, [])


    const handlePost = async (postId) => {
        try {
            const {data} = await axios.post("/api/test", {postId})
            if (data.success) {
                
            }
        } catch (error) {
            console.log("🚀 ~ handlePost ~ error:", error)
            
        }
    }

    const productTableHeaders = tableHeaders.map(el => <th key={uuidv4()} className="p-4 border-b border-slate-200 bg-slate-200">
        <p className=" font-semibold leading-none text-gray-700">
            {el}
        </p>
    </th>)

    const tableProducts = products.map((item) => {
            return (
                <tr
                    className="hover:bg-slate-50 border-b border-slate-200 text-center h-24 max-h-24 overflow-hidden"
                    key={item._id}>
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
                        <p className='text-wrap max-w-40'>{item.data?.options?.description}</p>
                    </td>
                    <td className="px-2">
                        <p className='text-wrap max-w-40'>{item.data.category}</p>
                    </td>
                    <td className="px-2">
                        <p className='text-wrap max-w-40'>{item.data.subCategory}</p>
                    </td>
                    <td className="px-2">
                        {''}
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
                        {/* <button
                            className="bg-[#F3F4F6] flex center w-[27px] h-[27px]  font-bold	text-xl		 rounded-full text-[#6B7280] p-1"
                            onClick={e => handlePost(item._id)}>
                            <CiPlay1 />
                        </button> */}
                        <button
                            className="bg-[#EF44441A]  flex center w-[27px] h-[27px]  font-bold	text-xl	rounded-full text-[#EF4444] p-1">
                            <HiMiniNoSymbol />

                        </button>
                    </td>
                </tr>
            )
        })
    

    return (
        <div className="col gap-3 pb-10 px-10">
            <Link href="/New-post" className='self-end'>
                <button className='px-3 py-2 border-2 border-gray-500 rounded-full text-slate-600 hover:bg-slate-200 hover:border-gray-400 font-semibold '>New Product</button>
            </Link>
            <div
                className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                <table className="w-full text-left table-auto min-w-max rounded-lg overflow-hidden">
                    <thead className='text-center'>
                        <tr >
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