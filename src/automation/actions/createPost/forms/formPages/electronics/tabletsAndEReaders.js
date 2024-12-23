import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectors } from "@/automation/utils/variables/selectors";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
import { writeToInput } from "../writeToInput";
import { pressContinue } from "../../formAction/pressContinue";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { uploadImages } from "../../formAction/uploadImages";
import { tabletsAndEReadersOffer } from "@/automation/utils/variables/formSelectors/electronics/tabletsAndEReadersOfferSelectors";
const {
  adDescription,
  adTitle,
  durationOfAvailabilityOfSparePartsOption,
  newPrice,
  quantity,
  reference,
  selectDurationOfAvailabilityOfSpareParts,
  selectState,
  stateOption,
  yourGeneralConditionsOfSale,
  yourSellingPrice,
} = tabletsAndEReadersOffer;

const selectorsList = (options) => [
  {
    input: selectDurationOfAvailabilityOfSpareParts,
    option: () =>
      durationOfAvailabilityOfSparePartsOption(
        lebonFormOptions.tabletsAndEReadersOffer.durationOfAvailabilityOfSpareParts.options.indexOf(
          options.spareParts
        ) + 1
      ),
  },
  {
    input: selectState,
    option: () =>
      stateOption(
        lebonFormOptions.tabletsAndEReadersOffer.state.options.indexOf(
          options.state
        ) + 1
      ),
  },
];

export const tabletsAndEReaders = async (page, post) => {
  try {
    await page.waitForSelector(selectState);

    const listOptionsSelectors = selectorsList(post.options);

    // list options
    await selectAllListOptions(page, listOptionsSelectors);

    // title
    await writeToInput(page, post.title, adTitle);
    // description
    await writeToInput(page, post.options.description, adDescription);

    // reference
    await writeToInput(page, post.options.reference, reference);
    // generalCondetion
    await writeToInput(
      page,
      post.options.generalConditionsOfSale,
      yourGeneralConditionsOfSale
    );

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
