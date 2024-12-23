import { pressContinue } from "../../formAction/pressContinue";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { personalServicesOffer } from "@/automation/utils/variables/formSelectors/services/personalServicesOfferSelectors";
import { writeToInput } from "../writeToInput";
import { uploadImages } from "../../formAction/uploadImages";
const { adTitle, adDescription, reference, address } = personalServicesOffer;

export const personalServices = async (page, post) => {
  try {
    await page.waitForSelector(adDescription);

    // description
    await writeToInput(page, post.options.description, adDescription);

    // reference
    await writeToInput(page, post.options.reference, reference);

    // get images
    await uploadImages(page, post.images);

    // write address
    await writeToInput(page, post.options.address, address);

    // submit the post
    await pressContinue(page);

    // check success
    await takeScreenshot(page, "newPost", "success");
  } catch (error) {
    console.log("🚀 ~ jobOfferFrom ~ error:", error);
    await takeScreenshot(page, "newPost", "Error");
  }
};
