import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectors } from "@/automation/utils/variables/selectors";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
import { writeToInput } from "../writeToInput";
import { pressContinue } from "../../formAction/pressContinue";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { uploadImages } from "../../formAction/uploadImages";
import { furnishingsOffer } from "@/automation/utils/variables/formSelectors/homeAndGarden/furnishingsOfferSelectors";
import { skipPrefillMessage } from "../../formAction/skipPrefillMessage";
import { addNewItemType } from "../../formAction/addNewItemType";
import { addRefurbishedItemType } from "../../formAction/addRefurbishedItemType";

const { "Home & Garden": { Furnishings } } = lebonFormOptions;

const {
  adDescription,
  adTitle,
  colorOption,
  durationOfAvailabilityOfSparePartsOption,
  kindOption,
  materialOption,
  newPrice,
  roomOption,
  quantity,
  reference,
  selectColor,
  selectDurationOfAvailabilityOfSpareParts,
  selectKind,
  selectMaterial,
  selectRoom,
  selectState,
  stateOption,
  yourGeneralConditionsOfSale,
  yourSellingPrice,
  selectWeight,
  weightOption,
  selectNewItemType,
  newItemTypeOption
} = furnishingsOffer;

const selectorsList = (options) => [
  {
    input: selectState,
    option: () =>
      stateOption(
        Furnishings.state.options.indexOf(options.state) +
        1
      ),
  },
  {
    input: selectWeight,
    option: () =>
      weightOption(
        Furnishings.packageWeight.options.indexOf(options.packageWeight) +
        1
      ),
  },
  {
    input: selectRoom,
    option: () =>
      roomOption(
        Furnishings.room.options.indexOf(options.room) +
        1
      ),
  },
  {
    input: selectKind,
    option: () =>
      kindOption(
        Furnishings.kind.options.indexOf(options.kind) + 1
      ),
  },
  {
    input: selectColor,
    option: () =>
      colorOption(
        Furnishings.color.options.indexOf(options.color) +
        1
      ),
  },
  {
    input: selectMaterial,
    option: () =>
      materialOption(
        Furnishings.material.options.indexOf(options.material) +
        1
      ),
  },
  
  {
    input: selectDurationOfAvailabilityOfSpareParts,
    option: () =>
      durationOfAvailabilityOfSparePartsOption(
        Furnishings.durationOfAvailabilityOfSpareParts.options.indexOf(
          options.spareParts
        ) + 1
      ),
  },
  
];

export const furnishings = async (page, post) => {
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
    await writeToInput(page, post.options.quantity, quantity);

    // write selling price
    await writeToInput(page, post.options.price, yourSellingPrice);

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
