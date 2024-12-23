import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectors } from "@/automation/utils/variables/selectors";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
import { writeToInput } from "../writeToInput";
import { pressContinue } from "../../formAction/pressContinue";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { uploadImages } from "../../formAction/uploadImages";
import { officeEquipmentAndSuppliesOffer } from "@/automation/utils/variables/formSelectors/professionalEquipment/officeSuppliesOfferSelectors";
import { equipmentForRestaurantsAndHotelsOffer } from "@/automation/utils/variables/formSelectors/professionalEquipment/equipmentForRestaurantsAndHotelsOfferSelectors";
import { equipmentForShopsAndMarketsOffer } from "@/automation/utils/variables/formSelectors/professionalEquipment/equipmentForShopsAndMarketsOfferSelector";
const {
  adDescription,
  adTitle,
  durationOfAvailabilityOfSparePartsOption,
  reference,
  selectDurationOfAvailabilityOfSpareParts,
  yourSellingPrice,
} = equipmentForShopsAndMarketsOffer;

const selectorsList = (options) => [
  {
    input: selectDurationOfAvailabilityOfSpareParts,
    option: () =>
      durationOfAvailabilityOfSparePartsOption(
        lebonFormOptions.equipmentForShopsAndMarketsOffer.durationOfAvailabilityOfSpareParts.options.indexOf(
          options.durationOfAvailabilityOfSpareParts
        ) + 1
      ),
  },
];

export const equipmentForRestaurantsAndHotels = async (page, post) => {
  try {
    await page.waitForSelector(selectDurationOfAvailabilityOfSpareParts);

    const listOptionsSelectors = selectorsList(post.options);

    // list options
    await selectAllListOptions(page, listOptionsSelectors);

    // title
    await writeToInput(page, post.title, adTitle);
    // description
    await writeToInput(page, post.options.description, adDescription);

    // reference
    await writeToInput(page, post.options.reference, reference);

    // write price
    await writeToInput(page, post.options.sellingPrice, yourSellingPrice);

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
