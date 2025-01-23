import { connectToDB } from "@/db/connectToDB";
import ExternalAccount from "@/db/models/ExternalAccount";
import Post from "@/db/models/Post";
import User from "@/db/models/user";
import getAuthId from "@/utils/helpers/routs/getAuthId";
import { getUserId } from "@/utils/helpers/routs/getUserId";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const userId = await getUserId();
		console.log("🚀 ~ POST ~ userId:", userId)

		if (!userId) {
			throw new Error("user not autenticated");
		}

		// make sure the database is connected
		await connectToDB()

		const user = await User.findById(userId)

		const accountId = user.accounts[0];

		const posts = await Post.find({accountId})
		
		return NextResponse.json({success: true, posts} );
	} catch (error) {
		console.log("🚀 ~ POST ~ error:", error)
		return NextResponse.json({ success: false, message: error.message });
	}
}