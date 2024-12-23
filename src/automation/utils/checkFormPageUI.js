import { selectors } from "./variables/selectors"
import { waitForMilliseconds } from "./waitForMilliseconds"

export const checkFormPageUI = async (page) => {
	try {
		await page.waitForSelector('form')
		const element = await page.$(selectors.address)
		const secondElement = await page.$(selectors.secondAddress)
		if (element || secondElement) {
			return true
		}
		return false
	} catch (error) {
		console.log("🚀 ~ checkFormPageUI ~ error:", error)
		return error
	}
}