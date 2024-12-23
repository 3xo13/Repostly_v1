"use client"
import React from 'react'
import Button from '@/components/common/Button'
import LeboncLogo from "../../../../public/images/lebonc-logo.png"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();
    const handelSubmit = (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);
    const statuts = 200
            const data = Object.fromEntries(formData);
            if(statuts === 200) {
                router.push("/auth-onboarding/user-Interests")
               return setComplatedSteps("")
            }
    
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div className="create-acount-section h-screen">
      <div className="content">
        <span>Repostly</span>
        <p>
          Please input the gotten sent to your mail address KadaO@123.design
        </p>
      </div>
      <div className="how-connect">
        <div className="repostly"></div>
        <p></p>
        <div className="leboncoin">
          <Image  src={LeboncLogo} alt="Leboncion" />
        </div>
      </div>
      <form className="input-wrapper" onSubmit={handelSubmit} >
      <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs mb-5 mt-10">
            {Array(4)
            .fill(0)
            .map((_, index) => (
                <div key={index} className="w-16 h-16">
                <input
                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-2xl bg-white focus:border-[#131525] 
                    text-[#131525] focus:ring-2 focus:ring-[#131525]"                   
                    type="text"
                    maxLength={1}
                    name="otp"
                />
                </div>
            ))}
            </div>
        <div style={{ marginTop: "2rem" }}></div>
        <Button type="submit" title="Verify" />
      </form>
        <p className="mt-8 text-[#475467]">
        Didn’t get a code? <button 
            className="p-0 m-0 bg-transparent border-none outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-[#131525] text-[#131525] underline"

        type="button">Click to resend.</button>
        </p>
      <div></div>
    </div>
  )
}

export default page
