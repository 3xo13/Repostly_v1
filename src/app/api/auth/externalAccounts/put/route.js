import { loginWithOTP } from "@/automation/actions/main/loginWithOTP";
import { connectToDB } from "@/db/connectToDB";
import ExternalAccount from "@/db/models/ExternalAccount";
import { NextResponse } from "next/server";

export async function POST(req) {
	const { email, password, userId } = await req.json();
	console.log("🚀 ~ POST ~ email, password, userId:", email, password, userId)
	try {
		await connectToDB()
		const newExternalAccount = new ExternalAccount({ email, password, userId })
		await newExternalAccount.save()
		console.log("🚀 ~ POST ~ newOtp:", newExternalAccount)
		loginWithOTP(userId, email, password)
		return NextResponse.json({success: true, accountId: newExternalAccount._id} );
	} catch (error) {
		console.log("🚀 ~ POST ~ error:", error)
		return NextResponse.json({ success: false, error });
	}
}