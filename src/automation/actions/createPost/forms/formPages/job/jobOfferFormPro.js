
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
const jobOffersSelector = selectors.newPost.forms.job.jobOffersPro;
const {
    selectContractType,
    contractTypeOption,
    selectSector,
    sectorOption,
    selectJobType,
    jobTypeOption,
    selectExperience,
    experienceOption,
    selectEducation,
    educationOption,
    workTypeOption
} = jobOffersSelector

const createSelectorsList = (options) => [
    {
        input: selectContractType,
        option: () => contractTypeOption(
            lebonFormOptions.JobFirstPage.contractType.options.indexOf(options.contractType) +
            1
        )
    }, {
        input: selectSector,
        option: () => sectorOption(
            lebonFormOptions.JobFirstPage.sector.options.indexOf(options.sector) + 1
        )
    }, {
        input: selectJobType,
        option: () => jobTypeOption(
            lebonFormOptions.JobFirstPage.jobType.options.indexOf(options.jobType) + 1
        )
    }, {
        input: selectExperience,
        option: () => experienceOption(
            lebonFormOptions.JobFirstPage.experience.options.indexOf(options.experience) +
            1
        )
    }, {
        input: selectEducation,
        option: () => educationOption(
            lebonFormOptions.JobFirstPage.education.options.indexOf(options.education) +
            1
        )
    }
]

export const jobOfferFromPro = async (page, post) => {
    try {
        // check if the right page is open
        await page.waitForSelector(selectContractType)

        // first page (component) requierments
        const workTypeSelector = workTypeOption(
            lebonFormOptions.JobFirstPage.workType.options.indexOf(post.options.workType) +
            1
        )
        const selectorsList = createSelectorsList(post.options)

        console.log("selecting options...");

        await selectAllListOptions(page, selectorsList);

        await selectOption(page, workTypeSelector)
        console.log("selected all.");

        await takeScreenshot(page, "newPost", "firstPageSubmitSuccess")

        // second page (component) description
        await writeToInput(page, post.options.discription, "textarea");

        // third page (component) salary
        await writeToInput(page, post.options.salary, jobOffersSelector.salaryInput)

        await selectListOption(page, jobOffersSelector.selectPaymentRate, jobOffersSelector.paymentRateOption(lebonFormOptions.JobFirstPage.paymentRate.options.indexOf(post.options.paymentRate) + 1))

        // forth page (component) images
        await uploadImages(page, post.images)

        // fifth page (component) address
        await writeToInput(page, post.options.address, jobOffersSelector.addressInput);

        await selectOption(page, jobOffersSelector.contactOption(lebonFormOptions.JobFirstPage.contact.options.indexOf(post.options.contact) + 1))

        await pressContinue(page);

        await waitForMilliseconds(3000)

        await takeScreenshot(page, "newPost", "success")

    } catch (error) {
        console.log("🚀 ~ jobOfferFrom ~ error:", error)
        await takeScreenshot(page, "newPost", "Error")
    }
}