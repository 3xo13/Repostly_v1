import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Input from '@/components/common/Input.jsx';
import Button from '@/components/common/Button';
import Link from 'next/link';
const page = () => {
  return (
    <div className="create-acount-section h-screen">
    <div className="content">
      <span>Repostly Login</span>
    
    </div>
    <form className="input-wrapper" >
      {/* custome input style */}
      <Input
        Placeholder="Email"
        name="Email"
        type="email"
        icon={<MdOutlineMail />}
      />
      <Input
        Placeholder="password"
        name="password"
        type="password"
        icon={<RiLockPasswordLine />}
      />

  <div className="flex items-center justify-center mt-8">
  <Button type="submit" title="Login" />

  </div>
    
    </form>
 <div className="flex items-center justify-between mt-8 gap-10 text-head">
    <Link href="/auth-onboarding/">Dont have Acount ?</Link>
    <Link  href="/">Forget Password ?</Link>

  </div>


    <div>
   
    </div>
  </div>
  )
}

export default page
