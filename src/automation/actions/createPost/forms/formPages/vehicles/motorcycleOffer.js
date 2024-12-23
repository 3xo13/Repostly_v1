
import { waitForMilliseconds } from "@/automation/utils/waitForMilliseconds.js";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot.js";
import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions.js";
import { selectors } from "@/automation/utils/variables/selectors.js";
import { pressContinue } from "../../formAction/pressContinue.js";
import { selectAllListOptions } from "../../formAction/selectAllListOptions.js";
import { selectOption } from "../../formAction/selectOption.js";
import { uploadImages } from "../../formAction/uploadImages.js";
import { writeToInput } from "../writeToInput.js";
import { motorcyclesOffer } from "@/automation/utils/variables/formSelectors/vehicles/motorcyclesOfferSelectors.js";


const carOffersSelector =
  selectors.newPost.forms.vehicles.motorcyclesOfferSelectors;
const {
  DurationOfAvailabilityOfSparePartsOption,
  airOption,
  brandOption,
  colorOption,
  permitOption,
  gearBox,
  dateFirstEntryCirculation,
  finishing,
  version,
  cylinderCapacity,
  power,
  selectEmissionClass,
  emissionClassOption,
  mileage,
  modelYearOption,
  selectBrand,
  selectColor,
  selectDurationOfAvailabilityOfSpareParts,
  selectModelYear,
  selectPermit
} = motorcyclesOffer;

const createSelectorsList = (options) => {
  return [
    {
      input: selectDurationOfAvailabilityOfSpareParts,
      option: () => {
        return DurationOfAvailabilityOfSparePartsOption(
          lebonFormOptions.motorcyclesOffer.color.options.indexOf(options.spareParts)
        );
      },
    },
    {
      input: selectColor,
      option: () => {
        return colorOption(
          lebonFormOptions.motorcyclesOffer.color.options.indexOf(options.color)
        );
      },
    },
    {
      input: selectBrand,
      option: () => {
        return brandOption(
          lebonFormOptions.motorcyclesOffer.color.options.indexOf(options.brans)
        );
      },
    },
    {
      input: selectPermit,
      option: () => {
        return permitOption(
          lebonFormOptions.motorcyclesOffer.color.options.indexOf(options.permit)
        );
      },
    },
    {
      input: selectEmissionClass,
      option: () => {
        return emissionClassOption(
          lebonFormOptions.motorcyclesOffer.color.options.indexOf(options.emissionClass)
        );
      },
    },
    {
      input: selectModelYear,
      option: () => {
        return modelYearOption(
          lebonFormOptions.motorcyclesOffer.color.options.indexOf(options.year)
        );
      },
    },
    {
      input: selectFeatures,
      option: () => {
        return featuresOption(
          lebonFormOptions.motorcyclesOffer.color.options.indexOf(options.kind)
        );
      },
    },
    {
      input: selectFurniture,
      option: () => {
        return furnitureOption(
          lebonFormOptions.motorcyclesOffer.color.options.indexOf(options.air)
        );
      },
    },
    {
      input: selectPartAvaliableTimes,
      option: () => {
        return partAvaliableTimeOption(
          lebonFormOptions.motorcyclesOffer.color.options.indexOf(options.dateFirstEntryCirculation)
        );
      },
    },
  ];
};

export const motoCycleOffer = async (page, post) => {
  try {
    // check if the right page is open
    await page.waitForSelector(selectColor);

    const selectorsList = createSelectorsList(post.options);

    console.log("selecting options...");

    // set all list options
    await selectAllListOptions(page, selectorsList);

    // write technical inspection date
    await writeToInput(
      page,
      post.options.technicalInspection,
      technicalInspection
    );

    // select gear box option
    await selectOption(
      page,
      gearBox(
        lebonFormOptions.vehicles.gearBox.options.indexOf(
          post.options.gearBox
        ) + 1
      )
    );


    // write mileage
    await writeToInput(page, post.options.mileage, mileage);
    // write cylinderCapacity
    await writeToInput(page, post.options.cylinder, cylinderCapacity);
    // write power
    await writeToInput(page, post.options.power, power);

    // select air emission option
    await selectOption(
      page,
      airOption(
        lebonFormOptions.motorcyclesOffer.air.options.indexOf(post.options.air) + 1
      )
    );

    // toggle on option (Subject to LOA/LLD)
    if (post.options.loaLld) {
      await page.click(loaLld);
    }

    // write description
    await writeToInput(page, post.options.dateFirstEntryCirculation, dateFirstEntryCirculation);

    // write reference number
    await writeToInput(page, post.options.reference, reference);

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
