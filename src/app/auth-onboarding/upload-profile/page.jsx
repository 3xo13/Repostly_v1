"use client"
import React, { useState } from 'react'
import Button from '@/components/common/Button'
import { IoCloudUploadOutline } from "react-icons/io5";
import Image from 'next/image';
const page = () => {
    const [userImage , setUserImage] = useState({
        file:"",
        view:""
    })
    const handelSubmit = (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);
    const statuts = 200
            const data = Object.fromEntries(formData);
            if(statuts === 200) {
                redirect("/dashbaord")
               return setComplatedSteps("")
            }
    
        } catch (error) {
            console.log(error);
            
        }
    }   
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          // Create a preview URL for the image
          const imageUrl = URL.createObjectURL(file);
          setUserImage({ file, view: imageUrl });
        }
      };
  return (
    <div className='flex flex-col justify-center items-center  vh-100 h-screen  upload-section'>
    <div className="content mb-6 flex-col text-center	text=[#666B71] justify-center items-center mt-7">
   <span className='mb-7'>Repostly</span>
   <p>Let’s Know more about you, please tell us your industry</p>
 </div>
 <form className="user-upolad">
 <label htmlFor="user-image" className='user-image'>
     {userImage.view ? (
       <Image
         src={userImage.view}
         alt="Preview"
         className="rounded-full  object-cover"
         style={{width:"100%" , height:"100%"}}
       />
     ) : (
       <IoCloudUploadOutline size={64} />
     )}
   </label>
   <input type="file" id='user-image' hidden   onChange={handleImageChange} />
   <h3 className='text-main text-base	text-center	mt-5 font-bold	'>John Doe Kada</h3>

 </form>
 <div className='grid justify-center items-center mt-7 mb-4 pb-3'>
 <Button type={"button"}  title="Continue" />
 </div>

</div>
  )
}

export default page