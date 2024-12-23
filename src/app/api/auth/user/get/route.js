import {connectToDB} from "@/db/connectToDB";
import User from "@/db/models/user";
import {NextResponse} from "next/server";
import {auth} from '@clerk/nextjs/server';

export async function GET(req) {
    try {
        let {authId} = await auth();
        // for testing only
        if (process.env.NODE_ENV == 'development') 
            authId = 1;
        
        if (!authId) {
            throw new Error("user is not signed in");
        }
        // make sure the database is connected
        await connectToDB()
        // create a new account, save it and return it's ID
        const externalAccount = await User.findOne({authId})

        return NextResponse.json({success: true, user: externalAccount});
    } catch (error) {
        console.log("🚀 ~ POST ~ error:", error)
        return NextResponse.json({success: false, message: error.message});
    }
}