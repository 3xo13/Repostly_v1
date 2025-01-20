import { connectToDB } from "@/db/connectToDB";
import ExternalAccount from "@/db/models/ExternalAccount";
import Post from "@/db/models/Post";
import User from "@/db/models/user";
import getAuthId from "@/utils/helpers/routs/getAuthId";
import isValidEmail from "@/utils/userInputSanitization/isValidEmail";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { accountId, post, active } = await req.json();

		if (!accountId || !post) {
			throw new Error("missing data!!");
		}

		const authId = await getAuthId();

		if (!authId) {
			throw new Error("user not autenticated");
		}

		// make sure the database is connected
		await connectToDB()

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