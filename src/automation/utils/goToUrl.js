import { waitForMilliseconds } from "./waitForMilliseconds";


export const goToPage = async (page, url, waitingTime) => {
	try {
		await page.goto(url);
	
		await waitForMilliseconds(waitingTime)
		
		return true;
	} catch (error) {
		console.log("🚀 ~ goToPage ~ error:", error)
		return false;
	}
}