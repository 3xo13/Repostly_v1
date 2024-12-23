import { waitForMilliseconds } from "@/automation/utils/waitForMilliseconds";

export const selectOption = async (page, optionSelector) => {
	
	try {
		await page.click(optionSelector);
		await waitForMilliseconds(500);
		return true;
	} catch (error) {
		console.log("🚀 ~ selectOption ~ error:", error)
		return false;
	}
}