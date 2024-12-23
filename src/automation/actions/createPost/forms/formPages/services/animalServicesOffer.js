import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
import { pressContinue } from "../../formAction/pressContinue";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { animalsOffer } from "@/automation/utils/variables/formSelectors/animals/animalsOfferSelectors";
import { writeToInput } from "../writeToInput";
import { uploadImages } from "../../formAction/uploadImages";
import { selectors } from "@/automation/utils/variables/selectors";

const {
  adDescription,
  reference,
  selectOfferType,
  offerTypeOption,
  adTitle
} = animalsOffer;

const selectorsList = (options) => [
  {
    input: selectOfferType,
    option: () =>
        offerTypeOption(
        lebonFormOptions.animalServicesOffer.kind.options.indexOf(
          options.kind
        ) + 1
      ),
  },
];

export const animalServicesOffer = async (page, post) => {
  try {
    await page.waitForSelector(adDescription);

    const listOptionsSelectors = selectorsList(post.options);

    // list options
    await selectAllListOptions(page, listOptionsSelectors);

    // description
    await writeToInput(page, post.options.description, adDescription);

    // reference
    await writeToInput(page, post.options.reference, reference);
    
    // get images
    await uploadImages(page, post.images);

    // write address
    await writeToInput(page, post.options.address, selectors.address);

    // submit the post
    await pressContinue(page);

    // check success
    await takeScreenshot(page, "newPost", "success");
  } catch (error) {
    console.log("🚀 ~ jobOfferFrom ~ error:", error);
    await takeScreenshot(page, "newPost", "Error");
  }
};
