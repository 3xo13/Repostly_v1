import { createPost } from "@/automation/actions/main/createPost";
import { testSubmit } from "@/automation/utils/dev/testRequest/sendTestSubmitRequest";
import { connectToDB } from "@/db/connectToDB";
import OTP from "@/db/models/OTP";
import { getUserId } from "@/utils/helpers/routs/getUserId";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const {postId} = await req.json()
		const userId = await getUserId();
		if (!userId) {
			throw new Error("user not found");
			
		}
		await createPost(userId, postId)
		// testSubmit(7)
		return NextResponse.json({success: true, message: "post created"});
	} catch (error) {
		console.log("🚀 ~ POST ~ error:", error)
		return NextResponse.json({ success: false, message: error.message });
	}
}