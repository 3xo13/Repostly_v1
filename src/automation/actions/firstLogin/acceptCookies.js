import { selectors } from "@/automation/utils/variables/selectors";
import { waitForMilliseconds } from "@/automation/utils/waitForMilliseconds";

const acceptCookies = async (page) => {
    try {
        const cookiesDetailsSelector = selectors.cookiesDetails;
        // Check if the element exists (cookies prompt)
        const element = await page.$(cookiesDetailsSelector); // Replace with your selector
        if (!element) {
            console.log("no cookies message.");
            return;
        }
        console.log('cookies message exists, accepting cookies...');
        
        await page.click(cookiesDetailsSelector);
        // wait for the challenge to resolve
        await new Promise(function (resolve) {
            setTimeout(resolve, 3000);
        });
        const cookiesApproveSelector = selectors.cookiesApprove;

        await page.waitForSelector(cookiesApproveSelector);
        await page.click(cookiesApproveSelector);
        // await page.waitForNavigation({waitUntil: "domcontentloaded"})

        await waitForMilliseconds(3000)
        
        return true
    } catch (error) {
        console.log("🚀 ~ acceptCookies ~ error:", error)
        return false
    }
}

export { acceptCookies }