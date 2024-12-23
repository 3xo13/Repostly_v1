import { NextResponse } from "next/server";
import { auth } from '@clerk/nextjs/server';
import User from "@/db/models/user";
import isValidUsername from "@/utils/userInputSanitization/isValedUsername";

export async function POST(req) {
	try {
		const {username: name} = await req.json()
		const { authId } = await auth()
		if (!authId) {
			throw new Error("user is not signed in");
		}
		const username = name.trim();

		const isValidName = isValidUsername(username)

		if (!isValidName) {
			throw new Error("invalid username, only letters numbers and spaces are allowed");
		}

		const newUser = new User({username, authId})
		if (!newUser) {
			throw new Error("unable to create a new user, make sure you don't have an account already and try again");
		}
		await newUser.save();


		return NextResponse.json({success: true, userId: newUser._id})
	} catch (error) {
		console.log("🚀 ~ POST ~ error:", error)
		return NextResponse.json({success: false, message: error.message})
	}
}