import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectors } from "@/automation/utils/variables/selectors";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
import { writeToInput } from "../writeToInput";
import { pressContinue } from "../../formAction/pressContinue";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { uploadImages } from "../../formAction/uploadImages";
import { computersOffer } from "@/automation/utils/variables/formSelectors/electronics/computersOfferSelectors";
const {
  adDescription,
  adTitle,
  brandOption,
  durationOfAvailabilityOfSparePartsOption,
  kindOption,
  newPrice,
  quantity,
  reference,
  selectBrand,
  selectDurationOfAvailabilityOfSpareParts,
  selectKind,
  selectState,
  selectUse,
  stateOption,
  useOption,
  yourGeneralConditionsOfSale,
  yourSellingPrice,
} = computersOffer;

const selectorsList = (options) => [
  {
    input: selectKind,
    option: () =>
      kindOption(
        lebonFormOptions.computersOffer.kind.options.indexOf(options.kind) + 1
      ),
  },
  {
    input: selectBrand,
    option: () =>
      brandOption(
        lebonFormOptions.computersOffer.brand.options.indexOf(options.brand) +
          1
      ),
  },
  {
    input: selectDurationOfAvailabilityOfSpareParts,
    option: () =>
      durationOfAvailabilityOfSparePartsOption(
        lebonFormOptions.computersOffer.durationOfAvailabilityOfSpareParts.options.indexOf(
          options.spareParts
        ) + 1
      ),
  },
  {
    input: selectState,
    option: () =>
      stateOption(
        lebonFormOptions.computersOffer.state.options.indexOf(options.state) +
          1
      ),
  },
  {
    input: selectUse,
    option: () =>
      useOption(
        lebonFormOptions.computersOffer.use.options.indexOf(options.use) +
          1
      ),
  },
];

export const computers = async (page, post) => {
  try {
    await page.waitForSelector(selectKind);

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
