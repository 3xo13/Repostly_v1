import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectors } from "@/automation/utils/variables/selectors";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
import { writeToInput } from "../writeToInput";
import { pressContinue } from "../../formAction/pressContinue";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { uploadImages } from "../../formAction/uploadImages";
import { constructionStructuralWorkSiteOffer } from "@/automation/utils/variables/formSelectors/professionalEquipment/constructionEquipmentOfferSelector";
const {
  adDescription,
  adTitle,
  durationOfAvailabilityOfSparePartsOption,
  modelYearOption,
  reference,
  selectDurationOfAvailabilityOfSpareParts,
  selectModelYear,
  selectTypeOfMaterial,
  sellingPriceExcludingVat,
  typeOfMaterialOption,
} = constructionStructuralWorkSiteOffer;

const selectorsList = (options) => [
  {
    input: selectDurationOfAvailabilityOfSpareParts,
    option: () =>
      durationOfAvailabilityOfSparePartsOption(
        lebonFormOptions.constructionStructuralWorkSiteOffer.durationOfAvailabilityOfSpareParts.options.indexOf(
          options.durationOfAvailabilityOfSpareParts
        ) + 1
      ),
  },
  {
    input: selectModelYear,
    option: () =>
      modelYearOption(
        lebonFormOptions.constructionStructuralWorkSiteOffer.modelYear.options.indexOf(
          options.modelYear
        ) + 1
      ),
  },
  {
    input: selectTypeOfMaterial,
    option: () =>
      typeOfMaterialOption(
        lebonFormOptions.constructionStructuralWorkSiteOffer.typeOfMaterial.options.indexOf(
          options.typeOfMaterial
        ) + 1
      ),
  },
];

export const constructionStructuralWorkSite= async (page, post) => {
  try {
    await page.waitForSelector(selectors.address);

    const listOptionsSelectors = selectorsList(post.options);

    // list options
    await selectAllListOptions(page, listOptionsSelectors);

    // title
    await writeToInput(page, post.title, adTitle);
    // description
    await writeToInput(page, post.options.description, adDescription);

    // reference
    await writeToInput(page, post.options.reference, reference);

    // write  price
    await writeToInput(page, post.options.price, sellingPriceExcludingVat);

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
