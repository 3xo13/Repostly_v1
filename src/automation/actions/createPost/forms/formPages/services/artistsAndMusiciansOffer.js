import { pressContinue } from "../../formAction/pressContinue";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { artistsAndMusiciansOffer } from "@/automation/utils/variables/formSelectors/services/artistsAndMusiciansOfferSelectors";
import { writeToInput } from "../writeToInput";
import { uploadImages } from "../../formAction/uploadImages";
import { selectors } from "@/automation/utils/variables/selectors";

const { adTitle, adDescription, reference, address } = artistsAndMusiciansOffer;

const artistsAndMusicians = async (page, post) => {
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

export {artistsAndMusicians}
