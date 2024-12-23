import { waitForMilliseconds } from "../../../utils/global/waitForMilliseconds";

export const clickTrust = async (page) => {
	const trustSitBtnSelector = "#__next > div > main > div > div > div.mt-2xl.w-full.sm\:mt-lg.flex.flex-row > button.u-shadow-border-transition.box-border.inline-flex.items-center.justify-center.gap-md.whitespace-nowrap.px-lg.text-body-1.font-bold.focus-visible\:outline-none.focus-visible\:u-ring.\[\&\:not\(\:focus-visible\)\]\:ring-inset.min-w-sz-44.h-sz-44.rounded-lg.bg-main.text-on-main.hover\:bg-main-hovered.enabled\:active\:bg-main-pressed.focus-visible\:bg-main-focused"
	try {
		const element = await page.$(cookiesDetailsSelector); // Replace with your selector
		if (!element) {
			console.log("no cookies message.");
			return;
		}
		await page.click(trustSitBtnSelector)

		await waitForMilliseconds(2000)
		await page.screenshot({ path: 'clickTrustBtnSuccess.png' });
	} catch (error) {
		console.log("🚀 ~ clickTrust ~ error:", error)
		//take page screenshot
		await page.screenshot({ path: 'clickTrustBtnError.png' });
	}
}