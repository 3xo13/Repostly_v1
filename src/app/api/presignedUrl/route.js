import { createPresignedUrl } from "@/db/storage/createPresignedUrl";
import { NextResponse } from "next/server";

export async function POST(req) {
	const {key} = await req.json();
	console.log("🚀 ~ POST ~ key:", key)
	try {
		const { uploadUrl, filePath } = await createPresignedUrl(key)
		console.log("🚀 ~ POST ~ { uploadUrl, filePath }:", { uploadUrl, filePath })
		return NextResponse.json({ success: true, uploadUrl, filePath })
	} catch (error) {
		console.log("🚀 ~ POST ~ error:", error)
		return NextResponse.json({ success: false, message: error.message })
	}
}