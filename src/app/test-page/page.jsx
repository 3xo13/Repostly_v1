'use client'
import {useEffect, useState} from 'react'
import axios from "axios"

function TestPage() {
    const [response, setResponse] = useState("")
    const [secresponse, setSecResponse] = useState("")
    const [otp, setOtp] = useState("")
    const [showotp, setShowOtp] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userId, setuserId] = useState("")
    const [loading, setLoading] = useState(false)

    const startLogin = async (e) => {
        e.preventDefault()
        console.log("🚀 ~ App ~ response:", response)
        setLoading(true)
        try {
            const {data} = await axios.post(
                "/api/auth/externalAccounts/put",
                {email, password, userId}
            )
            if (data.success) {
                setResponse(data)
                setShowOtp(true)
            }
        } catch (error) {
            console.log("🚀 ~ fetchData ~ error:", error)
        }
        setLoading(false)
    }

    const loginWithCookies = async (e) => {
        e.preventDefault()
        console.log("🚀 ~ App ~ response:", response)
        try {
            const {data} = await axios.post("/api/automation/createPost", {userId: "7"})
            setResponse(data)
        } catch (error) {
            console.log("🚀 ~ fetchData ~ error:", error)
        }
    }

    const handleOtp = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const {data} = await axios.post("/api/otp/put", {
                code: otp,
                userId
            })
            console.log("🚀 ~ handleSend ~ data:", data)
            setSecResponse(data)
        } catch (error) {
            console.log("🚀 ~ fetchData ~ error:", error)
        }
        setLoading(false)
    }

    return (
        <div className='w-screen h-screen bg-black flex flex-row text-black'>
            <div className='w-1/2 h-full'></div>
            <div
                className='w-1/2 h-full bg-slate-200 flex flex-col items-center justify-center gap-5'>
                <div>
                    <h1 className='text-3xl'>Repostly</h1>
                </div>
                {
                    !showotp && <form className='flex flex-col gap-5 w-8/12'>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className='w-full py-1 px-3 text-md border-2 borfer-gray-700 rounded-lg'
                                placeholder='Email of the account'/>
                            <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className='w-full py-1 px-3 text-md border-2 borfer-gray-700 rounded-lg'
                                placeholder='password of the account'/>

                            <input
                                type="text"
                                value={userId}
                                onChange={e => setuserId(e.target.value)}
                                className='w-full py-1 px-3 text-md border-2 borfer-gray-700 rounded-lg'
                                placeholder='User ID: for testing only'/>

                            <button
                                onClick={e => startLogin(e)}
                                className='w-full rounded-lg px-3 py-1 text-lg capitalize text-white/90 bg-indigo-950 hover:bg-blue-900 hover:text-slate-200'
                                disabled={loading}>add account</button>
                        </form>
                }
                {
                    showotp && <form className='flex flex-col gap-5 w-8/12'>
                            <input
                                type="text"
                                value={otp}
                                onChange={e => setOtp(e.target.value)}
                                className='w-full py-1 px-3 text-md border-2 borfer-gray-700 rounded-lg'
                                placeholder='the OTP sent to your email'/>

                            <button
                                onClick={e => handleOtp(e)}
                                className='w-full rounded-lg px-3 py-1 text-lg capitalize text-white/90 bg-indigo-950 hover:bg-blue-900 hover:text-slate-200'
                                disabled={loading}>Enter OTP</button>
                        </form>
                }
                <br/> {/* <button onClick={e => loginWithCookies(e)}>login with cookies</button> */}
            </div>
        </div>
    )
}

export default TestPage
