import { connect } from 'puppeteer-core';
import { navigateToLogin } from "../firstLogin/navigateToLogin.js";
import { waitForMilliseconds } from "@/automation/utils/waitForMilliseconds.js";
import login from "../firstLogin/login.js";
import { checkForOTP } from "@/automation/utils/checkForOTP.js";
import { enterOTP } from '../firstLogin/enterOTP.js';
import { acceptCookies } from "../firstLogin/acceptCookies.js";
import { Cookie } from '@/db/models/Cookie.js';
import { connectToDB } from '@/db/connectToDB.js';
import { selectors } from '@/automation/utils/variables/selectors.js';
import { createBrowserPage } from '@/automation/utils/createBrowserAndPage.js';
import { takeScreenshot } from '@/automation/utils/dev/takeScreenshot.js';

const connectionURL = process.env.BROWSER_CONNECTION_URL;

const menuSelector = selectors.menuBtn;

export const loginWithOTP = async (userId, email, password) => {
    try {
        console.log("creating browser...");
        
        const {browser, page} = await createBrowserPage()

        console.log("opening page...");
        await page.goto('https://www.leboncoin.fr/', { waitUntil: "load" });
        // await page.goto('https://www.alpha-limit.com/', { waitUntil: "load" });
        await takeScreenshot(page, "requestTest", "mainPageLoaded")
        await acceptCookies(page)

        // check and cancel donation popup
        const popUp = await page.$("#gimii-consent-raiser")
        if (popUp) {
            console.log("popup found");
            
            await page.evaluate(() => {
                const element = document.querySelector('#gimii-consent-raiser'); // Replace 'selector' with the actual selector of the node you want to delete
                if (element) {
                    element.remove();
                }
            });

            await takeScreenshot(page, "requestTest", "popupRemoved")
        }

        await navigateToLogin(page)

        const res = await login(page, email, password)
        if (!res) {
            throw new Error("login failed, login page missing");
        }

        const menuBtn = await page.$(menuSelector)
        if (!menuBtn) {
            console.log('checking otp...');
            
            const otp = await checkForOTP(userId)
    
            console.log('writing code...');
            
            await enterOTP(page, otp)
    
            console.log('saving cookies');
            
            
        }
        await connectToDB()
        // Get all cookies
        const cookies = await browser.cookies(); // Save cookies to the database
        for (const cookie of cookies) {
            const newCookie = new Cookie({ data: cookie, userId });
            await newCookie.save();
        }

        console.log("cookies saved...");
        
        //take page screenshot
        await takeScreenshot(page, "newPost", "automateSuccess")
        // close the browser instance
        await browser.close();
        // #didomi - notice - learn - more - button
    } catch (error) {
        console.log("🚀 ~ automate ~ error:", error)
        return false
    }

}

// login email continue selector = #login-form > button otp first input selector
// = #__next > div > main > div > div > div.relative > input trust this website
// button selector = #__next > div > main > div > div >
// div.mt-2xl.w-full.sm\:mt-lg.flex.flex-row >
// button.u-shadow-border-transition.box-border.inline-flex.items-center.justify-center.gap-md.whitespace-nowrap.px-lg.text-body-1.font-bold.focus-visible\:outline-none.focus-visible\:u-ring.\[\&\:not\(\:focus-visible\)\]\:ring-inset.min-w-sz-44.h-sz-44.rounded-lg.bg-main.text-on-main.hover\:bg-main-hovered.enabled\:active\:bg-main-pressed.focus-visible\:bg-main-focused