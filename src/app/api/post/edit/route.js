import { connectToDB } from "@/db/connectToDB";
import ExternalAccount from "@/db/models/ExternalAccount";
import Post from "@/db/models/Post";
import User from "@/db/models/user";
import getAuthId from "@/utils/helpers/routs/getAuthId";
import isValidEmail from "@/utils/userInputSanitization/isValidEmail";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { post, active, postId } = await req.json();

		console.log("🚀 ~ POST ~ post, active, postId:", post, active, postId)
		if (!postId || !post) {
			throw new Error("missing data!!");
		}

		const authId = await getAuthId();

		if (!authId) {
			throw new Error("user not autenticated");
		}

		// make sure the database is connected
		await connectToDB()

		let postDoc = await Post.findById(postId)

		if (!postDoc) {
			throw new Error("post not found");
		}

		postDoc.active = active;
		postDoc.data = post;

		await postDoc.save()

		return NextResponse.json({ success: true, post: postDoc });
	} catch (error) {
		console.log("🚀 ~ POST ~ error:", error)
		return NextResponse.json({ success: false, message: error.message });
	}
}