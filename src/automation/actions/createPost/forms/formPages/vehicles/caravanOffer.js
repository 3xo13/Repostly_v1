import { waitForMilliseconds } from "@/automation/utils/waitForMilliseconds.js";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot.js";
import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions.js";
import { selectors } from "@/automation/utils/variables/selectors.js";
import { pressContinue } from "../../formAction/pressContinue.js";
import { selectAllListOptions } from "../../formAction/selectAllListOptions.js";
import { selectListOption } from "../../formAction/selectListOption.js";
import { selectOption } from "../../formAction/selectOption.js";
import { uploadImages } from "../../formAction/uploadImages.js";
import { writeToInput } from "../writeToInput.js";
import { caravanningOffer } from "@/automation/utils/variables/formSelectors/vehicles/caravanningOfferSelectors.js";

const {
	selectKind,
	kindOption,
	selectBrand,
	brandOption,
	selectModelYear,
	modelYearOption,
	selectDurationVailabilitySpareParts,
	durationVailabilitySparePartsOption,
	sellingPrice,
	reference,
	mileage,
	description,
	dateFirstEntryCirculation
} = caravanningOffer

const createSelectorsList = (options) => [
	{
		input: selectBrand,
		option: () => brandOption(
			lebonFormOptions.caravanOffer.brand.options.indexOf(options.brand) +
			1
		)
	},
	{
		input: selectKind,
		option: () => kindOption(
			lebonFormOptions.caravanOffer.kind.options.indexOf(options.kind) + 1
		)
	}, {
		input: selectModelYear,
		option: () => modelYearOption(
			lebonFormOptions.caravanOffer.modelYear.options.indexOf(options.modelYear) + 1
		)
	}, {
		input: selectDurationVailabilitySpareParts,
		option: () => durationVailabilitySparePartsOption(
			lebonFormOptions.caravanOffer.durationOfAvailabilityOfSpareParts.options.indexOf(options.spareParts) +
			1
		)
	}
]

export const caravanOffer = async (page, post) => {
	try {
		// check if the right page is open
		await page.waitForSelector(selectBrand)

		// create selectors list for all list input elements
		const selectorsList = createSelectorsList(post.options)
		
		// set all list options
		await selectAllListOptions(page, selectorsList);

		// write first circulation date
		await writeToInput(page, post.options.dateFirstEntryCirculation, dateFirstEntryCirculation)

		// write mileage
		await writeToInput(page, post.options.mileage, mileage)

		// write description
		await writeToInput(page, post.options.discription, description);

		// write reference number
		await writeToInput(page, post.options.reference, reference)

		// write price
		await writeToInput(page, post.options.price, sellingPrice)

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
}