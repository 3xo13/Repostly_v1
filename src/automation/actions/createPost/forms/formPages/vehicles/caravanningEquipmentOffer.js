import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectors } from "@/automation/utils/variables/selectors";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
import { writeToInput } from "../writeToInput";
import { pressContinue } from "../../formAction/pressContinue";
import { waitForMilliseconds } from "@/automation/utils/waitForMilliseconds";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import fetchAndSaveS3Object from "@/db/storage/tempFiles/extractS3keysFromUrls";
import { uploadImages } from "../../formAction/uploadImages";
import { caravanningEquipmentOffer } from "@/automation/utils/variables/formSelectors/vehicles/caravanningEquipmentOfferSelectors";

const {
  generalConditionsOfSale,
  selectDurationOfAvailabilityOfSpareParts,
  durationOfAvailabilityOfSparePartsOption,
  quantity,
  sellingPrice,
  newPrice,
} = caravanningEquipmentOffer;

const selectorsList = (options) => [
  {
    input: selectDurationOfAvailabilityOfSpareParts,
    option: () =>
      durationOfAvailabilityOfSparePartsOption(
        lebonFormOptions.caravanEquipmentOffer.durationOfAvailabilityOfSpareParts.options.indexOf(
          options.spareParts
        ) + 1
      ),
  },
  {
    input: selectKind,
    option: () =>
      kindOption(
        lebonFormOptions.caravanEquipmentOffer.kind.options.indexOf(options.kind) +
        1
      ),
  },
];

export const caravanEquipment = async (page, post) => {
  try {
    await page.waitForSelector(selectDurationOfAvailabilityOfSpareParts);

    const listOptionsSelectors = selectorsList(post.options);

    // list options
    await selectAllListOptions(page, listOptionsSelectors);

    // description
    await writeToInput(page, post.options.description, selectors.description);

    // reference
    await writeToInput(page, post.options.reference, selectors.reference);

    // generalCondetion
    await writeToInput(
      page,
      post.options.generalConditionsOfSale,
      generalConditionsOfSale
    );

    // quantity
    await writeToInput(page, post.options.quantity, quantity);

    // write selling price
    await writeToInput(page, post.options.price, sellingPrice);

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
