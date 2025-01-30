"use client"
import React, {useEffect, useRef, useState} from 'react'
import Button from '@/components/common/Button'
import Image from 'next/image'
import {useRouter, useSearchParams} from 'next/navigation'
import axios from 'axios'
import CountDown from '@/components/ui/countDown/CountDown'

const page = () => {
    const params = useSearchParams()
    const id = params.get("id");

    const router = useRouter();
    const inputRefs = useRef([]);

    const [otp, setOtp] = useState(Array(6).fill(""))
    const [errMsg, setErrMsg] = useState("");
    const [isScriptRunning, setIsScriptRunning] = useState(false);

    useEffect(() => {
        if (isScriptRunning) {
            return;
        }
        (async () => {
            setIsScriptRunning(true)
            try {
                const {data} = await axios.post(
                    "https://account-otp-server.onrender.com/account_login",
                    {accountId: id}
                )
                if (data.success) {
                    router.push("/auth-onboarding/select-plan")
                } else {
                    setErrMsg("Connection attempt failed, retrying...")
                    router.refresh()
                }
            } catch (error) {
                console.log("🚀 ~ ; ~ error:", error)
                setErrMsg(error.message)
            }
            setIsScriptRunning(false)
        })();
    }, [])

    // handle change of each of the input values (otp over multiple input elements)
    const handleChange = (e, index) => {
        const value = e.target.value;
        setErrMsg("")
        if (`${value}`.length === 6) {
            setOtp(`${value}`.trim().split(""))
        } else {
            setOtp(prev => {
                const newOtp = [...prev];
                newOtp[index] = value;
                return newOtp;
            });
            if (value && index < 5) {
                inputRefs
                    .current[index + 1]
                    .focus();
            }

        }
    };

    // handle the delete of each input value
    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputRefs
                .current[index - 1]
                .focus();
        }
    };

    // handle the otp submit
    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post("/api/otp/put", {code: otp})
            if (!data.success) {
                setErrMsg(data.message)
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
                    Please input the one-time-passcode (OTP) sent to your mail address by leboncoin
                </p>
            </div>
            <div className="how-connect">
                <div className="repostly">
                    <Image
                        src={"/images/repostly-logo.svg"}
                        alt="Leboncion"
                        width={100}
                        height={100}/>
                </div>
                <p></p>
                <div className="leboncoin">
                    <Image
                        src={"/images/lebonc-logo.png"}
                        alt="Leboncion"
                        width={100}
                        height={100}/>
                </div>
            </div>
            <form className="input-wrapper" onSubmit={handelSubmit}>
                <div
                    className="flex flex-row items-center justify-between w-full max-w-[80%] mb-5 mt-10 gap-2 ">
                    {
                        otp.map((val, index) => (
                            <div key={index} className="w-16 h-16">
                                <input className="w-full h-full flex flex-col
                                        items-center justify-center text-center px-5
                                        outline-none rounded-xl border
                                        border-gray-200 text-2xl bg-white
                                        focus:border-[#131525]
                                        text-[#131525] focus:ring-2 focus:ring-[#131525]" type="text" ref={(el) => (inputRefs.current[index] = el)} onKeyDown={(e) => handleKeyDown(e, index)}
                                    // maxLength={1}
                                    name="otp" value={val} onChange={(e) => handleChange(e, index)}/>
                            </div>
                        ))
                    }
                </div>

                {/*  countdown of the login script, it takes a bit over a minute to send the otp 
 * to the user and the script is designed to wait for the otp for around 3 minut
 *  es so 4 minutes in total

 */
                }
                <CountDown seconds={240}/>

                <div style={{
                        marginTop: "2rem"
                    }}></div>
                <Button type="submit" title="Verify"/>
            </form>
            {errMsg && <p className='text-red-500 text-xl'>{errMsg}</p>}
            <p className="mt-8 text-[#475467]">
                Didn’t get a code?
                <button
                    className="p-0 m-0 bg-transparent border-none outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-[#131525] text-[#131525] underline"
                    type="button">Click to resend.</button>
            </p>
            <div></div>
        </div>

    )
}

export default page
