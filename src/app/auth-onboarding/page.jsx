"use client"
import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Input from '@/components/common/Input.jsx';
import Button from '@/components/common/Button';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { useAppContext } from '@/context/ContextProviedr';

import { useRouter } from 'next/navigation'
const page = () => {
  const { setComplatedSteps } = useAppContext()
  const router = useRouter();
  const handelSubmit = (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const statuts = 200
      const data = Object.fromEntries(formData);

      if (router) {
        router.push("/auth-onboarding/connect-leboncoin");
      } else {
        console.error('Router is null');
      }



    } catch (error) {
      console.log(error);

    }
  }
  return (
    <div className="create-acount-section h-screen">
      <div className="content">
        <span>Repostly</span>
        <p>Create an account to start using Repostly to boost sales</p>
      </div>
      <form className="input-wrapper" onSubmit={handelSubmit} >
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
        <div className="checkbox-container">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            I agree to Repositly Terms of Service, Privacy Policy, and Data
            Processing Agreement
          </label>
        </div>
        <Button type="submit" title="Confirm" />
      </form>
      <Link href="/auth-Sign-In" className='text-left mt-3 text-desc'>have Acount ?</Link>
      <div className="or-section">
        <div className="line"></div>
        <span className="or-text">OR</span>
        <div className="line"></div>
      </div>

      <div>
        <button className="sigin-with-google" type="button">
          <FcGoogle />
          <span>Sign up with Google</span>
        </button>
      </div>
    </div>
  )
}

export default page
