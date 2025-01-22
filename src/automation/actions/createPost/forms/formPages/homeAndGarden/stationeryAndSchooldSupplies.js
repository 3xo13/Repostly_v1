import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectors } from "@/automation/utils/variables/selectors";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
import { writeToInput } from "../writeToInput";
import { pressContinue } from "../../formAction/pressContinue";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { uploadImages } from "../../formAction/uploadImages";
import { stationeryAndSchooldSuppliesOffer } from "@/automation/utils/variables/formSelectors/homeAndGarden/stationeryAndSchooldSuppliesOfferSelectors";
import { skipPrefillMessage } from "../../formAction/skipPrefillMessage";
import { addRefurbishedItemType } from "../../formAction/addRefurbishedItemType";
import { addNewItemType } from "../../formAction/addNewItemType";

const { "Home & Garden": { "Stationery & School Supplies": schooldSuppliesOptions } } = lebonFormOptions;

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
  selectWeight,
  weightOption,
  selectNewItemType,
  newItemTypeOption,
  selectRefurbishedCondition,
  refurbishedConditionOption
} = stationeryAndSchooldSuppliesOffer;

const selectorsList = (options) => [
  {
    input: selectState,
    option: () =>
      stateOption(
        schooldSuppliesOptions.state.options.indexOf(
          options.state
        ) + 1
      ),
  },
  {
    input: selectDurationOfAvailabilityOfSpareParts,
    option: () =>
      durationOfAvailabilityOfSparePartsOption(
        schooldSuppliesOptions.durationOfAvailabilityOfSpareParts.options.indexOf(
          options.spareParts
        ) + 1
      ),
  },
  {
    input: selectWeight,
    option: () =>
      weightOption(
        schooldSuppliesOptions.packageWeight.options.indexOf(options.packageWeight) +
        1
      ),
  },
];

export const stationeryAndSchooldSupplies = async (page, post) => {
  try {
    await page.waitForSelector(selectors.address);

    await skipPrefillMessage(page)

    // quantity
    await writeToInput(page, post.options.quantity, quantity);
    
    const listOptionsSelectors = selectorsList(post.options);

    // list options
    await selectAllListOptions(page, listOptionsSelectors);

    await addNewItemType(
      page,
      post.options.state,
      post.options.newItemType,
      selectNewItemType,
      newItemTypeOption
    )

    await addRefurbishedItemType(
      page,
      post.options.state,
      post.options.newItemType,
      selectRefurbishedCondition,
      refurbishedConditionOption
    )

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
