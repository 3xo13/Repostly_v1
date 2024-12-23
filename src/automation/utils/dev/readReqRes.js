import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const readReqRes = async (page) => {
	await page.setRequestInterception(true);
	const folderPath = path.join(__dirname, 'lebonReqRes');

	// Ensure the folder exists
	if (!fs.existsSync(folderPath)) {
		fs.mkdirSync(folderPath);
	}

	page.on('request', request => {
		if (['xhr', 'fetch'].includes(request.resourceType())) {
			try {
				const body = request.postData() ? JSON.parse(request.postData()) : null;
				if (body) {
					const data = {
						type: 'request',
						url: request.url(),
						body: body
					};
					const fileName = `request-${Date.now()}.json`;
					fs.writeFileSync(path.join(folderPath, fileName), JSON.stringify(data, null, 2));
				}
			} catch (e) {
				console.log('Request body is not valid JSON');
			}
		}
		request.continue();
	});

	page.on('response', async response => {
		const request = response.request();
		if (['xhr', 'fetch'].includes(request.resourceType())) {
			try {
				const responseBody = await response.text();
				const jsonResponse = JSON.parse(responseBody);
				const data = {
					type: 'response',
					url: response.url(),
					body: jsonResponse
				};
				const fileName = `response-${Date.now()}.json`;
				fs.writeFileSync(path.join(folderPath, fileName), JSON.stringify(data, null, 2));
			} catch (e) {
				console.log('Response body is not valid JSON');
			}
		}
	});
};

// Usage example:
// import puppeteer from 'puppeteer-core';
// const page = await puppeteer.launch().newPage();
// await readReqRes(page);
// await page.goto('https://example.com');
