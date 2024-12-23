import {takeScreenshot} from "@/automation/utils/dev/takeScreenshot";
import {selectors} from "@/automation/utils/variables/selectors";
import {waitForMilliseconds} from "@/automation/utils/waitForMilliseconds";
import { skipPrefillMessage } from "./skipPrefillMessage";

const realestateBackButtonSelector = "#form > div:nth-child(6) > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg" +
        ".sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-\\[7rem\\] > div.flex.justify-betwee" +
        "n.flex-col.mt-2xl.sm\\:flex-row.gap-md > div > button"
const backButtonSelector = "#form > div > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-\\[calc\\(100vh-6rem\\)\\].pb-\\[7rem\\] > div.flex.justify-between.fixed.z-sticky.bottom-\\[0\\].left-\\[0\\].right-\\[0\\].shadow.bg-surface.px-xl.py-md.sm\\:z-base.sm\\:relative.sm\\:mt-2xl.sm\\:shadow-none.sm\\:p-none > div > button"

// const backButtonSelector = ".u-shadow-border-transition.box-border.inline-flex.items-center.justify-center.gap-md.whitespace-nowrap.px-lg.text-body-1.font-bold.focus-visible\\:outline-none.focus-visible\\:u-ring.\ \[\\&\\:not\\(\\:focus-visible\\)\\] \\:ring-inset.bg-transparent.border-sm.border-current.min-w-sz-44.h-sz-44.rounded-lg.hover\\:bg-support\\/dim-5.enabled\\:active\\:bg-support\\/dim-5.focus-visible\\:bg-support\\/dim-5.text-support.w-full.sm\\:w-auto"

const showCategoriesBtn = selectors.newPost.newPostShowCategories;
const titleInput = selectors.newPost.newPostTitleinput;

const skipMultiPageForm = async (page) => {
    try {
        // wait for page to load
        await page.waitForSelector("form")
        await takeScreenshot(page, "newPost", "multiPageForm")
        console.log("returning...");

		// press back btn
		await page.waitForSelector(backButtonSelector)
		await page.click(backButtonSelector)
		console.log("back btn pressed...");
		await takeScreenshot(page, "newPost", "backToNewPost")
			
        await page.waitForSelector(titleInput)
				await waitForMilliseconds(1000)
        // delete old title so we can call the addTitleAndCategory function again
        await page.evaluate((titleInput) => {
            const input = document.querySelector(titleInput);
            input.value = '';
        }, titleInput);
        // Scroll to the top of the page
        await page.evaluate(() => {
            window.scrollTo(0, 0);
        });
        await takeScreenshot(page, "newPost", "titleDelete")

        await waitForMilliseconds(500)
        // display categories list
        await page.click(showCategoriesBtn)

        // get category selector for real estate
        const categorySelector = selectors
            .newPost
            .categories(3)

        // wait for the selector to load
        await page.waitForSelector(categorySelector)

        // click category real estate
        await page.click(categorySelector)
        console.log("new category selected...");

        // get subcategory selector
        const subCategorySelector = selectors
            .newPost
            .subCategories(1)

        // wait for the selector to load
        await page.waitForSelector(subCategorySelector)
        await waitForMilliseconds(500)
        // select subcategory real estate sale
        await page.click(subCategorySelector)
        console.log("new subcategory selected...");



        // click continue
        await page.waitForSelector(selectors.newPost.postTitlePageContinueBtn)

        await page.click(selectors.newPost.postTitlePageContinueBtn)

        // wait for page to load
        await page.waitForSelector(realestateBackButtonSelector)
        
        await skipPrefillMessage(page)

        await takeScreenshot(page, "newPost", "skipCategory")
        // click back again
        await page.click(realestateBackButtonSelector)
        console.log("returning from skip category...");

        // wait for page to load
        await page.waitForSelector(titleInput)

    } catch (error) {
        console.log("🚀 ~ skipMultiPageForm ~ error:", error)

    }
}

export {
    skipMultiPageForm
}