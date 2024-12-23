import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectListOption } from "./selectListOption";

const addRefurbishedItemType = async (page, itemsState, newItemType, itemTypeInputSelector, itemTypeOptionSelectorFunction) => {
	if (itemsState !== "Refurbished") {
		return;
	}
	try {
		await selectListOption(page, itemTypeInputSelector, itemTypeOptionSelectorFunction(lebonFormOptions.generalOptions.refurbishedCondition.options.indexOf(newItemType) + 1))

	} catch (error) {
		console.log("🚀 ~ addNewItemType ~ error:", error)
	}
}

export { addRefurbishedItemType }