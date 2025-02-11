'use client'
import SpinnerWithMessage from '@/components/common/SpinnerWithMessage '
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const CreateGoogleUser = () => {
	const router = useRouter()
	const [errMsg, setErrMsg] = useState("");

	// create a new user in the database after sign-up with google
	useEffect(() => {
		; (async () => {
			try {
				const { data } = await axios.post("/api/auth/user/register", { username: "" })
				if (data.success) {
					router.push("/register/connect-leboncoin")
				} else {
					setErrMsg(data.message)
				}
			} catch (error) {
				console.log("🚀 ~ create new user ~ error:", error)
				setErrMsg(error.message)
			}
		})()
	}, [])

	return (
		<div className="create-acount-section h-screen">
			{!errMsg && <SpinnerWithMessage title={"creating your new account..."} />}
			{errMsg && <p className='text-red-500 text-2xl'>{errMsg}</p>}
		</div>
	)
}

export default CreateGoogleUser