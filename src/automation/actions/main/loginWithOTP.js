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
import OTP from '@/db/models/OTP.js';
import ExternalAccount from '@/db/models/ExternalAccount.js';

const menuSelector = selectors.menuBtn;

export const loginWithOTP = async (userId, email, password, accountId) => {
    try {
        console.log("creating browser...");
        
        const {browser, page} = await createBrowserPage()

        if (!browser || !page) {
            throw new Error("enable to create a new page");
        }

        console.log("opening page...");
        await page.goto('https://www.leboncoin.fr/', { waitUntil: "load" });
        // await page.goto('https://www.alpha-limit.com/', { waitUntil: "load" });
        await takeScreenshot(page, "requestTest", "mainPageLoaded")
        await acceptCookies(page)

        // check and cancel donation popup
        const popUp = await page.$("#gimii-consent-raiser")
        const popUp2 = await page.$("button._root_1dq4a_1:nth-child(1)")
        if (popUp || popUp2) {
            console.log("popup found");
            
            await page.evaluate(() => {
                const element = document.querySelector('#gimii-consent-raiser'); // Replace 'selector' with the actual selector of the node you want to delete
                const element2 = document.querySelector('button._root_1dq4a_1:nth-child(1)');
                if (element) {
                    element.remove();
                }
                if (element2) {
                    element2.remove();
                }
            });

            await takeScreenshot(page, "requestTest", "popupRemoved")
        }

        const navigationRes = await navigateToLogin(page)
        if (!navigationRes) {
            throw new Error("navigation to login page failed");
        }

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
        }
        await connectToDB()

        // delete old cookies
        await Cookie.deleteMany({accountId})

        // update the account state
        const account = await ExternalAccount.findById(accountId)
        if (account.cookies.length) {
            account.cookies = [];
        }

        console.log('saving cookies');

        // Get and save all cookies from target site
        const cookies = await browser.cookies(); // Save cookies to the database
        for (const cookie of cookies) {
            const newCookie = new Cookie({ data: cookie, userId, accountId });
            await newCookie.save();
            account.cookies = [...account.cookies, newCookie._id]
        }

        // delete the old otp code after using
        await OTP.deleteOne({userId})

        
        account.loggedIn = true;
        await account.save() 

        console.log("cookies saved...");
                
        // close the browser instance
        await browser.close();

        return true
    } catch (error) {
        console.log("🚀 ~ automate ~ error:", error)
        await Cookie.deleteMany({accountId, userId})
        // update the account state
        const account = await ExternalAccount.findById(accountId)
        account.loggedIn = false;
        await account.save()
        return false
    }

}

// login email continue selector = #login-form > button otp first input selector
// = #__next > div > main > div > div > div.relative > input trust this website
// button selector = #__next > div > main > div > div >
// div.mt-2xl.w-full.sm\:mt-lg.flex.flex-row >
// button.u-shadow-border-transition.box-border.inline-flex.items-center.justify-center.gap-md.whitespace-nowrap.px-lg.text-body-1.font-bold.focus-visible\:outline-none.focus-visible\:u-ring.\[\&\:not\(\:focus-visible\)\]\:ring-inset.min-w-sz-44.h-sz-44.rounded-lg.bg-main.text-on-main.hover\:bg-main-hovered.enabled\:active\:bg-main-pressed.focus-visible\:bg-main-focused