"use client"
import React, { useState } from "react";
import Input from "@/components/common/Input";
import { MdOutlineMail } from "react-icons/md";
import Button from "@/components/common/Button";
import { useAuth, useSignIn } from '@clerk/nextjs'
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation'
import Forgepassword from "@/app/services/auth/Forgepassword";
import SpinnerWithMessage from "@/components/common/SpinnerWithMessage ";
const page = () => {
  const [loading , SetLoading] = useState(false)
  const { isSignedIn } = useAuth()
  
  const router = useRouter()
  const { isLoaded, signIn, setActive } = useSignIn()
// handel submit data
  const handelSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    await Forgepassword(SetLoading ,signIn , email  , router )

  }

  if(isSignedIn){
    return router.push("/dashboard")
  }
  if(loading) {
    return <SpinnerWithMessage title={"password reset code... "} />
  }
  return (
    <div className="create-acount-section h-screen">
      <div className="content">
       
           <span>Repostly Forget Password</span>
   
       
      </div>
      <form className="input-wrapper" onSubmit={handelSubmit}>
        {/* custome input style */}
        <Input
          Placeholder="Email"
          name="email"
          type="email"
          icon={<MdOutlineMail />}
        />

        <div className="flex items-center justify-center mt-8">
          <Button type="submit" title="Send" />
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default page;
