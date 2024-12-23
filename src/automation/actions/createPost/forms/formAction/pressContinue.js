import { waitForMilliseconds } from "@/automation/utils/waitForMilliseconds";
import { selectors } from "@/automation/utils/variables/selectors.js";
const publishBtn = "#mainContent > section > div.bottom-none.left-none.z-sticky.min-h-sz-64.w-full.bg-surface.px-lg.shadow.sticky > div > button"

export const pressContinue = async (page) => {
	const continueBtnSelector = selectors.continueBtn;
	try {
		// wait for button selector
		await page.waitForSelector(continueBtnSelector)
		// double click to submit the address
		await page.click(continueBtnSelector)
		await waitForMilliseconds(1000)
		await page.click(continueBtnSelector)
		await page.waitForSelector(publishBtn)
		await page.click(publishBtn)
		await waitForMilliseconds(3000)
		return true;
	} catch (error) {
		console.log("🚀 ~ pressContinue ~ error:", error)
		return false;
	}
}