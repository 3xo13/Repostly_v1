import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectListOption } from "./selectListOption";

const addNewItemType = async (page, itemsState, newItemType, itemTypeInputSelector, itemTypeOptionSelectorFunction) => {
	if (itemsState !== "New condition") {
		return;
	}
	try {
		await selectListOption(page, itemTypeInputSelector, itemTypeOptionSelectorFunction(lebonFormOptions.generalOptions.newItemType.options.indexOf(newItemType) + 1))

	} catch (error) {
		console.log("🚀 ~ addNewItemType ~ error:", error)
	}
}

export { addNewItemType }