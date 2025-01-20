"use client"
import React from 'react'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
// import image3 from "/images/lebonc-logo.png"
import Image from 'next/image'
import {MdOutlineMail} from "react-icons/md";
import {RiLockPasswordLine} from "react-icons/ri";
import {useRouter} from 'next/navigation'
import axios from 'axios'

const page = () => {
    const router = useRouter();
    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);

          const { data } = await axios.post("/api/auth/externalAccounts/put", formData)
          if (data.success) {
            router.push(`/auth-onboarding/verify-otp/${data.accountId}`)
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
                <p>Connect your Leboncoin account to start using Repostly</p>
            </div>

            <div className="how-connect">
                <div className="repostly"></div>
                <p></p>
                <div className="leboncoin">
                    <Image src={"/images/lebonc-logo.png"} width={100} height={100} alt="Leboncion"/>
                </div>
            </div>
            <form className="input-wrapper" onSubmit={handelSubmit}>
                <Input
                    Placeholder="Leboncoin Email"
                    name="email"
                    type="text"
                    icon={<MdOutlineMail />
                    }
                />
                <Input
                    Placeholder="Leboncoin Password"
                    name="password"
                    type="password"
                    icon={<RiLockPasswordLine />
                    }
                />
                <div style={{
                        marginTop: "2rem"
                    }}></div>
                <Button type="submit" title="Connect"/>
            </form>

            <div></div>
        </div>
    )
}

export default page
