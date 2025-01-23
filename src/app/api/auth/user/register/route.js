import { NextResponse } from "next/server";
import { auth } from '@clerk/nextjs/server';
import User from "@/db/models/user";
import isValidUsername from "@/utils/userInputSanitization/isValedUsername";
import { connectToDB } from "@/db/connectToDB";

export async function POST(req) {
	try {
		let { username: name } = await req.json()
		console.log("🚀 ~ POST ~ name:", name)
		let { userId: authId, sessionId } = await auth();
		console.log("🚀 ~ POST ~ sessionId:", sessionId)
		console.log("🚀 ~ POST ~ authId:", authId)

		if (!authId) {
			throw new Error("user is not signed in");
		}

		if (!name) {
			name = `${Date.now()}`
			console.log("🚀 ~ POST ~ name timestamp:", name)
		}

		const username = name.trim();
		console.log("Auth Debug:", { authId, sessionId, username });
		const isValidName = isValidUsername(username)

		if (!isValidName) {
			throw new Error("invalid username, only letters numbers and spaces are allowed");
		}
		await connectToDB()
		const newUser = new User({ username, authId })
		if (!newUser) {
			throw new Error("unable to create a new user, make sure you don't have an account already and try again");
		}
		await newUser.save();


		return NextResponse.json({ success: true, userId: newUser._id })
	} catch (error) {
		console.log("🚀 ~ POST ~ error:", error)
		return NextResponse.json({ success: false, message: error.message })
	}
}