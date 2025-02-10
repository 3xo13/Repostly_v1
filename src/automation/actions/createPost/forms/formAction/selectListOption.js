import { waitForMilliseconds } from "@/automation/utils/waitForMilliseconds";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { scrollIntoView } from "./scrollIntoView";

export const selectListOption = async (page, inputSelector, optionSelector) => {
	try {
		console.log("Function called: selectListOption");
		await page.waitForSelector(inputSelector)
		// scroll selector into view and capture logs
		const result = await scrollIntoView(page, inputSelector)
		// const result = await page.evaluate(inputSelector => {
		// 	const element = document.querySelector(inputSelector);
		// 	if (element) {
		// 		element.scrollIntoView({ behavior: 'smooth', block: 'center' });
		// 		console.error(`Scrolled to selector ${inputSelector}`);
		// 		return `Scrolled to selector ${inputSelector}`;
		// 	} else {
		// 		console.error(`cannot find selector ${inputSelector}`);
		// 		return `cannot find selector ${inputSelector}`;
		// 	}
		// }, inputSelector);
		await waitForMilliseconds(3000);
		// await takeScreenshot(page, "newPost/firstPageSelection", 'optionView');
		console.log(`🚀 ~ selectListOption ~ res: ${result}`); // Add this log

		await page.click(inputSelector);
		await waitForMilliseconds(200);
		
		await page.click(inputSelector);
		await waitForMilliseconds(100);

		// await takeScreenshot(page, "newPost/firstPageSelection", 'listOpened');

		await scrollIntoView(page, optionSelector)

		// await takeScreenshot(page, "newPost/firstPageSelection", 'scrolledToOption');

		await page.click(optionSelector);
		await waitForMilliseconds(200);

		// await takeScreenshot(page, "newPost/firstPageSelection", 'optionSelect');
		console.log("Function executed successfully: selectListOption");
		return true;

	} catch (error) {
		console.log("🚀 ~ selectListOption ~ error:", error);
		return false;
	}
};
