import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectors } from "@/automation/utils/variables/selectors";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
import { writeToInput } from "../writeToInput";
import { pressContinue } from "../../formAction/pressContinue";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { uploadImages } from "../../formAction/uploadImages";
import { diyOffer } from "@/automation/utils/variables/formSelectors/homeAndGarden/diyOfferSelectors";
import { skipPrefillMessage } from "../../formAction/skipPrefillMessage";
import { addRefurbishedItemType } from "../../formAction/addRefurbishedItemType";
import { addNewItemType } from "../../formAction/addNewItemType";
const { "Home & Garden": { DIY } } = lebonFormOptions;
const {
  adDescription,
  adTitle,
  durationOfAvailabilityOfSparePartsOption,
  kindOption,
  newPrice,
  productOption,
  quantity,
  reference,
  selectDurationOfAvailabilityOfSpareParts,
  selectKind,
  selectProduct,
  selectState,
  stateOption,
  yourGeneralConditionsOfSale,
  yourSellingPrice,
  selectWeight,
  weightOption
} = diyOffer;

const selectorsList = (options) => [
  {
    input: selectKind,
    option: () =>
      kindOption(
        DIY.kind.options.indexOf(options.kind) + 1
      ),
  },
  {
    input: selectProduct,
    option: () =>
      productOption(
        DIY.product.options[options.kind].indexOf(options.product) + 1
      ),
  },
  {
    input: selectDurationOfAvailabilityOfSpareParts,
    option: () =>
      durationOfAvailabilityOfSparePartsOption(
        DIY.durationOfAvailabilityOfSpareParts.options.indexOf(
          options.spareParts
        ) + 1
      ),
  },
  {
    input: selectState,
    option: () =>
      stateOption(
        DIY.state.options.indexOf(options.state) + 1
      ),
  },
  {
    input: selectWeight,
    option: () =>
      weightOption(
        DIY.packageWeight.options.indexOf(options.packageWeight) +
        1
      ),
  },
];

export const diy = async (page, post) => {
  try {
    await page.waitForSelector(selectors.address);

    await skipPrefillMessage(page)

    const listOptionsSelectors = selectorsList(post.options);

    // list options
    await selectAllListOptions(page, listOptionsSelectors);

    await addNewItemType(
      page,
      post.options.state,
      post.options.newProductType,
      selectNewItemType,
      newItemTypeOption
    )

    await addRefurbishedItemType(
      page,
      post.options.state,
      post.options.RefurbishedCondition,
      selectRefurbishedCondition,
      refurbishedConditionOption
    )

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
