import { connectToDB } from "@/db/connectToDB";
import ExternalAccount from "@/db/models/ExternalAccount";
import User from "@/db/models/user";
import isValidEmail from "@/utils/userInputSanitization/isValidEmail";
import { NextResponse } from "next/server";

export async function POST(req) {
	const { email, password, userId } = await req.json();
	try {
		if (!email || !password || !userId) {
			throw new Error("missing data!!");
		}
		const isValidMail = isValidEmail(email)
		if (!isValidMail) {
			throw new Error("the provided email is not valid");
		}
		// make sure the database is connected
		await connectToDB()
		// create a new account, save it and return it's ID
		const newExternalAccount = new ExternalAccount({ email, password, userId })
		await newExternalAccount.save()

		const user = await User.findById(userId)
		user.accounts = [...user.accounts, newExternalAccount._id]
		await user.save()
		
		return NextResponse.json({success: true, accountId: newExternalAccount._id} );
	} catch (error) {
		console.log("🚀 ~ POST ~ error:", error)
		return NextResponse.json({ success: false, message: error.message });
	}
}