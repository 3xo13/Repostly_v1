import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectors } from "@/automation/utils/variables/selectors";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
import { writeToInput } from "../writeToInput";
import { pressContinue } from "../../formAction/pressContinue";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { uploadImages } from "../../formAction/uploadImages";
import { decorationOffer } from "@/automation/utils/variables/formSelectors/homeAndGarden/decorationOfferSelectors";
import { skipPrefillMessage } from "../../formAction/skipPrefillMessage";
import { addNewItemType } from "../../formAction/addNewItemType";

const { "Home & Garden": { "Decoration": decorationOptions } } = lebonFormOptions;

const {
  adDescription,
  adTitle,
  colorOption,
  kindOption,
  materialOption,
  newPrice,
  quantity,
  reference,
  selectColor,
  selectKind,
  selectMaterial,
  selectState,
  stateOption,
  yourGeneralConditionsOfSale,
  price,
  selectCategory,
  categoryOption,
  selectWeight,
  weightOption,
  selectNewItemType,
  newItemTypeOption
} = decorationOffer;

const selectorsList = (options) => [
  {
    input: selectCategory,
    option: () =>
      categoryOption(
        decorationOptions.category.options.indexOf(options.category) + 1
      ),
  },
  {
    input: selectKind,
    option: () =>
      kindOption(
        decorationOptions.kind.options[options?.category]?.indexOf(options.kind) + 1
      ),
  },
  {
    input: selectState,
    option: () =>
      stateOption(
        decorationOptions.state.options.indexOf(options.state) +
        1
      ),
  },
  {
    input: selectMaterial,
    option: () =>
      materialOption(
        decorationOptions.material.options.indexOf(
          options.material
        ) + 1
      ),
  },
  {
    input: selectColor,
    option: () =>
      colorOption(
        decorationOptions.color.options.indexOf(options.color) +
        1
      ),
  },
  {
    input: selectWeight,
    option: () =>
      weightOption(
        decorationOptions.packageWeight.options.indexOf(options.packageWeight) +
        1
      ),
  },
];

export const decoration = async (page, post) => {
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
    await writeToInput(page, post.options.quantity, quantity)

    // write selling price
    await writeToInput(page, post.options.price, price);

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
