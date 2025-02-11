import { selectListOption } from "./selectListOption";

export const selectAllListOptions = async (page, selectorsList) => {
	try {
		for (let index = 0; index < selectorsList.length; index++) {
			const {input, option} = selectorsList[index];
			if (!option) {
				return true;
			}
			await selectListOption(page, input, option())
		}
		return true;
	} catch (error) {
		console.log("🚀 ~ selectAllListOptions ~ error:", error)
		return false;
	}
}