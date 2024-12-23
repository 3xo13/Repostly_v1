import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import image from "../../../public/images/sinagle-product.png"
import Image from 'next/image';
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdArrowDropup } from "react-icons/io";
import { MdOutlineEditNote } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import Lievpost from "../../../public/images/liev-post.png"
import image2 from "../../../public/images/Rectangle 141812.png"
import {useDahboardContext} from "@/context/DashboardProviedr"
const Modulepopup = () => {
    const {moduleMode , SetModulemode} = useDahboardContext()
  return (
    <div className={moduleMode ?  'opacity-1 block' : 'opacity-0 hidden'}>
     {/* Background Overlay */}
     <div className='fixed top-0 left-0 bottom-0 w-[45%] bg-black opacity-60 z-40' onClick={() => SetModulemode(false)}></div>

     {/* Modal Content */}
     <div className="fixed top-0 right-0 bottom-0 w-[55%] bg-white z-40">
            <h2 className="text-main flex gap-4 items-center font-medium text-xl p-4">
                <span onClick={() => SetModulemode(false)}><FaLongArrowAltLeft /></span>
                Product view
            </h2>
            <div className="flex gap-2 items-start p-3 mt-3 border-t border-[#D0D5DD66]">
                {/* Correct the class attribute for Image */}
                <Image 
                src={image} 
                alt="product-image" 
                className="min-h-[355px] lg:w-[50%] rounded-[8px]"
                />
                <div className="min-h-[300px] lg:w-[50%] border border-[#D0D5DD66] rounded-[12px] p-3 px-5">
                <h2 className="text-main flex gap-4 items-center font-medium text-xl p-4">
                    <span><FaArrowTrendUp /></span>
                    Repost stats
                </h2>
                <div className="flex gap-3 items-center justify-center border-t border-[#D0D5DD66] pt-3">
                <div className="w-[160px] h-[130px] rounded-[8px] border border-[#F0F0F0] shadow-custom p-2 flex flex-col justify-between">
                        
                        <span className="text-main">Today’s repost</span>
                        
                       
                        <div className="flex gap-3">
                            <span className="text-main text-xl">24</span>
                            <span className="flex gap-0 items-center text-[#16A34A]">
                            <IoMdArrowDropup />
                            12%
                            </span>
                        </div>
                        </div>
                        <div className="w-[160px] h-[130px] rounded-[8px] border border-[#F0F0F0] shadow-custom p-2 flex flex-col justify-between">
                        
                        <span className="text-main">Overall repost</span>
                        
                       
                        <div className="flex gap-3">
                            <span className="text-main text-xl">24</span>
                       
                        </div>
                        </div>
                    

                </div>
                <button className="text-[#131525] text-sm	 mt-4 w-full h-[48px] rounded-full flex items-center justify-center gap-2 border border-[#D0D5DD]">
                        <MdOutlineEditNote  className='text-lg font-bold	 text-main'/>
                            Edit post details
                    </button>
                    <button className="text-white bg-main text-sm	 mt-4 w-full h-[48px] rounded-full flex items-center justify-center gap-2 border border-[#D0D5DD]">
                        <FaPlay  className='text-lg font-bold'/>
                        Pause Reposting                    
                        </button>
                </div>
            </div>
            <div className="border-b border-[#D0D5DD66] p-3 mt-3">
                    <div className="flex gap-3">
                <div className=' backdrop-blur-lg bg-opacity-50 bg-[#6D85371A]   flex gap-1 w-[90px] text-xs		 h-[23px] border-[#F0F0F038] border rounded-[57px] text-[#289049] items-center justify-center p-1'>
                      <Image  src={Lievpost} alt="liev-post" />
                      liev post
                  </div>
                  <div className=' backdrop-blur-lg bg-opacity-50 bg-[rgba(0, 0, 0, 0.22)] flex gap-1 w-[90px] text-xs		 h-[23px] border-[#F0F0F038] border rounded-[57px] text-[#191919] items-center justify-center p-1'>
                      <Image  src={Lievpost} alt="liev-post" />
                      liev post
                  </div>
                    </div>
                    <h1 className='text-main text-xl w-[80%] mt-2'>
                    Size 10.5 - New Balance 990v6 Made in USA Grey - mint condition
                    </h1>
                    <p>
                    Product description, "Lorem ipsum dolor sit amet, dolor tod consectetur adipiscing
                    </p>
            </div>
</div>

   </div>
  )
}

export default Modulepopup