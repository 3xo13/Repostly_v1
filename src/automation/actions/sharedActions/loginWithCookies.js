import { Cookie } from "@/db/models/Cookie.js";
import { setCookiesToPage } from "@/automation/utils/setCookiesToPage.js";
import { createBrowserPage } from "@/automation/utils/createBrowserAndPage.js";
import { goToPage } from "@/automation/utils/goToUrl";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { connectToDB } from "@/db/connectToDB";

// a selector from the second login page => document.querySelector("#__next > div > main > div > div.absolute.bottom-none.right-none.-z-raised.hidden.h-\\[calc\\(100dvh-var\\(--spacing-3xl\\)-var\\(--spacing-lg\\)\\)\\].w-1\\/2.gap-lg.overflow-hidden.px-lg.align-bottom.md\\:flex > div:nth-child(1)")

// attempt to lo 
export const loginWithCookies = async (userId) => {
	try {
		await connectToDB()
		const cookies = await Cookie.find({ userId })
		if (!cookies.length) {
			throw new Error("no cookies found for current user");
		}
		// get page instance
		const { page, browser } = await createBrowserPage();

		// set the login cookies on the page so we don't need to login again
		await setCookiesToPage(cookies, page)

		// navigate to the main page
		await page.goto("https://www.leboncoin.fr/deposer-une-annonce", { waitUntil: 'load' })

		// await page.waitForNavigation()
		// await goToPage(page, 'https://www.leboncoin.fr/', 10000)
		// todo: remove screenshots
		// await page.screenshot({ path: "loginWithCookiesSuccess.png" })
		await takeScreenshot(page, "newPost", "loginWithCookiesSuccess")
		return { page, browser };
	} catch (error) {
		console.log("🚀 ~ loginWithCookies ~ error:", error)
		return null;
	}
}