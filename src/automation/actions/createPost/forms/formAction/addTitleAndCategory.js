import { waitForMilliseconds } from "@/automation/utils/waitForMilliseconds.js";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot.js";
import { lebonCategories } from "@/automation/utils/variables/lebonCategories";
import { selectors } from "@/automation/utils/variables/selectors";
import { findSubCategoryIndex } from "@/automation/utils/helpers/findCategoryIndex";
import { skipPrefillMessage } from "./skipPrefillMessage";

export const addTitleAndCategory = async (page, post) => {
    const titleInput = selectors.newPost.newPostTitleinput;
    const showCategoriesBtn = selectors.newPost.newPostShowCategories;

    try {
        await page.waitForSelector(titleInput)

        await page.type(titleInput, post.title);

        console.log("added title...");

        await page.waitForSelector(showCategoriesBtn)

        await page.click(showCategoriesBtn)

        // create a selector string from base template and based of the child index
        const categorySelector = selectors
            .newPost
            .categories(lebonCategories.categories.indexOf(post.category) + 1)

        await page.waitForSelector(categorySelector)

        await skipPrefillMessage(page)

        // select category
        await page.click(categorySelector)
        await takeScreenshot(page, "newPost", "categorySelect")
        console.log("category selected...");

        // create a selector string from base template and based of the child index
        const subCategoryIndex = findSubCategoryIndex(post);
        const subCategorySelector = selectors
            .newPost
            .subCategories(subCategoryIndex + 1)

        await page.waitForSelector(subCategorySelector)
        await page.evaluate(() => { window.scrollTo(0, 180); });
        await takeScreenshot(page, "newPost", "checkingSubcaegory")
        await waitForMilliseconds(2000)
        // select subcategory
        await page.click(subCategorySelector)
        console.log("subcategory selected...");
        await takeScreenshot(page, "newPost", "subcategorySelect")
				// choose a post type 
        // if (lebonCategories[post.category].hasPostType) {
        //     let postTypeIndex;
        //     if (lebonCategories[post.category].hasMixedTypes) {
        //         postTypeIndex = lebonCategories[post.category]
        //             .subCategories[subCategoryIndex]["post options"]
        //             .indexOf(post.postType);
        //     } else {
        //         postTypeIndex = lebonCategories[post.category]
        //             .postTypes
        //             .indexOf(post.postType)
        //     }
        //     const postTypeSelector = selectors
        //         .newPost
        //         .postOption(postTypeIndex + 1)

        //     await page.waitForSelector(postTypeSelector)

        //     await page.click(postTypeSelector)

        //     await takeScreenshot(page, "newPost", "postTypeselectSucess")

        //     await page.waitForSelector(selectors.newPost.postTitlePageContinueBtn)

        //     await page.click(selectors.newPost.postTitlePageContinueBtn)

        // }

        await page.click(selectors.newPost.postTitlePageContinueBtn)

        await waitForMilliseconds(1000)
        const continueBtnSelector = selectors.continueBtn;
        await page.waitForSelector(continueBtnSelector)
			// todo: remove screenshot
        // await page.screenshot({path: "categorySelectionSuccess.png"})
        
        await takeScreenshot(page, "newPost", "categorySelected")

    } catch (error) {
        console.log("🚀 ~ addTitleAndCategory ~ error:", error)
			// todo: remove screenshot
        await takeScreenshot(page, "newPost", "categorySelectError")
    }

}