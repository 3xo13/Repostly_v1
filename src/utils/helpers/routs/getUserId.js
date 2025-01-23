import User from "@/db/models/user";
import getAuthId from "./getAuthId"
import { connectToDB } from "@/db/connectToDB";

export const getUserId = async () => {
	try {
		const authId = await getAuthId();
		await connectToDB()
		const user = await User.findOne({ authId })
		if (!user) {
			throw new Error("user not found!!");
		}
		return user._id
	} catch (error) {
		console.log("🚀 ~ getUserId ~ error:", error)
		return ""
	}

}