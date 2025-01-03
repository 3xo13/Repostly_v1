import { pressContinue } from "../../formAction/pressContinue";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { gardeningAndDiyServices } from "@/automation/utils/variables/formSelectors/services/gardeningAndDiyServicesSelectors";
import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { writeToInput } from "../writeToInput";
import { uploadImages } from "../../formAction/uploadImages";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
const { selectKind, kindOption, address } = gardeningAndDiyServices;

const selectorsList = (options) => [
  {
    input: selectKind,
    option: () =>
        kindOption(
        lebonFormOptions.gardeningAndDiyServices.kind.options.indexOf(
          options.kind
        ) + 1
      ),
  },
];

export const gardeningAndDiy = async (page, post) => {
  try {
    await page.waitForSelector(adDescription);

    const listOptionsSelectors = selectorsList(post.options);

    // list options
    await selectAllListOptions(page, listOptionsSelectors);

    // description
    await writeToInput(page, post.options.description, adDescription);

    // reference
    await writeToInput(page, post.options.reference, reference);

    // get images
    await uploadImages(page, post.images);

    // write address
    await writeToInput(page, post.options.address, address);

    // submit the post
    await pressContinue(page);

    // check success
    await takeScreenshot(page, "newPost", "success");
  } catch (error) {
    console.log("🚀 ~ jobOfferFrom ~ error:", error);
    await takeScreenshot(page, "newPost", "Error");
  }
};
