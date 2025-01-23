"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import image from "../../../public/images/product.png"
import Lievpost from "../../../public/images/liev-post.png"
import {CiPlay1} from "react-icons/ci";
import {HiMiniNoSymbol} from "react-icons/hi2";
import axios from 'axios';

// const products = [
//     {
//         id: 1,
//         productImage: image, // Replace with actual image path
//         description: "Product description, Lorem ipsum dolor sit amet",
//         titel: "Household speakers",
//         category: [
//             "Clothing", "Accessories"
//         ],
//         status: "Active posting",
//         reposts: 12,
//         actions: {
//             edit: true,
//             delete: true
//         }
//     }, {
//         id: 2,
//         productImage: image, // Replace with actual image path
//         description: "Product description, Lorem ipsum dolor sit amet",
//         titel: "Household speakers",
//         category: [
//             "Clothing", "Accessories"
//         ],
//         status: "Active posting",
//         reposts: 12,
//         actions: {
//             edit: true,
//             delete: true
//         }
//     }, {
//         id: 3,
//         productImage: image, // Replace with actual image path
//         description: "Product description, Lorem ipsum dolor sit amet",
//         titel: "Household speakers",
//         category: [
//             "Clothing", "Accessories"
//         ],
//         status: "Active posting",
//         reposts: 12,
//         actions: {
//             edit: true,
//             delete: true
//         }
//     }, {
//         id: 4,
//         productImage: image, // Replace with actual image path
//         description: "Product description, Lorem ipsum dolor sit amet",
//         titel: "Household speakers",
//         category: [
//             "Clothing", "Accessories"
//         ],
//         status: "Active posting",
//         reposts: 12,
//         actions: {
//             edit: true,
//             delete: true
//         }
//     }, {
//         id: 5,
//         productImage: image, // Replace with actual image path
//         description: "Product description, Lorem ipsum dolor sit amet",
//         titel: "Household speakers",
//         category: [
//             "Clothing", "Accessories"
//         ],
//         status: "Active posting",
//         reposts: 12,
//         actions: {
//             edit: true,
//             delete: true
//         }
//     },
//     // Add more items as needed
// ];

const Table = ({product, rows}) => {
    const [products, setProducts] = useState([]);
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
    return (
        <div className="w-full flex justify-between items-center mb-3 mt-1 pl-3">
            <div
                className="relative flex flex-col w-full h-full  text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                <table className="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-slate-200 bg-slate-50">
                                <p className="text-sm font-normal leading-none text-slate-500">
                                    Product Image
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-200 bg-slate-50">
                                <p className="text-sm font-normal leading-none text-slate-500">
                                    Description
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-200 bg-slate-50">
                                <p className="text-sm font-normal leading-none text-slate-500">
                                    Category
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-200 bg-slate-50">
                                <p className="text-sm font-normal leading-none text-slate-500">
                                    Status
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-200 bg-slate-50">
                                <p className="text-sm font-normal leading-none text-slate-500">
                                    Reposts

                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-200 bg-slate-50 h-full">
                                <p className="text-sm font-normal leading-none text-slate-500">
                                    action

                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((item) => {
                                return (
                                    <tr
                                        className="hover:bg-slate-50 border-b border-slate-200 h-full"
                                        key={item._id}>
                                        <td className="p-4 py-5">
                                            <Image
                                                className='w-[92px] h-[92px] rounded-[6px]'
                                                src={item.data.images[0] || "/images/repostly-logo.svg"} width={100} height={100}
                                                alt="productName"/>
                                        </td>
                                        <td className="p-4 py-5">
                                            <div className="text-sm text-slate-500">
                                                <span
                                                    className='bg-[#16A34A1A] flex gap-1 w-[83px] h-[27px] rounded-[12px] text-[#16A34A] items-center justify-center p-1'>
                                                    <Image src={Lievpost} alt="live-post"/>
                                                    live post
                                                </span>
                                                <h2 className="text-head mt-3 ">
                                                    {item.data.titel}
                                                </h2>
                                                <p className="mt-2">

                                                    {item.data.options.description}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="p-4 py-5">
                                            <div className="text-sm text-slate-500">
                                                <div className="grid grid-cols-2">
                                                    {/* {
                                                        item
                                                            .category
                                                            .map((item) => {
                                                                return <span
                                                                    key={item}
                                                                    className=' border-[#F0F0F0] border flex items-center justify-center  w-[95px] h-[27px] rounded-[50px]   p-1'>

                                                                    {item}
                                                                </span>
                                                            })
                                                    } */}

                                                </div>

                                            </div>
                                        </td>
                                        <td className="p-4 py-5">
                                            {/* <div
                                                className=' flex gap-1 w-[132px] text-sm h-[29px] border-[#F0F0F0] border rounded-[60px] text-[#191919] items-center justify-center p-1'>
                                                <span className='w-[8px] h-[8px] rounded-[50px] bg-[#16A34A]'></span>
                                                {item.status}
                                            </div> */}
                                        </td>
                                        <td className="p-4 py-5">
                                            <div
                                                className='bg-[#F3F7FF] font-normal	 flex gap-1 w-[94px] text-sm h-[29px] border-[#C0D2F3] border rounded-[20px] text-[#0C2554] items-center justify-center p-1'>
                                                <h2>{item.reposts}</h2>
                                                reposts
                                            </div>
                                        </td>
                                        <td className=" p-4 flex gap-4 items-center justify-center h-[125px]">
                                            {/* Fixed alignment */}
                                            <button
                                                className="bg-[#F3F4F6] flex items-center justify-center w-[35px] h-[35px]  font-bold	text-xl		 rounded-full text-[#6B7280] p-1">
                                                <CiPlay1/>
                                            </button>
                                            <button
                                                className="bg-[#EF44441A]  flex items-center justify-center w-[35px] h-[35px]  font-bold	text-xl			 rounded-full text-[#EF4444] p-1">
                                                <HiMiniNoSymbol/>

                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

                <div className="flex justify-between items-center px-4 py-3">
                    <div className="text-sm text-slate-500">
                        Showing
                        <b>1-5</b>
                        of 45
                    </div>
                    <div className="flex space-x-1">
                        <button
                            className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                            Prev
                        </button>
                        <button
                            className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-slate-800 border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease">
                            1
                        </button>
                        <button
                            className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                            2
                        </button>
                        <button
                            className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                            3
                        </button>
                        <button
                            className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table