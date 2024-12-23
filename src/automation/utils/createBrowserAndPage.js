import {connect} from 'puppeteer-core';
const connectionURL = process.env.BROWSER_CONNECTION_URL;

export const createBrowserPage = async () => {
    try {
        // create an instance of the cloud browser
        const browser = await connect({browserWSEndpoint: connectionURL, defaultViewport: null});
        // create a page in the browser
        const page = await browser.newPage();

        // Set viewport to a common desktop screen size
        await page.setViewport({width: 2000, height: 2500});

        return {page, browser};

    } catch (error) {
        console.log("🚀 ~ createBrowserPage ~ error:", error)
        return error
    }
}