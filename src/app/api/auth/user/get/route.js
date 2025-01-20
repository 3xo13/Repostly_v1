import { connectToDB } from "@/db/connectToDB";
import User from "@/db/models/User";
import { NextResponse } from "next/server";
import { auth } from '@clerk/nextjs/server';
import getAuthId from "@/utils/helpers/routs/getAuthId";

export async function GET(req) {
    try {
        const authId = await getAuthId()
        console.log("🚀 ~ GET ~ authId:", authId)
        if (!authId) {
            throw new Error("user not authenticated");
        }
        // make sure the database is connected
        await connectToDB()
        // create a new account, save it and return it's ID
        const externalAccount = await User.findOne({ authId })

        return NextResponse.json({ success: true, user: externalAccount });
    } catch (error) {
        console.log("🚀 ~ POST ~ error:", error)
        return NextResponse.json({ success: false, message: error.message });
    }
}