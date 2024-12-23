import {selectors} from "@/automation/utils/variables/selectors";

const prefillBtnSelector = selectors.newPost.prefillBtn;

const skipPrefillMessage = async (page) => {
    const prefillBtn = await page.$(prefillBtnSelector)
    console.log("🚀 ~ skipMultiPageForm ~ prefillBtn:", prefillBtn)
    if (prefillBtn) {
        console.log("🚀 ~ skipMultiPageForm ~ prefillBtn found")
        await page.click(prefillBtnSelector)
    }else{
			console.log("prefill message not found");
		}
}

export {
    skipPrefillMessage
}