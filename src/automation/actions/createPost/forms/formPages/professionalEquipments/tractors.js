import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectors } from "@/automation/utils/variables/selectors";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
import { writeToInput } from "../writeToInput";
import { pressContinue } from "../../formAction/pressContinue";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { uploadImages } from "../../formAction/uploadImages";
import { officeEquipmentAndSuppliesOffer } from "@/automation/utils/variables/formSelectors/professionalEquipment/officeSuppliesOfferSelectors";
import { equipmentForRestaurantsAndHotelsOffer } from "@/automation/utils/variables/formSelectors/professionalEquipment/equipmentForRestaurantsAndHotelsOfferSelectors";
import { tractorsOffer } from "@/automation/utils/variables/formSelectors/professionalEquipment/tractorsOfferSelectors";
const {
  adDescription,
  adTitle,
  brandOption,
  durationOfAvailabilityOfSparePartsOption,
  hours,
  modelYearOption,
  power,
  reference,
  selectBrand,
  selectDurationOfAvailabilityOfSpareParts,
  selectModelYear,
  sellingPriceExcludingVat,
} = tractorsOffer;

const selectorsList = (options) => [
  {
    input: selectDurationOfAvailabilityOfSpareParts,
    option: () =>
      durationOfAvailabilityOfSparePartsOption(
        lebonFormOptions.tractorsOffer.durationOfAvailabilityOfSpareParts.options.indexOf(
          options.durationOfAvailabilityOfSpareParts
        ) + 1
      ),
  },
  {
    input: selectBrand,
    option: () =>
      brandOption(
        lebonFormOptions.tractorsOffer.brand.options.indexOf(options.brand) + 1
      ),
  },
  {
    input: selectModelYear,
    option: () =>
      modelYearOption(
        lebonFormOptions.tractorsOffer.modelYear.options.indexOf(
          options.modelYear
        ) + 1
      ),
  },
];

export const tractors = async (page, post) => {
  try {
    await page.waitForSelector(selectModelYear);

    const listOptionsSelectors = selectorsList(post.options);

    // list options
    await selectAllListOptions(page, listOptionsSelectors);

    // power
    await writeToInput(page, post.options.power, power);

    //Hours
    await writeToInput(page, post.options.hours, hours);

    // title
    await writeToInput(page, post.title, adTitle);
    // description
    await writeToInput(page, post.options.description, adDescription);

    // reference
    await writeToInput(page, post.options.reference, reference);

    // write price
    await writeToInput(
      page,
      post.options.sellingPrice,
      sellingPriceExcludingVat
    );

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
