import { waitForMilliseconds } from "@/automation/utils/waitForMilliseconds";
import { selectors } from "@/automation/utils/variables/selectors.js";
import { scrollIntoView } from "./scrollIntoView";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
// todo: check publishBtn selector
const publishBtn = "#mainContent > section > div.bottom-none.left-none.z-sticky.min-h-sz-64.w-full.bg-surface.px-lg.shadow.sticky > div > button"

// document.querySelector("#mainContent > section > div.bottom-none.left-none.z-sticky.min-h-sz-64.w-full.bg-surface.px-lg.shadow.sticky > div > button")

export const pressContinue = async (page) => {
	// const continueBtnSelector = "#form > div: nth - child(7) > div.relative.grow.shrink.bg - surface.p - xl.rounded - lg.sm\\: min - h - none.sm\\: pb - xl.min - h - auto.pb -\\[7rem\\] > div.flex.justify - between.flex - col.mt - 2xl.sm\\: flex - row.gap - md > button";
	const continueBtnSelector = "button[type=submit]";
	try {
		// wait for button selector
		await page.waitForSelector(continueBtnSelector)
		await scrollIntoView(page, continueBtnSelector)
		// double click to submit the address
		await page.click(continueBtnSelector)
		await waitForMilliseconds(1000)
		await page.click(continueBtnSelector)
		// await takeScreenshot(page, 'newPost', "publishPage")
		await page.waitForSelector(publishBtn)
		await scrollIntoView(page, publishBtn)
		await page.click(publishBtn)
		await waitForMilliseconds(3000)
		return true;
	} catch (error) {
		console.log("🚀 ~ pressContinue ~ error:", error)
		return false;
	}
}