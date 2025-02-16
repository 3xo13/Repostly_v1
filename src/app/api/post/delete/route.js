import { connectToDB } from "@/db/connectToDB";
import ExternalAccount from "@/db/models/ExternalAccount";
import Post from "@/db/models/Post";
import User from "@/db/models/user";
import getAuthId from "@/utils/helpers/routs/getAuthId";
import isValidEmail from "@/utils/userInputSanitization/isValidEmail";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { postId } = await req.json();

		console.log("🚀 ~ POST ~ post, active, postId:", postId)
		if (!postId) {
			throw new Error("missing data!!");
		}

		const authId = await getAuthId();

		if (!authId) {
			throw new Error("user not autenticated");
		}

		// make sure the database is connected
		await connectToDB()

		let postDoc = await Post.deleteOne({_id: postId})

		console.log("🚀 ~ POST ~ postDoc:", postDoc)

		return NextResponse.json({ success: true });
	} catch (error) {
		console.log("🚀 ~ POST ~ error:", error)
		return NextResponse.json({ success: false, message: error.message });
	}
}