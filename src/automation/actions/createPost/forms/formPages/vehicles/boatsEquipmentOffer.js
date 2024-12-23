import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectors } from "@/automation/utils/variables/selectors";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
import { writeToInput } from "../writeToInput";
import { pressContinue } from "../../formAction/pressContinue";
import { waitForMilliseconds } from "@/automation/utils/waitForMilliseconds";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import fetchAndSaveS3Object from "@/db/storage/tempFiles/extractS3keysFromUrls";
import { uploadImages } from "../../formAction/uploadImages";
import { boatEquipmentOffer } from "@/automation/utils/variables/formSelectors/vehicles/boatEquipmentOfferSelectors";

const {
  durationOfAvailabilityOfSparePartsOption,
  kindOption,
  newPrice,
  quantity,
  selectDurationOfAvailabilityOfSpareParts,
  selectKind,
  yourGeneralConditionsOfSale,
  yourSellingPrice,
} = boatEquipmentOffer;

const selectorsList = (options) => [
  {
    input: selectDurationOfAvailabilityOfSpareParts,
    option: () =>
      durationOfAvailabilityOfSparePartsOption(
        lebonFormOptions.boatEquipmentOffer.durationOfAvailabilityOfSpareParts.options.indexOf(
          options.durationOfAvailabilityOfSpareParts
        ) + 1
      ),
  },
  {
    input: selectKind,
    option: () =>
      kindOption(
        lebonFormOptions.boatEquipmentOffer.kind.options.indexOf(options.kind) + 1
      ),
  },
];

export const boatsEquipmentOffer = async (page, post) => {
  try {
    await page.waitForSelector(selectKind);

    const listOptionsSelectors = selectorsList(post.options);

    // list options
    await selectAllListOptions(page, listOptionsSelectors);

    // description
    await writeToInput(page, post.options.description, selectors.description);

    // reference
    await writeToInput(page, post.options.reference, selectors.reference);

    // generalCondetion
    await writeToInput(page, post.options.ConditionsOfSale, yourGeneralConditionsOfSale)

    // quantity
    await writeToInput(page, post.options.quantity, quantity)

    // write selling price
    await writeToInput(page, post.options.sellingPrice, yourSellingPrice);

    // write new price
    await writeToInput(page, post.options.newPrice, newPrice);

    // get images
    await uploadImages(page, post.images)

    // write address
    await writeToInput(page, post.options.address, selectors.address);

    // submit the post
    await pressContinue(page);

    // check success
    await takeScreenshot(page, "newPost", "success")

  } catch (error) {
    console.log("🚀 ~ jobOfferFrom ~ error:", error)
    await takeScreenshot(page, "newPost", "Error")
  }
};
