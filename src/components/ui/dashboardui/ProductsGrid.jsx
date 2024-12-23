import React from 'react'
import Image from "next/image"
import image from "../../../../public/images/Rectangle 141812.png"
import { FaPlay } from "react-icons/fa";
import Lievpost from "../../../../public/images/liev-post.png"
import { useDahboardContext } from '@/context/DashboardProviedr';

const ProductsGrid = () => {
  const {handelModulemode} = useDahboardContext()
  const products = [
    {
      id:1,
      productImage: image, // Replace with actual image path
      description: "Product description, Lorem ipsum dolor",
     titel:"Household speakers",
      category: ["Clothing", "Accessories"],
      status: "Active posting",
      reposts: 12,
      actions: { edit: true, delete: true }
    },
    {
      id:2,
      productImage: image, // Replace with actual image path
      description: "Product description, Lorem ipsum dolor",
     titel:"Household speakers",
      category: ["Clothing", "Accessories"],
      status: "Active posting",
      reposts: 12,
      actions: { edit: true, delete: true }
    },
    {
      id:3,
      productImage: image, // Replace with actual image path
      description: "Product description, Lorem ipsum dolor",
     titel:"Household speakers",
      category: ["Clothing", "Accessories"],
      status: "Active posting",
      reposts: 12,
      actions: { edit: true, delete: true }
    },
    {
      id:4,
      productImage: image, // Replace with actual image path
      description: "Product description, Lorem ipsum dolor",
     titel:"Household speakers",
      category: ["Clothing", "Accessories"],
      status: "Active posting",
      reposts: 12,
      actions: { edit: true, delete: true }
      },
      {
        id:5,
        productImage: image, // Replace with actual image path
        description: "Product description, Lorem ipsum dolor",
        titel:"Household speakers",
        category: ["Clothing", "Accessories"],
        status: "Active posting",
        reposts: 12,
        actions: { edit: true, delete: true }
      },
      {
        id:6,
        productImage: image, // Replace with actual image path
        description: "Product description, Lorem ipsum dolor",
        titel:"Household speakers",
        category: ["Clothing", "Accessories"],
        status: "Active posting",
        reposts: 12,
        actions: { edit: true, delete: true }
      },
    // Add more items as needed
  ];
  return (
    <div className='w-full lg:w-[60%] rounded-[10px] grid grid-cols-1 lg:grid-cols-3	  bg-[#FFFFFF] border border-[#E5E7EB]'>
      {
        products.map((item) => {
          return (
            <div className="w-full lg:w-[237px] mb-3  p-2" key={item.id}>
            <div className='object-cover	rounded-[8px] w-full h-[172px] relative cursor-pointer' onClick={() => handelModulemode (item.id)}>
            <Image src={item.productImage} alt="product-image"  className='object-cover	rounded-[8px] w-full h-full'/>
            <div className=' backdrop-blur-lg bg-opacity-50 bg-[rgba(0, 0, 0, 0.22)] absolute bottom-2 left-2 flex gap-1 w-[110px] text-xs		 h-[23px] border-[#F0F0F038] border rounded-[57px] text-[#ffff] items-center justify-center p-1'>
                      <span className='w-[8px] h-[8px] rounded-[50px] bg-[#16A34A]'></span>
                     {
                      item.status
                     }
                  </div>
                  <div className=' backdrop-blur-lg bg-opacity-50 bg-[rgba(0, 0, 0, 0.22)] absolute top-2 left-2 flex gap-1 w-[90px] text-xs		 h-[23px] border-[#F0F0F038] border rounded-[57px] text-[#ffff] items-center justify-center p-1'>
                      <Image  src={Lievpost} alt="liev-post" />
                      liev post
                  </div>
            </div>
              <div className="flex justify-between  pt-2">
                  <div>
                      <h1 className="text-[#191919] text-lg	font-medium	">
                     {
                      item.title
                     }
                      </h1>
                      <p className='text-desc mb-3'>
                     {
                      item.description
                     }
                      </p>
                      <span className='bg-[#F3F7FF] font-normal	 flex gap-1 w-[94px] text-sm h-[29px] border-[#C0D2F3] border rounded-[20px] text-[#0C2554] items-center justify-center p-1'>
                        {
                          item.reposts
                        }
                      reposts
                    </span>
                  </div>
              <button className="bg-[#F3F4F6] flex items-center justify-center w-[40px] h-[30px]  font-bold	text-lg	rounded-[50px] text-main p-1">
                <FaPlay size={12} />
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