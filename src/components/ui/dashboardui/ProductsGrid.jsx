import React, {useEffect, useState} from 'react'
import Image from "next/image"
import image from "../../../../public/images/Rectangle 141812.png"
import {FaPlay} from "react-icons/fa";
import Lievpost from "../../../../public/images/liev-post.png"
import {useDahboardContext} from '@/context/DashboardProviedr';
import axios from 'axios';

const ProductsGrid = () => {
    const {handelModulemode} = useDahboardContext()
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.post("/api/post/query", {
                    query: {
                        active: true
                    },
                    limit: 6
                })
                if (data.success) {
                    setProducts(data.posts)
                }
            } catch (error) {
                console.log("🚀 ~ error:", error)
            }
        })()
    }, [])
    return (
        <div
            className='h-full w-4/6 rounded-[10px] grid grid-cols-1 lg:grid-cols-3 gap-3	bg-white border border-[#E5E7EB] overflow-auto p-3'>
            {
                products.map((item) => {
                    // console.log("🚀 ~ products.map ~ item:", item)
                    return (
                        <div className="p-2 full max-h-full overflow-hidden rounded-lg shadow " key={item._id}>
                            <div
                                className='rounded-[8px] w-full h-4/6 cursor-pointer relative'
                                onClick={() => handelModulemode(item.id)}>
                                <Image
                                    src={item
                                        .data
                                        .images[0] || "/images/repostly-logo.svg"}
                                    width={100}
                                    height={100}
                                    alt="product-image"
                                    className='object-contain object-center	rounded-[8px] w-full h-full w-full '/>
                                <div
                            className=' backdrop-blur-lg bg-opacity-50 bg-slate-400 absolute bottom-2 right-2 flex gap-1 text-xs		 h-[23px] border-[#F0F0F038] border rounded-[57px] text-[#ffff] items-center justify-center px-3 py-2'>
                                    <span className='w-[8px] h-[8px] rounded-[50px] bg-[#16A34A]'></span>
                                    {item.status}
                                </div>
                                <div
                                    className=' backdrop-blur-lg bg-opacity-50 bg-slate-400 absolute top-2 left-2 flex gap-1 text-xs h-[23px] border-[#F0F0F038] border rounded-[57px] text-[#ffff] items-center justify-center px-3 py-2'>
                                    <Image src={Lievpost} alt="live-post"/>
                                    live post
                                </div>
                            </div>
                            <div className="row justify-between items-center h-2/6 px-3">
                                <div>
                                    <h1 className="text-gray-600 text-lg	font-medium	">
                                        {item.data.title}
                                    </h1>
                                    {/* <p className='text-desc'>
                                        {item.data.options.description}
                                    </p> */}
                                    {/* <span
                                        className='bg-[#F3F7FF] font-normal	 flex gap-1 text-sm border-[#C0D2F3] border rounded-[20px] text-[#0C2554] items-center justify-center px-3 py-2'>
                                        {item.reposts}
                                        reposts
                                    </span> */}
                                </div>
                                <button
                                    className="w-10 h-6 bg-[#F3F4F6] flex items-center justify-center font-bold	text-lg	rounded-[50px] text-main ">
                                    <FaPlay size={12}/>
                                </button>

                            </div>

                        </div>
                    )
                })
            }

        </div>
    )
}

export default ProductsGrid