import { createPost } from "@/automation/actions/main/createPost";
import { NextResponse } from "next/server";

export async function POST(req){
	const {userId} = await req.json()
	createPost(userId)
	console.log("🚀 ~ POST ~ userId:", userId)
	return NextResponse.json("login with cookies started for external account")
}