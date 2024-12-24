import {connectToDB} from "@/db/connectToDB";
import User from "@/db/models/user";
import {NextResponse} from "next/server";
import {auth} from '@clerk/nextjs/server';
import isValidUsername from "@/utils/userInputSanitization/isValedUsername";
import getAuthId from "@/utils/helpers/routs/getAuthId";

export async function POST(req) {
    try {
        const {phone, username, userId} = await req.json();
        if (!phone || !username || !userId) {
            throw new Error("missing data!!");
        }

        const isValidName = isValidUsername(username);
        if (!isValidName) {
            throw new Error("username not valid");
        }
        const authId = await getAuthId()
        console.log("🚀 ~ PUT ~ authId:", authId)
        if (!authId) {
            throw new Error("user not authenticated");
        }
        // make sure the database is connected
        await connectToDB()
        // find and update user doc
        const user = await User.findById(userId)
        if (authId !== user.authId) {
            console.log("🚀 ~ PUT ~ user.authId:", user.authId)
            throw new Error("data mismatch");
        }
        user.phone = phone;
        user.username = username;
        await user.save();

        return NextResponse.json({success: true, user});
    } catch (error) {
        console.log("🚀 ~ POST ~ error:", error)
        return NextResponse.json({success: false, message: error.message});
    }
}