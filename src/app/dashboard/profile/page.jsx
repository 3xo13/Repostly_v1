import React from 'react'
import Image from 'next/image'
import VactorImage from "../../../../public/images/vactor-profile.png"
import userImage from "../../../../public/images/profile-image.png"
import lobocionIcon from "../../../../public/images/image 15.png"
import InfoInput from "@/components/common/InfoInput"
import { CiCircleCheck } from "react-icons/ci";

const Profile = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-20">
        <div className=" bg-[#ffff] border border-[#E5E7EB] rounded-[16px] min-w-[760px] h-[326px]">
            <div className="bg-main relative h-[180px] w-full rounded-[16px]">
           <Image src={VactorImage} alt='vactor-image-profile' className=" absolute	bottom-[-10px] top-0 rigth-1" />
           <div className="border-4 border-[#ffff] rounded-[50%] w-[106px] h-[106px] absolute bottom-[-25px] left-[3rem]">
                <Image src={userImage} alt="user-image" className='w-full h-full rounded-[50%]' />
            </div>
            </div>
         <div className="flex justify-between w-full mt-5 p-4">
            <div className='ml-10'>
              <h1 className="text-head">
                Scott Mcdaniel

              </h1>
              <p className="text-desc">
              scott.mcdaniel@sm.com
              </p>
            </div>
                  <div className=" max-w-sm mx-auto">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Profile Completion</span>
                      <span className="text-sm font-medium text-gray-700">45%</span>
                    </div>
                    <div className="relative w-full h-2 bg-gray-200 rounded-full">
                      <div
                        className="absolute h-2 bg-blue-500 rounded-full"
                        style={{ width: '45%' }}
                      ></div>
                    </div>
                </div>

         </div>
        </div>
        <form className="mt-5 bg-[#ffff] border border-[#E5E7EB] rounded-[16px] w-full lg:w-[760px]">
        <div className="border-b w-full p-5">
          <h1 className="text-head">Personal information</h1>
          <span className="text-desc">Caption</span>
        </div>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 p-5">
    <InfoInput name="userName" label="First name" placeholder="First name" />
    <InfoInput name="userName" label="Last name" placeholder="Last name" />
    <InfoInput name="email" label="Email" placeholder="Enter your email" />
    <InfoInput name="phone" label="Phone" placeholder="Phone" />
    <InfoInput name="country" label="Country" placeholder="Country" />
    <InfoInput name="state" label="State" placeholder="State" />
  </div>
  <div className="flex justify-end gap-3 p-5">
    <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
      Cancel
    </button>
    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
      Save changes
    </button>
  </div>
</form>
  <div className="mt-5 pb-5 bg-[#ffff] border border-[#E5E7EB] rounded-[16px] w-full lg:w-[760px]">
      <div className="border-b w-full p-5">
                <h1 className="text-head">My connections</h1>
                <span className="text-desc">
                Link leboncoin to your account
                </span>
      </div>
      <div className="mt-5 mx-auto p-5 bg-[#ffff] flex justify-between items-center border border-[#E5E7EB] rounded-[16px] w-[90%] h-[90px]">
        <div className= "flex gap-4 ">
          <Image src={lobocionIcon} alt="leboncoin icon" />
          <div>
              <h1 className="text-head">Leboncoin</h1>
                <span className="text-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing eli
                </span>
          </div>
        </div>
        <CiCircleCheck  className="text-[#16A34A] text-xl	font-medium	"/>

      </div>
  </div>
    </div>
  )
}

export default Profile
