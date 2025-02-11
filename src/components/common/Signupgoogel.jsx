"use client"
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { useSignUp } from '@clerk/nextjs';
import toast from 'react-hot-toast';
import SpinnerWithMessage from './SpinnerWithMessage ';

const Signupgoogel = ({ loading, setLoading }) => {
    const { signUp } = useSignUp()
    // const [loading, setLoading] = useState(false)

    const handleGoogleSignUp = async () => {
        setLoading(true)
        try {
            await signUp.authenticateWithRedirect(
                { strategy: "oauth_google", redirectUrl: "/sign-up/sso-callback", redirectUrlComplete: "/register/create-user" }
            );
        } catch (error) {
            console.error("Error during Google sign-up:", error);
            toast.error("Google sign-up failed. Please try again.");
        } finally {
            setLoading(false)
        }
    };

    // if (loading) {
    //     return <div className="create-acount-section "><SpinnerWithMessage title={"Creating Your Acounnt..."} /></div>
    // }

    return (
        <div>
            <button
                className="sigin-with-google"
                type="button"
                onClick={handleGoogleSignUp}>
                <FcGoogle />
                <span>Sign up with Google</span>
            </button>
        </div>
    )
}

export default Signupgoogel