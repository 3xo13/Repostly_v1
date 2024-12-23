import React from 'react'
import Image from 'next/image'
import image from "../../../../public/images/Group 1597883001.png"
import Vactor from "../../../../public/images/add-newpost-vactor.png"
const BrandPostMessage = () => {
  return (
    <div className='relative flex items-center justify-center h-full w-full md:w-[30%]'>
        <Image src={image} alt="brandmessage-addNew-post"  className="h-[80%]"/>
        <Image src={Vactor} alt="brandmessage-addNew-post"  className="absolute bottom-0"/>
    </div>
  )
}

export default BrandPostMessage