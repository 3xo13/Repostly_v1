import { waitForMilliseconds } from "../../../utils/global/waitForMilliseconds.js"
import { selectors } from "@/automation/utils/variables/selectors.js";
const navigateToAccount = async (page) => {
	try {
		await waitForMilliseconds(3000);
		const menuBtnSelector = selectors.menuBtn;
		// Check if the element exists without throwing an error
		const element = await page.$(menuBtnSelector);
		if (!element) {
			return;
		}
		console.log('Menu exists, opening menu...'); // Add your actions here
		await page.click(menuBtnSelector);

		await waitForMilliseconds(5000);
		const sidebarAccountSelector = selectors.sidebarAccountLink;
		// Scroll a specific element
		await page.evaluate(() => {
			const element = document.querySelector(selectors.sidebarAccountDiv)
			// Replace with your element selector
			if (element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'start' });
				console.log("scrooled account into view");
			} else {
				console.log("login selector not found!!");
			}
		});

		await page.click(sidebarAccountSelector);
		console.log("account link clicked, waiting for navigation...");

		await page.waitForNavigation(5000)

		await page.screenshot({ path: "accountSuccess.png" })
	} catch (error) {
		console.log("🚀 ~ navigateToLogin ~ error:", error)
		await page.screenshot({ path: 'navToLoginScreenshot.png' });
	}


}

export {
	navigateToAccount
}