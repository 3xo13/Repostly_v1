import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectors } from "@/automation/utils/variables/selectors";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
import { writeToInput } from "../writeToInput";
import { pressContinue } from "../../formAction/pressContinue";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { uploadImages } from "../../formAction/uploadImages";
import { diyOffer } from "@/automation/utils/variables/formSelectors/homeAndGarden/diyOfferSelectors";
import { furnishingsOffer } from "@/automation/utils/variables/formSelectors/homeAndGarden/furnishingsOfferSelectors";
import { skipPrefillMessage } from "../../formAction/skipPrefillMessage";
const {
  adDescription,
  adTitle,
  colorOption,
  durationOfAvailabilityOfSparePartsOption,
  kindOption,
  materialOption,
  newPrice,
  pieceOption,
  quantity,
  reference,
  selectColor,
  selectDurationOfAvailabilityOfSpareParts,
  selectKind,
  selectMaterial,
  selectPiece,
  selectState,
  stateOption,
  yourGeneralConditionsOfSale,
  yourSellingPrice,
  selectWeight,
  weightOption
} = furnishingsOffer;

const selectorsList = (options) => [
  {
    input: selectKind,
    option: () =>
      kindOption(
        lebonFormOptions.furnishingsOffer.kind.options.indexOf(options.kind) + 1
      ),
  },
  {
    input: selectPiece,
    option: () =>
      pieceOption(
        lebonFormOptions.furnishingsOffer.piece.options.indexOf(options.piece) +
          1
      ),
  },
  {
    input: selectDurationOfAvailabilityOfSpareParts,
    option: () =>
      durationOfAvailabilityOfSparePartsOption(
        lebonFormOptions.furnishingsOffer.durationOfAvailabilityOfSpareParts.options.indexOf(
          options.spareParts
        ) + 1
      ),
  },
  {
    input: selectState,
    option: () =>
      stateOption(
        lebonFormOptions.furnishingsOffer.state.options.indexOf(options.state) +
          1
      ),
  },
  {
    input: selectColor,
    option: () =>
      colorOption(
        lebonFormOptions.furnishingsOffer.color.options.indexOf(options.color) +
          1
      ),
  },
  {
    input: selectMaterial,
    option: () =>
      materialOption(
        lebonFormOptions.furnishingsOffer.material.options.indexOf(options.material) +
          1
      ),
  },
  {
    input: selectWeight,
    option: () =>
      weightOption(
        lebonFormOptions.furnishingsOffer.packageWeight.options.indexOf(options.packageWeight) +
        1
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
