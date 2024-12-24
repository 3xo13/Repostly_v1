import { connectToDB } from "@/db/connectToDB";
import Post from "@/db/models/Post";
import getAuthId from "@/utils/helpers/routs/getAuthId";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { postId } = await req.json();
		
		if (!postId) {
			throw new Error("missing data!!");
		}

		const authId = await getAuthId();

		if (!authId) {
			throw new Error("user not autenticated");
		}

		// make sure the database is connected
		await connectToDB()

		// create a new account, save it and return it's ID
		const post = await Post.findById(postId)

		if (!post) {
			throw new Error("post not found");
		}
		
		return NextResponse.json({success: true, post} );
	} catch (error) {
		console.log("🚀 ~ POST ~ error:", error)
		return NextResponse.json({ success: false, message: error.message });
	}
}