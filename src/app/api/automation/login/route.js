import { loginWithOTP } from "@/automation/actions/main/loginWithOTP";
import { NextResponse } from "next/server";

export async function POST(req){
	const {userId} = await req.json()
	loginWithOTP(userId)
	return NextResponse.json("login with otp started for external account")
}