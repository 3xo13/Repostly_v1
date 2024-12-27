import { connectToDB } from "@/db/connectToDB";
import OTP from "@/db/models/OTP";
import { NextResponse } from "next/server";

export async function POST(req) {
	const { code, userId } = await req.json();
	console.log("🚀 ~ POST ~ code, userId:", code, userId)
	try {
		await connectToDB()
		const newOtp = new OTP({ code, userId })
		await newOtp.save()
		console.log("🚀 ~ POST ~ newOtp:", newOtp)
		return NextResponse.json("new otp code created");
	} catch (error) {
		console.log("🚀 ~ POST ~ error:", error)
		return NextResponse.json({ success: false, error });
	}
}