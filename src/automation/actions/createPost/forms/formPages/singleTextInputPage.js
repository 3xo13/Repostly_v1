import { waitForMilliseconds } from "@/automation/utils/waitForMilliseconds";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";

export const singleTextInputPage = async (page, option, inputSelector, clickTwice) => {
	const submitBtnSelector = 'form button[type="submit"]'
	try {
		await page.waitForSelector(inputSelector);
		await page.type(inputSelector, option);
		await takeScreenshot(page, "newPost", "singleInputWritten")
		await page.click(submitBtnSelector);
		if (clickTwice) {
			await page.click(submitBtnSelector);
		}
		await waitForMilliseconds(2000);
		return true;
	} catch (error) {
		console.log("🚀 ~ singleTextInputPage ~ error:", error)
		return false;
	}
}