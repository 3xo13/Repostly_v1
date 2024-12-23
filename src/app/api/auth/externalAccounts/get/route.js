import { connectToDB } from "@/db/connectToDB";
import ExternalAccount from "@/db/models/ExternalAccount";
import { NextResponse } from "next/server";

export async function POST(req) {
	const { accountId } = await req.json();
	try {
		if (!accountId) {
			throw new Error("missing data!!");
		}
		// make sure the database is connected
		await connectToDB()
		// create a new account, save it and return it's ID
		const externalAccount = await ExternalAccount.findById(accountId)
		
		return NextResponse.json({success: true, account: externalAccount} );
	} catch (error) {
		console.log("🚀 ~ POST ~ error:", error)
		return NextResponse.json({ success: false, message: error.message });
	}
}