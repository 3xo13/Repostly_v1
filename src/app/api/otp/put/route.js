import { connectToDB } from "@/db/connectToDB";
import OTP from "@/db/models/OTP";
import { getUserId } from "@/utils/helpers/routs/getUserId";
import { NextResponse } from "next/server";

const isSixDigits = (str) => { const regex = /^\d{6}$/; return regex.test(str); };

export async function POST(req) {
	const { code } = await req.json();
	console.log("🚀 ~ POST ~ code:", code)
	try {
		if (!isSixDigits(code)) {
			throw new Error("the code format is incorrect");
		}
		await connectToDB()
		const userId = await getUserId();
		if (!userId) {
			throw new Error("user is not signed in");
		}
		const newOtp = new OTP({ code, userId })
		await newOtp.save()
		console.log("🚀 ~ POST ~ newOtp:", newOtp)
		return NextResponse.json({success: true, message: "new otp code created"});
	} catch (error) {
		console.log("🚀 ~ POST ~ error:", error)
		return NextResponse.json({ success: false, message: error.message });
	}
}