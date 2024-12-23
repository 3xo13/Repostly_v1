import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectors } from "@/automation/utils/variables/selectors";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
import { writeToInput } from "../writeToInput";
import { pressContinue } from "../../formAction/pressContinue";
import { waitForMilliseconds } from "@/automation/utils/waitForMilliseconds";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { uploadImages } from "../../formAction/uploadImages";
import { utilitiesOffer } from "@/automation/utils/variables/formSelectors/vehicles/utilitiesOfferSelectors";

const {
  DurationOfAvailabilityOfSparePartsOption,
  airOption,
  brandOption,
  colorOption,
  dinPower,
  fuelOption,
  gearBox,
  mileage,
  modelYearOption,
  numberOfDoorsOption,
  numberOfPlaceOption,
  plateNumber,
  selectBrand,
  selectColor,
  selectDurationOfAvailabilityOfSpareParts,
  selectModelYear,
  selectNumberOfDoors,
  selectNumberOfPlace,
  taxPower,
  validatePlate,
} = utilitiesOffer;

const selectorsList = (options) => [
  {
    input: selectDurationOfAvailabilityOfSpareParts,
    option: () =>
      DurationOfAvailabilityOfSparePartsOption(
        lebonFormOptions.utilitiesOffer.durationOfAvailabilityOfSpareParts.options.indexOf(
          options.spareParts
        ) + 1
      ),
  },
  {
    input: selectColor,
    option: () =>
      colorOption(
        lebonFormOptions.utilitiesOffer.color.options.indexOf(options.color) + 1
      ),
  },
  {
    input: selectNumberOfDoors,
    option: () =>
      numberOfDoorsOption(
        lebonFormOptions.utilitiesOffer.numberOfDoors.options.indexOf(options.numberOfDoors) + 1
      ),
  },
  {
    input: selectNumberOfPlace,
    option: () =>
      numberOfPlaceOption(
        lebonFormOptions.utilitiesOffer.numberOfPlaces.options.indexOf(options.numberOfPlaces) + 1
      ),
  },
  {
    input: selectModelYear,
    option: () =>
      modelYearOption(
        lebonFormOptions.utilitiesOffer.modelYear.options.indexOf(options.modelYear) + 1
      ),
  },
  {
    input: selectBrand,
    option: () =>
      brandOption(
        lebonFormOptions.utilitiesOffer.brand.options.indexOf(options.brand) + 1
      ),
  },
];

export const utilities = async (page, post) => {
  try {
    await page.waitForSelector(plateNumber);

    // first page (component) requierments
    await writeToInput(page, post.options.plateNumber, plateNumber)

    await page.click(validatePlate)

    // wait for plate number validation to fill the form
    await waitForMilliseconds(3000);

    const listOptionsSelectors = selectorsList(post.options);

    // list options
    await selectAllListOptions(page, listOptionsSelectors);

    // write technical inspection date
    await writeToInput(page, post.options.technicalInspection, technicalInspection)

    // select fueloption
    await selectOption(page, fuelOption(lebonFormOptions.utilitiesOffer.fuelOption.options.indexOf(post.options.fuel) + 1))
    // select gear box option
    await selectOption(page, gearBox(lebonFormOptions.utilitiesOffer.gearbox.options.indexOf(post.options.gearBox) + 1))

    // write tax power
    await writeToInput(page, post.options.taxPower, taxPower)
    // write din power
    await writeToInput(page, post.options.dinPower, dinPower)
    // write mileage
    await writeToInput(page, post.options.mileage, mileage)
    // select air emission option
    await selectOption(page, airOption(lebonFormOptions.utilitiesOffer.air.options.indexOf(post.options.air) + 1))
    // description
    await writeToInput(page, post.options.description, selectors.description);

    // reference
    await writeToInput(page, post.options.reference, selectors.reference);

    // write price
    await writeToInput(page, post.options.price, "#price");

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
