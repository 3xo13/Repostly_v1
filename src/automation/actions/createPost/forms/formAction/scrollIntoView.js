export const scrollIntoView = async (page, selector) => {
	const result = await page.evaluate(selector => {
		const element = document.querySelector(selector);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'center' });
			console.error(`Scrolled to selector btn ${selector}`);
			return `Scrolled to selector ${selector}`;
		} else {
			console.error(`cannot find selector ${selector}`);
			return `cannot find selector ${selector}`;
		}
	}, selector);
	return result
}