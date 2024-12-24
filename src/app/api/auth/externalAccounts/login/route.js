import { loginWithOTP } from "@/automation/actions/main/loginWithOTP";
import { connectToDB } from "@/db/connectToDB";
import ExternalAccount from "@/db/models/ExternalAccount";
import { NextResponse } from "next/server";

export async function POST(req) {
	const { accountId } = await req.json();
	try {
		if (!accountId) {
			throw new Error("missing data!!");
		}

		// connect database
		await connectToDB();
		
		const account = await ExternalAccount.findById(accountId)
		if (!account) {
			throw new Error("account not found!!");
		}

		const {userId, email, password} = account;

		const result = await loginWithOTP(userId, email, password, accountId)

		if (!result) {
			throw new Error("login failed");
		}

		return NextResponse.json({success: true} );
	} catch (error) {
		console.log("🚀 ~ POST ~ error:", error)
		return NextResponse.json({ success: false, message: error.message });
	}
}