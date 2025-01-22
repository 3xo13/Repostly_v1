import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectors } from "@/automation/utils/variables/selectors";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
import { writeToInput } from "../writeToInput";
import { pressContinue } from "../../formAction/pressContinue";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { uploadImages } from "../../formAction/uploadImages";
import { tablewareOffer } from "@/automation/utils/variables/formSelectors/homeAndGarden/tablewareOfferSelectors";
import { skipPrefillMessage } from "../../formAction/skipPrefillMessage";
import { addRefurbishedItemType } from "../../formAction/addRefurbishedItemType";
import { addNewItemType } from "../../formAction/addNewItemType";

const { "Home & Garden": { "Tableware": tablewareOptions } } = lebonFormOptions;

const {
  adDescription,
  adTitle,
  colorOption,
  materialOption,
  newPrice,
  productOption,
  quantity,
  reference,
  selectColor,
  selectMaterial,
  selectProduct,
  selectState,
  stateOption,
  yourGeneralConditionsOfSale,
  yourSellingPrice,
  selectWeight,
  weightOption,
  selectNewItemType,
  newItemTypeOption,
  selectRefurbishedCondition,
  refurbishedConditionOption,
  selectCategory,
  categoryOption
} = tablewareOffer;

const selectorsList = (options) => [
  {
    input: selectCategory,
    option: () =>
      categoryOption(
        tablewareOptions.category.options.indexOf(
          options.category
        ) + 1
      ),
  },
  {
    input: selectProduct,
    option: () =>
      productOption(
        tablewareOptions.product.options[options.category].indexOf(
          options.product
        ) + 1
      ),
  },
  {
    input: selectColor,
    option: () =>
      colorOption(
        tablewareOptions.color.options.indexOf(
          options.color
        ) + 1
      ),
  },
  {
    input: selectState,
    option: () =>
      stateOption(
        tablewareOptions.state.options.indexOf(
          options.state
        ) + 1
      ),
  },
  {
    input: selectMaterial,
    option: () =>
      materialOption(
        tablewareOptions.material.options.indexOf(
          options.material
        ) + 1
      ),
    },
      {
        input: selectWeight,
        option: () =>
          weightOption(
        tablewareOptions.packageWeight.options.indexOf(options.packageWeight) +
        1
      ),
  },
];

export const tableware = async (page, post) => {
  try {
    await page.waitForSelector(selectors.address);

    await skipPrefillMessage(page)
    
    const listOptionsSelectors = selectorsList(post.options);

    // list options
    await selectAllListOptions(page, listOptionsSelectors);

    // quantity
    await writeToInput(page, post.options.quantity, quantity);

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
