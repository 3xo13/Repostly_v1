import { connectToDB } from "@/db/connectToDB";
import User from "@/db/models/user";
import { NextResponse } from "next/server";
import { auth } from '@clerk/nextjs/server';
import getAuthId from "@/utils/helpers/routs/getAuthId";
import ExternalAccount from "@/db/models/ExternalAccount";
import UserLog from "@/db/models/UserLog";
import Post from "@/db/models/Post";

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
        const user = await User.findOne({ authId })

        const account = await ExternalAccount.findById(user.accounts[0])

        const userLog = await UserLog.findOne({user: user._id})

        const posts = await Post.find({account: account._id})

        return NextResponse.json({ success: true, groupData: {user, account, userLog, posts} });
    } catch (error) {
        console.log("🚀 ~ POST ~ error:", error)
        return NextResponse.json({ success: false, message: error.message });
    }
}