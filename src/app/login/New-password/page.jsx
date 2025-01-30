"use client"
import React, { useState } from 'react'
import { RiLockPasswordLine } from "react-icons/ri";
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useAuth, useSignIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import Addnewpassword from '@/app/services/auth/Addnewpassword';
import SpinnerWithMessage from '@/components/common/SpinnerWithMessage ';
const page = () => {
  const router = useRouter()
  const { isSignedIn } = useAuth()
  const { isLoaded, signIn, setActive } = useSignIn()
  const [loading, Setloading] = useState(false)
  const handelSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const code = formData.get("code");
    const password = formData.get("password");
    await Addnewpassword(Setloading, signIn, code, password, router)
  }
  if (isSignedIn) {
    router.push('/dashboard')
  }
  if (loading) {
    return <SpinnerWithMessage title="Verifying your reset code..." />
  }
  return (
    <div className="create-acount-section h-screen">
      <div className="content">
        <span>Repostly New Password</span>


      </div>
      <form className="input-wrapper" onSubmit={handelSubmit}>
        {/* custome input style */}
        <Input
          Placeholder="Reset password code"
          name="code"
          type="text"

        />
        <Input
          Placeholder="New Paaword"
          name="password"
          type="password"
          icon={<RiLockPasswordLine />}
        />


        <div className="flex items-center justify-center mt-8">
          <Button type="submit" title="Send" />
        </div>
      </form>
      <Link href="/login-In" className='text-center mt-5 text-head'> Back To Login</Link>
    </div>
  )
}

export default page