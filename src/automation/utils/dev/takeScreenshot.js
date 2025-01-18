import path from 'path';
import fs from "fs";

export const takeScreenshot = async (page, dir, name) => {
    if (process.env.NODE_ENV !== 'development') {
        return;
    }
    // Create the full path to the directory
    const screenshotDir = path.join(process.cwd(), 'screenshots', dir);
    const screenshotPath = path.join(screenshotDir, `${Date.now()}_${name}.png`);

    // Ensure the directory exists (the existence check can be skipped if you're sure it exists)
    if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir, { recursive: true });
    }

    // Take the screenshot
    await page.screenshot({ path: screenshotPath });
};
