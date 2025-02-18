// todo: replace with real data
// import { post } from "@/testPostModels/homeAndGarden/householdLinenPost";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot.js";
import { getCategoryFormFunction } from "@/automation/utils/getCategoryFormFunction.js";
import { goToPage } from "@/automation/utils/goToUrl.js"; "@/automation/utils/goToUrl.js";
import { selectors } from "@/automation/utils/variables/selectors.js";
import { addTitleAndCategory } from "../createPost/forms/formAction/addTitleAndCategory";
import { loginWithCookies } from "../sharedActions/loginWithCookies";
import { acceptCookies } from "../firstLogin/acceptCookies";
import { checkFormPageUI } from "@/automation/utils/checkFormPageUI";
import { skipMultiPageForm } from "../createPost/forms/formAction/skipMultiPageForm";
import { waitForMilliseconds } from "@/automation/utils/waitForMilliseconds";
import Post from "@/db/models/Post";
import { connectToDB } from "@/db/connectToDB";


// attempt to lo
export const createPost = async (userId, postId) => {
	try {
		await connectToDB()
		const post = await Post.findById(postId)
		if (!post) {
			throw new Error("post not found");
		}
		const result = await loginWithCookies(userId)

		if (!result) {
			throw new Error("unable to create new page");
		}

		const { page, browser } = result;

		console.log("opened main page...");

		await acceptCookies(page)

		// await takeScreenshot(page, "newPost", "postPageLoaded")
		await takeScreenshot(page, "newPost", "postPageLoaded")

		await addTitleAndCategory(page, post.data)

		// const isSinglePageForm = await checkFormPageUI(page)

		// if (!isSinglePageForm) {
		// 	console.log("multi step form detected, attempting to skip...")
			
		// 	await skipMultiPageForm(page)

		// 	await addTitleAndCategory(page, post)
		// }

		// todo: create the logic of the post form 
		const categoryFormFunction = getCategoryFormFunction(post.data)
		await categoryFormFunction(page, post.data)
		// await jobOfferFromPro(page, post)

		await takeScreenshot(page, "newPost", "result")
		await browser.close()
	} catch (error) {
		console.error("🚀 ~ loginWithCookies ~ error:", error)
		// todo: handle error
	}
}