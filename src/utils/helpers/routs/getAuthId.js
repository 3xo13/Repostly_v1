import {auth} from '@clerk/nextjs/server';

// should be provoked only in the scope of a route endpoint or a server
// component
export default async function getAuthId() {
    try {
        let {userId: authId} = await auth();
        console.log("🚀 ~ getAuthId ~ userId:", authId)

        if (!authId) {
            throw new Error("user is not signed in");
        }

        return authId;

    } catch (error) {
        console.log("🚀 ~ getAuthId ~ error:", error)
        return "";
    }
}