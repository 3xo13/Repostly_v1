import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";

export const writeToInput = async (page, option, inputSelector) => {
	if (!option) {
		return;
	}
	try {
		await page.type(inputSelector, option);
		await takeScreenshot(page, "newPost", "singleInputWritten")
		return true;
	} catch (error) {
		console.log("🚀 ~ singleTextInputPage ~ error:", error)
		return false;
	}
}