import React from 'react'
import { RiLockPasswordLine } from "react-icons/ri";
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import Link from 'next/link';
const page = () => {
  return (
    <div className="create-acount-section h-screen">
    <div className="content">
      <span>Repostly New Password</span>
    </div>
    <form className="input-wrapper">
      {/* custome input style */}
      <Input
        Placeholder="New Paaword"
        name="password"
        type="password"
        icon={<RiLockPasswordLine />}
      />
         <Input
        Placeholder="Conform Paaword"
        name="Confrompassword"
        type="password"
        icon={<RiLockPasswordLine />}
      />

      <div className="flex items-center justify-center mt-8">
        <Button type="submit" title="Send" />
      </div>
    </form>
<Link href="/auth-Sign-In" className='text-center mt-5 text-head'> Back To Login</Link>
  </div>
  )
}

export default page