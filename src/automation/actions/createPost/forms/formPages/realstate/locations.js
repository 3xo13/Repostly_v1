import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectors } from "@/automation/utils/variables/selectors";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
import { writeToInput } from "../writeToInput";
import { pressContinue } from "../../formAction/pressContinue";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { uploadImages } from "../../formAction/uploadImages";
import { locationsOffer } from "@/automation/utils/variables/formSelectors/realstate/locationsOfferSelectors";
const {
  chooseYourPropertyTypeOption,
  deposite,
  energyClassOption,
  feesIncludedSwitch,
  gesOption,
  price,
  redirectLinkToYourRates,
  virtualTourUrl,
  youtubeVideoUrl,
} = locationsOffer;

export const locations = async (page, post) => {
  try {
    await page.waitForSelector(selectKind);

    const listOptionsSelectors = selectorsList(post.options);

    // list options
    await selectAllListOptions(page, listOptionsSelectors);

    // title
    await writeToInput(page, post.options.title, adTitle);
    // description
    await writeToInput(page, post.options.description, adDescription);

    // generalCondetion
    await writeToInput(
      page,
      post.options.generalConditionsOfSale,
      yourGeneralConditionsOfSale
    );
    // reference
    await writeToInput(page, post.options.reference, reference);

    // quantity
    await writeToInput(page, post.options.quantity, quantity);

    // write selling price
    await writeToInput(page, post.options.sellingPrice, yourSellingPrice);

    // write new price
    await writeToInput(page, post.options.newPrice, newPrice);

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
