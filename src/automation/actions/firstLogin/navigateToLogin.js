import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { waitForMilliseconds } from "@/automation/utils/waitForMilliseconds"; 
 
const navigateToLogin = async (page) => {
	try {
		await waitForMilliseconds(3000);
		const menuSelector = '#container > div.relative.flex.bg-transparent.tiny\\:bg-background > div > div' +
			'.flex.max-w-full.flex-1.flex-col.min-h-screen > div > header > div.relative.fl' +
			'ex.min-h-\\[6rem\\].flex-wrap.items-center.justify-between.gap-x-md.bg-surface' +
			' > div.flex.w-full.flex-wrap.items-center.justify-between.px-\\[max\\(var\\(--' +
			'spacing-lg\\)\\,calc\\(\\(100\\%-var\\(--page-max\\)\\)\\/2\\)\\)\\] > div.fle' +
			'x.custom\\:hidden.mr-lg > nav > button';
		// Check if the element exists without throwing an error
		const element = await page.$(menuSelector);
		if (!element) {
			return;
		}
		console.log('Menu exists, opening menu...'); // Add your actions here
		await page.click(menuSelector);

		await waitForMilliseconds(5000);

		console.log('Side bar open, scrolling to login...');
		const loginMenuItemSelector = "button.text-neutral:nth-child(1)";

		// Scroll a specific element
		await page.evaluate(() => {
			// const loginMenuItemSelector = "#radix-\\:R5kgqbudm\\: > div > div.absolute.inset-none.flex.flex-col.overflow-auto > div:nth-child(7) > button";
			const element = document.querySelector("#radix-\\:r2c\\: > div > div.absolute.inset-none.flex.flex-col.overflow-auto > div:nth-child(7) > button")
			// Replace with your element selector
			if (element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'start' });
				console.log("scrooled login into view");
			} else {
				console.log("login selector not found!!");
			}
		});

		// await page.waitForSelector(loginMenuItemSelector)

		await page.click(loginMenuItemSelector);
		console.log("loging clicked, waiting for navigation...");

		await page.waitForNavigation()
	} catch (error) {
		console.log("🚀 ~ navigateToLogin ~ error:", error)
		// await page.screenshot({ path: 'navToLoginScreenshot.png' });
		await takeScreenshot(page, "requstTest", "navToLoginError")
	}
}

export {
	navigateToLogin
}