import { testSubmit } from "@/automation/utils/dev/testRequest/sendTestSubmitRequest";
import { connectToDB } from "@/db/connectToDB";
import OTP from "@/db/models/OTP";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		testSubmit(7)
		return NextResponse.json("creating new post started...");
	} catch (error) {
		console.log("🚀 ~ POST ~ error:", error)
		return NextResponse.json({ success: false, error });
	}
}