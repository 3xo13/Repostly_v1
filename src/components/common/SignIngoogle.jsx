"use client"
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { useSignIn } from '@clerk/nextjs';
import toast from 'react-hot-toast';
import SpinnerWithMessage from './SpinnerWithMessage ';
const SignIngoogle = () => {
  const { signIn } = useSignIn()
  const [loadding, setLoading] = useState(false)
  const handleGoogleSignUp = async () => {
    setLoading(true)
    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/register/",
        redirectUrlComplete: "/dashboard",
      });
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      toast.error("Google sign-in failed. Please try again.");
    } finally {
      setLoading(false)

    }
  };
  if (loadding) {
    return <SpinnerWithMessage title={"Sign-In verifiying..."} />
  }
  return (
    <div>
      <button className="sigin-with-google mt-7" type="button" onClick={handleGoogleSignUp}>
        <FcGoogle />
        <span>Sign in with Google</span>
      </button>
    </div>
  )
}

export default SignIngoogle