
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
// tested
const jobOffersSelector = selectors.newPost.forms.job.professionalTraining;
const {
    selectPosition,
    positionOption,
    selectTrainingType,
    trainingTypeOption,
    selectAudience,
    audienceOption,
    selectEducation,
    educationOption,
    objectiveOption,
    cpf,
    reference
} = jobOffersSelector

const createSelectorsList = (options) => [
    {
        input: selectPosition,
        option: () => positionOption(
            lebonFormOptions.JobFirstPage.position.options.indexOf(options.position) +
            1
        )
    },
    {
        input: selectTrainingType,
        option: () => trainingTypeOption(
            lebonFormOptions.JobFirstPage.trainingType.options.indexOf(options.trainingType) + 1
        )
    }, {
        input: selectAudience,
        option: () => audienceOption(
            lebonFormOptions.JobFirstPage.audience.options.indexOf(options.audience) + 1
        )
    }, {
        input: selectEducation,
        option: () => educationOption(
            lebonFormOptions.JobFirstPage.education.options.indexOf(options.education) +
            1
        )
    }
]

export const jobTraining = async (page, post) => {
    try {
        // check if the right page is open
        await page.waitForSelector(selectPosition)

        // first page (component) requierments
        const objectiveOptionSelector = objectiveOption(
            lebonFormOptions.jobTraining.objective.options.indexOf(post.options.workType) +
            1
        )
        const selectorsList = createSelectorsList(post.options)

        console.log("selecting options...");

        await selectAllListOptions(page, selectorsList);

        await selectOption(page, objectiveOptionSelector)
        console.log("selected all.");

        if (post.options.cpf) {
            await page.click(cpf)
        }

        // second page (component) description
        await writeToInput(page, post.options.discription, "textarea");

        await writeToInput(page, post.options.reference, reference)

        // third page (component) salary
        await writeToInput(page, post.options.salary, jobOffersSelector.salaryInput)


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