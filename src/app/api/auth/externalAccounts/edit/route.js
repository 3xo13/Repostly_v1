import {connectToDB} from "@/db/connectToDB";
import { Cookie } from "@/db/models/Cookie";
import ExternalAccount from "@/db/models/ExternalAccount";
import User from "@/db/models/user";
import getAuthId from "@/utils/helpers/routs/getAuthId";
import isValidEmail from "@/utils/userInputSanitization/isValidEmail";
import {NextResponse} from "next/server";

export async function POST(req) {
    const {email, password, accountId} = await req.json();
    try {

        if (!email || !password || !accountId) {
            throw new Error("missing data!!");
        }

        const authId = await getAuthId()
        if (!authId) {
            throw new Error("user not authenticated");
        }

        const isValidMail = isValidEmail(email)

        if (!isValidMail) {
            throw new Error("the provided email is not valid");
        }

        // make sure the database is connected
        await connectToDB()

        // find the account
        const account = await ExternalAccount.findById(accountId)
        if (!account) {
            throw new Error("account not found");
        }
        // updte account data
        account.email = email;
        account.password = password;
        account.loggedIn = false;
        account.cookies = [];
        await account.save()

				await Cookie.deleteMany({accountId: account._id})

        return NextResponse.json({success: true, account});
    } catch (error) {
        console.log("🚀 ~ POST ~ error:", error)
        return NextResponse.json({success: false, message: error.message});
    }
}