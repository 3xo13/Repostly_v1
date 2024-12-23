import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectors } from "@/automation/utils/variables/selectors";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
import { writeToInput } from "../writeToInput";
import { pressContinue } from "../../formAction/pressContinue";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { uploadImages } from "../../formAction/uploadImages";
import { phoneAccessoriesAndConnectedObjectsOffer } from "@/automation/utils/variables/formSelectors/electronics/phoneAccessoriesOfferSelectors";
const {
  adDescription,
  adTitle,
  brandOption,
  colorOption,
  durationOfAvailabilityOfSparePartsOption,
  modelOption,
  newPrice,
  quantity,
  reference,
  selectBrand,
  selectColor,
  selectDurationOfAvailabilityOfSpareParts,
  selectModel,
  selectState,
  stateOption,
  yourGeneralConditionsOfSale,
  yourSellingPrice,
} = phoneAccessoriesAndConnectedObjectsOffer;

const selectorsList = (options) => [
  {
    input: selectColor,
    option: () =>
      colorOption(
        lebonFormOptions.phoneAccessoriesOffer.color.options.indexOf(
          options.color
        ) + 1
      ),
  },
  {
    input: selectBrand,
    option: () =>
      brandOption(
        lebonFormOptions.phoneAccessoriesOffer.brand.options.indexOf(
          options.brand
        ) + 1
      ),
  },
  {
    input: selectDurationOfAvailabilityOfSpareParts,
    option: () =>
      durationOfAvailabilityOfSparePartsOption(
        lebonFormOptions.phoneAccessoriesOffer.durationOfAvailabilityOfSpareParts.options.indexOf(
          options.spareParts
        ) + 1
      ),
  },
  {
    input: selectState,
    option: () =>
      stateOption(
        lebonFormOptions.phoneAccessoriesOffer.state.options.indexOf(
          options.state
        ) + 1
      ),
  },
  {
    input: selectModel,
    option: () =>
      modelOption(
        lebonFormOptions.phonesAndConnectedObjectsOffer.model.options.indexOf(
          options.model
        ) + 1
      ),
  },
];

export const phoneAccessories = async (page, post) => {
  try {
    await page.waitForSelector(selectColor);

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
