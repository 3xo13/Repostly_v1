import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectors } from "@/automation/utils/variables/selectors";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
import { writeToInput } from "../writeToInput";
import { pressContinue } from "../../formAction/pressContinue";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { uploadImages } from "../../formAction/uploadImages";
import { householdLinenOffer } from "@/automation/utils/variables/formSelectors/homeAndGarden/householdLinenOfferSelectors";
import { skipPrefillMessage } from "../../formAction/skipPrefillMessage";
import { addRefurbishedItemType } from "../../formAction/addRefurbishedItemType";
import { addNewItemType } from "../../formAction/addNewItemType";
const { "Home & Garden": { "Household linen": householdLinenOptions } } = lebonFormOptions;
const {
  adDescription,
  adTitle,
  colorOption,
  kindOption,
  materialOption,
  newPrice,
  productOption,
  quantity,
  reference,
  selectColor,
  selectKind,
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
  refurbishedConditionOption
} = householdLinenOffer;

const selectorsList = (options) => [
  {
    input: selectKind,
    option: () =>
      kindOption(
        householdLinenOptions.kind.options.indexOf(
          options.kind
        ) + 1
      ),
  },
  {
    input: selectProduct,
    option: () =>
      productOption(
        householdLinenOptions.product.options[options.kind].indexOf(
          options.product
        ) + 1
      ),
  },
  {
    input: selectColor,
    option: () =>
      colorOption(
        householdLinenOptions.color.options.indexOf(
          options.color
        ) + 1
      ),
  },
  {
    input: selectMaterial,
    option: () =>
      materialOption(
        householdLinenOptions.material.options.indexOf(
          options.material
        ) + 1
      ),
  },
  {
    input: selectState,
    option: () =>
      stateOption(
        householdLinenOptions.state.options.indexOf(
          options.state
        ) + 1
      ),
  },
  {
    input: selectWeight,
    option: () =>
      weightOption(
        householdLinenOptions.packageWeight.options.indexOf(options.packageWeight) +
        1
      ),
  },
];

export const householdLinen = async (page, post) => {
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
      post.options.newProductType,
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
