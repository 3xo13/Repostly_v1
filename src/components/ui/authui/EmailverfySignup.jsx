"use client";
import React from "react";
import Button from "@/components/common/Button";
import { useSignUp } from "@clerk/nextjs";
import { useState } from "react";
import axios from "axios";
import SpinnerWithMessage from "@/components/common/SpinnerWithMessage ";
import toast from "react-hot-toast";
const EmailverfySignup = ({username}) => {
    const {signUp , isLoaded , setActive } = useSignUp()
     const [code, setCode] = useState('')
     const [loading , setLoading] = useState(false)
  const handleVerify = async (e) => {
    e.preventDefault();

    if (!isLoaded) return;
    setLoading(true)
    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
          const response = await axios.post("/api/auth/user/register", { username });
       if (response.data.success) {
        toast.success("Account created successfully!");
       
        router.push("/auth-onboarding/connect-leboncoin");
      } else {
        throw new Error(response.data.message);
     }
      
      
      } else {
        toast.error("make sure you are set the correct code");
      }
    } catch (error) {
        // Check for specific Clerk error codes
        if (error.errors) {
          const clerkError = error.errors[0]?.message || "Something went wrong.";
          toast.error(clerkError);
        } else {
          toast.error("An error occurred during login. Please try again.");
        }
    }finally{
      setLoading(false)
    }
  };
  if(loading) {
    return <SpinnerWithMessage title={"verifying your email..."}/>
  }
  return (
    <div className="create-acount-section h-screen w-full">
      <form className="input-wrapper w-full" onSubmit={handleVerify}>
        <div className="w-full h-full mt-2 flex items-center justify-center">
          <div className="mb-4 w-full h-full flex items-center justify-cente flex-col">
            <label
              htmlFor={"code"}
              className="block text-xl font-medium text-main mb-3 w-full text-center"
            >
            Enter Verification Code
            </label>

            <input
              type="text"
              id={"code"}
              name={"code"}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={"set Verification  code"}
              className=" w-[400px] xl:main-w-[200px] lg:w-[300px] text-main outline-0 p-2 mt-1 w-full rounded-md border border-gray-200 shadow-sm sm:text-sm focus:ring-blue-500"
            />
          </div>
        </div>
        <Button type="submit" title="Verify" />
           {/* CAPTCHA Widget */}
          <div id="clerk-captcha"></div>
      </form>
 
    
    </div>
  );
};

export default EmailverfySignup;
