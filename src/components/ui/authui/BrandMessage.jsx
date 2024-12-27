import React from 'react'
import image1 from "../../../../public/images/brandmessag-image1.jpg"
import image2 from "../../../../public/images/brandmessag-image2.jpg"
import image3 from "../../../../public/images/2979d79b4e5aa2d3dd6b623c4e986746.jpg"
import "./styles/authui.css"
import Image from 'next/image'
const BrandMessagePanel = () => {
  return (
    <div className=' Brand-message h-screen w-full flex flex-col	 justify-center	 items-center'>
   <h2 className='w-full'>
   Lets get you started with Repostly
   </h2>
   <div className='section-messgae bg-white w-80 h-60 rounded-2xl	'>
   <Image alt='image' src={image3}  />
      <div className='badge-1'>
     
      <div className='image-section'>
        <Image alt="imag2" src={image1}  />

        </div>
          <div className=' flex flex-col w-full'>
            <p >Bookshelf Listing</p>
            <span >+23% in sales</span>
          </div>
      </div>
      <div className='badge-2'>
        <div className='image-section'>
        <Image alt='repostry-image' src={image2}  />

        </div>
          <div className=' flex flex-col w-full'>
            <p >Home sofa Listing</p>
            <span >+23% in sales</span>
          </div>
      </div>

   </div>
   <h1>Repostly</h1>
    </div>
  )
}

export default BrandMessagePanel
