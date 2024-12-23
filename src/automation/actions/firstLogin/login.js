import { waitForMilliseconds } from "@/automation/utils/waitForMilliseconds";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";

export default async function login(page, userEmail, userPassword) {
	const emailInputSelector = "#email";
	const passwordInputSelector = "#password"
	const loginBtnSelector = "#login-form > button"
	// const userEmail = 'woodandcottaleboncoin@gmail.com'
	// const userPassword = "Wood&cotta34"
	// const userEmail = "alkarim1310@gmail.com";
	// const userPassword = "Mamoune#19";
	try {
		console.log("login started...");
		
		// Type text into an input field 
		await page.type(emailInputSelector, userEmail);
		await waitForMilliseconds(1000)
		await page.click(loginBtnSelector)
		await takeScreenshot(page, "", "emailAdded")
		await waitForMilliseconds(1000)
		await page.type(passwordInputSelector, userPassword);

		await page.click(loginBtnSelector)
		console.log("login credentials added...");
		await waitForMilliseconds(10000)

		// await page.screenshot({ path: 'loginSuccessScreenshot.png' });
		await takeScreenshot(page, "", "loginResult")
		return true
	} catch (error) {
		console.log("🚀 ~ login ~ error:", error)
		// await page.screenshot({ path: 'loginErrorScreenshot.png' });
		await takeScreenshot(page, "", "loginError")
		return false
	}
};
