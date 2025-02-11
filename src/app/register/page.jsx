"use client";
import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Input from "@/components/common/Input.jsx";
import Button from "@/components/common/Button";
import Link from "next/link";
import { useAppContext } from "@/context/ContextProviedr";
import Image from "next/image";
import Signupgoogel from "@/components/common/Signupgoogel";
import { FaUser } from "react-icons/fa";
import EmailverfySignup from "@/components/ui/authui/EmailverfySignup";
import { useState } from "react";
import { useSignUp, useAuth } from "@clerk/nextjs";
import SpinnerWithMessage from "@/components/common/SpinnerWithMessage ";
import Createuser from "../services/auth/Createuser";

const page = () => {
    const { setComplatedSteps } = useAppContext();

    const { isLoaded, signUp } = useSignUp(); // Hook for Clerk sign-up
    const [verifying, setVerifying] = useState(false);
    const [loading, setLoading] = useState(false);
    const [username, setusername] = useState("")
    // handel submit form data
    const handelSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        const { email, password, termsAccepted } = data

        await Createuser(
            setLoading,
            setVerifying,
            signUp,
            email,
            password,
            termsAccepted,
            username
        )

    };

    if (loading) {
        return <div className="create-acount-section "><SpinnerWithMessage title={"Creating Your Acounnt..."} /></div>;
    }
    if (verifying) {
        return <EmailverfySignup username={username} />;
    }
    return (
        <div className="create-acount-section ">
            <div
                className="content w-full sm:text-md flex items-center justify-center flex-col">
                <Image
                    src={"/images/logo-main.png"}
                    width={100}
                    height={100}
                    alt="logo-Repostly"
                    className="w-[200px]" />
                <p className="capitalize">Let's boost your sales, create a repostly account</p>
            </div>
            <form className="input-wrapper" onSubmit={handelSubmit}>

                <div className='cutome-input'>

                    <span><FaUser /></span>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        placeholder="set username" />
                </div>
                {/* custome input style */}

                <Input Placeholder="Email" name="email" type="email" icon={<MdOutlineMail />} />
                <Input
                    Placeholder="password"
                    name="password"
                    type="password"
                    icon={<RiLockPasswordLine />
                    }
                />
                <div className="checkbox-container">
                    <input type="checkbox" id="termsAccepted" name="termsAccepted" />
                    <label htmlFor="termsAccepted" className="w-full text-read-500">
                        I agree to Repositly Terms of Service, Privacy Policy, and Data Processing
                        Agreement
                    </label>
                </div>
                <Button type="submit" title="Confirm" />
                <div id="clerk-captcha"></div>
                <Link href="/login" className="text-left mt-3 text-desc">
                    Have an Account ?
                </Link>
                <div className="or-section">
                    <div className="line"></div>
                    <span className="or-text">OR</span>
                    <div className="line"></div>
                </div>

                <Signupgoogel loading={loading} setLoading={setLoading} /> {/* CAPTCHA Widget */}
                <div id="clerk-captcha"></div>
            </form>
        </div>
    );
};

export default page;
