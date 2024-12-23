import { waitForMilliseconds } from "@/automation/utils/waitForMilliseconds"; 

export const enterOTP = async (page, otp) => {
	try {
		const inputSelector = "#__next > div > main > div > div > div.relative > input";
		await page.focus(inputSelector)
		await page.type(inputSelector, otp)
	
		await waitForMilliseconds(5000)
		await page.screenshot({ path: 'enterOtpSuccess.png' });
	} catch (error) {
		console.log("🚀 ~ enterOTP ~ error:", error)
		//take page screenshot
		await page.screenshot({ path: 'enterOtpError.png' });
	}
}