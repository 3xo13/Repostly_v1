import { motorcycleEquipmentOffer } from "@/automation/utils/variables/formSelectors/vehicles/motorcycleEquipmentOfferSelectors";
import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectors } from "@/automation/utils/variables/selectors";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
import { writeToInput } from "../writeToInput";
import { pressContinue } from "../../formAction/pressContinue";
import { waitForMilliseconds } from "@/automation/utils/waitForMilliseconds";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { uploadImages } from "../../formAction/uploadImages";

const {
	selectDurationOfAvailabilityOfSpareParts,
	DurationOfAvailabilityOfSparePartsOption,
	selectKind,
	kindOption,
	newPrice,
	yourSellingPrice,
	quantity,
	yourGeneralConditionsOfSale
} = motorcycleEquipmentOffer;

const selectorsList = (options) => [
	{
		input: selectDurationOfAvailabilityOfSpareParts,
		option: () => DurationOfAvailabilityOfSparePartsOption(
			lebonFormOptions.motorcycleEquipmentOffer.durationOfAvailabilityOfSpareParts.options.indexOf(options.sparePartsDuration)
		)
	}, {
		input: selectKind,
		option: () => kindOption(
			lebonFormOptions.motorcycleEquipmentOffer.kind.options.indexOf(options.kind)
		)
	},
]

export const motorcycleEquipment = async (page, post) => {
	try {
		await page.waitForSelector(selectKind);

		const listOptionsSelectors = selectorsList(post.options);

		// list options
		await selectAllListOptions(page, listOptionsSelectors);

		// description
		await writeToInput(page, post.options.description, selectors.description)

		// reference
		await writeToInput(page, post.options.reference, selectors.reference)

		// generalCondetion
		await writeToInput(page, post.options.generalCondetion, yourGeneralConditionsOfSale)

		// quantity
		await writeToInput(page, post.options.quantity, quantity)

		// write selling price
		await writeToInput(page, post.options.price, yourSellingPrice);

		// write new price
		await writeToInput(page, post.options.newPrice, newPrice);

		// forth page (component) images
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