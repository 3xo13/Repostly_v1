
import { waitForMilliseconds } from "@/automation/utils/waitForMilliseconds.js";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot.js";
import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions.js";
import { selectors } from "@/automation/utils/variables/selectors.js";
import { pressContinue } from "../../formAction/pressContinue.js";
import { selectAllListOptions } from "../../formAction/selectAllListOptions.js";
import { selectListOption } from "../../formAction/selectListOption.js";
import { selectOption } from "../../formAction/selectOption.js";
import { uploadImages } from "../../formAction/uploadImages.js";
import { singleTextInputPage } from "../singleTextInputPage.js";
import { writeToInput } from "../writeToInput.js";

const jobOffersSelector = selectors.newPost.forms.vehicles.carOffer;
const {
    selectColor,
    colorOption,
    selectCondition,
    conditionOption,
    selectEmissionClass,
    emissionClassOption,
    selectEquipment,
    equipmentOption,
    selectFeatures,
    featuresOption,
    selectFurniture,
    furnitureOption,
    selectPartAvaliableTime,
    partAvaliableTimeOption,
    loaLld,
    airOption,
    mileage,
    permit,
    gearBox,
    technicalInspection,
    validatePlate,
    plateNumber,
    reference
} = jobOffersSelector

const createSelectorsList = (options) => [
    {
        input: selectColor,
        option: () => colorOption(
            lebonFormOptions.carOffer.color.options.indexOf(options.color) +
            1
        )
    },
    {
        input: selectCondition,
        option: () => conditionOption(
            lebonFormOptions.JobFirstPage.condition.options.indexOf(options.condition) + 1
        )
    }, {
        input: selectEmissionClass,
        option: () => emissionClassOption(
            lebonFormOptions.JobFirstPage.emissionClass.options.indexOf(options.emissionClass) + 1
        )
    }, {
        input: selectEquipment,
        option: () => equipmentOption(
            lebonFormOptions.JobFirstPage.equipment.options.indexOf(options.equipment) +
            1
        )
    }, {
        input: selectFeatures,
        option: () => featuresOption(
            lebonFormOptions.JobFirstPage.features.options.indexOf(options.features) +
            1
        )
    }
    , {
        input: selectFurniture,
        option: () => furnitureOption(
            lebonFormOptions.JobFirstPage.furniture.options.indexOf(options.furniture) +
            1
        )
    }
    , {
        input: selectPartAvaliableTime,
        option: () => partAvaliableTimeOption(
            lebonFormOptions.JobFirstPage.partAvaliableTime.options.indexOf(options.partAvaliableTime) +
            1
        )
    }
]

export const carOffer = async (page, post) => {
    try {
        // check if the right page is open
        await page.waitForSelector(plateNumber)

        // first page (component) requierments
        // await page.type(plateNumber, post.options.plateNumber)
        await writeToInput(page, post.options.plateNumber, plateNumber)

        await page.click(validatePlate)

        // wait for plate number validation to fill the form
        await waitForMilliseconds(3000);

        const selectorsList = createSelectorsList(post.options)

        console.log("selecting options...");

        // set all list options
        await selectAllListOptions(page, selectorsList);

        // write technical inspection date
        await writeToInput(page, post.options.technicalInspection, technicalInspection)

        // select gear box option
        await selectOption(page, gearBox(lebonFormOptions.carOffer.gearBox.options.indexOf(post.options.gearBox) + 1))

        // select permit option
        await selectOption(page, permit(lebonFormOptions.carOffer.permit.options.indexOf(post.options.permit) + 1))

        // write mileage
        await writeToInput(page, post.options.mileage, mileage)

        // select air emission option
        await selectOption(page, airOption(lebonFormOptions.carOffer.air.options.indexOf(post.options.air) + 1))

        // toggle on option (Subject to LOA/LLD)
        if (post.options.loaLld) {
            await page.click(loaLld)
        }

        // write description
        await writeToInput(page, post.options.discription, "textarea");

        // write reference number
        await writeToInput(page, post.options.reference, reference)

        // write price
        await writeToInput(page, post.options.price, "#price")


        // forth page (component) images

        await uploadImages(page, post.images)

        // fifth page (component) address
        await writeToInput(page, post.options.address, jobOffersSelector.addressInput);

        await pressContinue(page);

        await waitForMilliseconds(3000)

        await takeScreenshot(page, "newPost", "success")

    } catch (error) {
        console.log("🚀 ~ jobOfferFrom ~ error:", error)
        await takeScreenshot(page, "newPost", "Error")
    }
}