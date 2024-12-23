import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectors } from "@/automation/utils/variables/selectors";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
import { writeToInput } from "../writeToInput";
import { pressContinue } from "../../formAction/pressContinue";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { uploadImages } from "../../formAction/uploadImages";
import { consolesOffer } from "@/automation/utils/variables/formSelectors/electronics/consolesOfferSelectors";
const {
  adDescription,
  adTitle,
  brandOption,
  durationOfAvailabilityOfSparePartsOption,
  kindOption,
  modelOption,
  newPrice,
  quantity,
  reference,
  selectBrand,
  selectDurationOfAvailabilityOfSpareParts,
  selectKind,
  selectModel,
  selectState,
  stateOption,
  yourGeneralConditionsOfSale,
  yourSellingPrice,
} = consolesOffer;

const selectorsList = (options) => [
  {
    input: selectKind,
    option: () =>
      kindOption(
        lebonFormOptions.consolesOffer.kind.options.indexOf(options.kind) + 1
      ),
  },
  {
    input: selectBrand,
    option: () =>
      brandOption(
        lebonFormOptions.consolesOffer.brand.options.indexOf(options.brand) + 1
      ),
  },
  {
    input: selectDurationOfAvailabilityOfSpareParts,
    option: () =>
      durationOfAvailabilityOfSparePartsOption(
        lebonFormOptions.consolesOffer.durationOfAvailabilityOfSpareParts.options.indexOf(
          options.spareParts
        ) + 1
      ),
  },
  {
    input: selectState,
    option: () =>
      stateOption(
        lebonFormOptions.consolesOffer.state.options.indexOf(options.state) + 1
      ),
  },
  {
    input: selectModel,
    option: () =>
      modelOption(
        lebonFormOptions.consolesOffer.model.options.indexOf(options.model) + 1
      ),
  },
];

export const consoles = async (page, post) => {
  try {
    await page.waitForSelector(selectKind);

    const listOptionsSelectors = selectorsList(post.options);

    // list options
    await selectAllListOptions(page, listOptionsSelectors);

    // title
    await writeToInput(page, post.title, adTitle);
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
