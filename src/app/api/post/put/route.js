import { connectToDB } from "@/db/connectToDB";
import ExternalAccount from "@/db/models/ExternalAccount";
import Post from "@/db/models/Post";
import User from "@/db/models/user";
import getAuthId from "@/utils/helpers/routs/getAuthId";
import { getUserId } from "@/utils/helpers/routs/getUserId";
import isValidEmail from "@/utils/userInputSanitization/isValidEmail";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { post, active } = await req.json();

		if (!post) {
			throw new Error("missing data!!");
		}

		const userId = await getUserId();

		if (!userId) {
			throw new Error("user not found");
		}

		// make sure the database is connected
		await connectToDB()

		const user = await User.findById(userId)

		const accountId = user.accounts[0]

		const account = await ExternalAccount.findById(accountId)
		if (!account) {
			throw new Error("account not found");
		}

		const newPostObj = {
			account: accountId,
			active: active || false,
			data: post
		}

		// create a new account, save it and return it's ID
		const newPost = new Post(newPostObj)
		if (!newPost) {
			throw new Error("unable to create a new post, please check the data and try again");
		}
		await newPost.save()

		account.posts = [...account.posts, newPost._id]
		await account.save()

		return NextResponse.json({ success: true, post: newPost });
	} catch (error) {
		console.log("🚀 ~ POST ~ error:", error)
		return NextResponse.json({ success: false, message: error.message });
	}
}