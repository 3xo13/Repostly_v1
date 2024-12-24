import { connectToDB } from "@/db/connectToDB";
import ExternalAccount from "@/db/models/ExternalAccount";
import Post from "@/db/models/Post";
import User from "@/db/models/user";
import getAuthId from "@/utils/helpers/routs/getAuthId";
import isValidEmail from "@/utils/userInputSanitization/isValidEmail";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { accountId, post, active, postId } = await req.json();
		
		if (!accountId || !post) {
			throw new Error("missing data!!");
		}

		const authId = await getAuthId();

		if (!authId) {
			throw new Error("user not autenticated");
		}

		// make sure the database is connected
		await connectToDB()

		// create a new account, save it and return it's ID
		let postDoc = await Post.findById(postId)

		if (!postDoc) {
			throw new Error("post not found");
		}

		postDoc = {
			...postDoc,
			active: active || false,
			data: post
		}

		await postDoc.save()
		
		return NextResponse.json({success: true, post: postDoc} );
	} catch (error) {
		console.log("🚀 ~ POST ~ error:", error)
		return NextResponse.json({ success: false, message: error.message });
	}
}