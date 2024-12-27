import { NextResponse } from "next/server";
import { auth } from '@clerk/nextjs/server';
import User from "@/db/models/user";
import isValidUsername from "@/utils/userInputSanitization/isValedUsername";
import { connectToDB } from "@/db/connectToDB";

export async function POST(req) {
	try {
		const {username: name} = await req.json()
		let { authId , sessionId } = await auth();
		// for testing only
		// if(process.env.NODE_ENV == 'development') authId = `${Date.now()}`;
		
		
		
		if (!authId) {
			throw new Error("user is not signed in");
		}
		const username = name.trim();
		console.log("Auth Debug:", { authId, sessionId , username });
		const isValidName = isValidUsername(username)

		if (!isValidName) {
			throw new Error("invalid username, only letters numbers and spaces are allowed");
		}
		await connectToDB()
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