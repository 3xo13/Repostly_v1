"use client"
import React, { useState } from 'react'
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Input from '@/components/common/Input.jsx';
import Button from '@/components/common/Button';
import Link from 'next/link';
import SignIngoogle from '@/components/common/SignIngoogle';
import LoginUser from '../services/auth/Loginguser';
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
import SpinnerWithMessage from '@/components/common/SpinnerWithMessage ';
const page = () => {
    const { isLoaded, signIn, setActive } = useSignIn();
    const router = useRouter();
    const [loading, Setloading] = useState(false)
    // handel submit data
    const handelSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");
        if (isLoaded) {
            await LoginUser(email, password, signIn, router, setActive, Setloading)
        } else {
            return toast.error("Sign-in service is not ready.")
        }

    }
    if (loading) {
        return <SpinnerWithMessage title="Loging..." />
    }
    return (
        <div className="create-acount-section h-screen ">
            <div className="content">
                <span>Repostly Login</span>

            </div>
            <form className="input-wrapper" onSubmit={handelSubmit}>
                {/* custome input style */}
                <Input Placeholder="Email" name="email" type="email" icon={<MdOutlineMail />} />
                <Input
                    Placeholder="password"
                    name="password"
                    type="password"
                    icon={<RiLockPasswordLine />
                    }
                />

                {/* END custome input style */}
                <div className="flex items-center justify-center mt-8">
                    <Button type="submit" title="Login" />
                </div>
                <div id="clerk-captcha"></div>
                {/* custome SIGIN - WIHT-GOOGEL-BUTTON */}
                <SignIngoogle />
            </form>

            <div className="flex items-center justify-between mt-8 gap-10 text-head">
                <Link href="/register/">Dont have Acount ?</Link>
                <Link href="/login-In/forget-password">Forget Password ?</Link>
            </div>

            <div></div>
        </div>
    )
}

export default page
