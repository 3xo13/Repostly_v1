import { acceptCookies } from "@/automation/actions/firstLogin/acceptCookies";
import { loginWithCookies } from "@/automation/actions/sharedActions/loginWithCookies";
import { takeScreenshot } from "../takeScreenshot";
import { addTitleAndCategory } from "@/automation/actions/createPost/forms/formAction/addTitleAndCategory";
import { goToPage } from "../../goToUrl";
import { waitForMilliseconds } from "../../waitForMilliseconds";

const post = {
    title: "bateau en bois",
    category: "Real estate",
    subCategory: "Real estate sales",
    postType: "offer",
    options: {
        PropertyType: "Apartment",
        ges: "B",
        energyClass: "B",
        feesIncluded: true,
        description: "nous avons besoin d'un stagiaire coiffeur pour aider dans notre boutique",
        address: "Toulouse (31000)",
        price: "450000",
        reference: "320",
        quantity: "1",
        price: "50",
        newPrice: "150",
        virtualTourUrl: "",
        youtubeVideoUrl: "",
        redirectLinkToYourRates: ""
    },
    images: ["5.jpg"]
}

const bearerToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjgyYjFjNmYwLWRiM2EtNTQ2Ny1hYmI2LTJlMzAxNDViZjc3Mi" +
    "IsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMTlhMzQ4YjEtYmEwOC00OGZiLThkMWUtODdlZGI" +
    "1NDYxYmZkIiwiY2xpZW50X2lkIjoibGJjLWZyb250LXdlYiIsImRlcHJlY2F0ZWRfc3RvcmVfaWQiO" +
    "jgwMTYzNzEwLCJleHAiOjE3MzQwMjc1MzksImlhdCI6MTczNDAyMDMzOCwiaW5zdGFsbF9pZCI6Ijg" +
    "zMGYyOWI3LWMxMDItNGVmNi1hMTEyLWIxZDg1NDc1YTYzNCIsImlzcyI6Imh0dHBzOi8vYXV0aC5sZ" +
    "WJvbmNvaW4uZnIiLCJqdGkiOiI5NmY4NzcyMS1hZTU3LTQwNmItYTA0MS0wMTdiMzFiNzdjZTEiLCJ" +
    "zY29wZSI6Im9mZmxpbmUgYmV0YS5sYmMuYXV0aC50d29mYWN0b3IubWUuKiBwb2xhcmlzLiouKi5tZ" +
    "S4qIGxiYy5hdXRoLmVtYWlsLnBhcnQuY2hhbmdlIGxiY2dycC5hdXRoLnR3b2ZhY3Rvci5zbXMubWU" +
    "uYWN0aXZhdGUgbGJjLioubWUuKiBsYmNncnAuYXV0aC50d29mYWN0b3IubWUuKiBwb2xhcmlzLioub" +
    "WUuKiBsYmMucHJpdmF0ZSBsYmNncnAuYXV0aC5zZXNzaW9uLm1lLmRlbGV0ZSBsYmNncnAuYXV0aC5" +
    "zZXNzaW9uLm1lLnJlYWQgbGJjZ3JwLmF1dGguc2Vzc2lvbi5tZS5kaXNwbGF5IGxiYy5lc2Nyb3dhY" +
    "2NvdW50Lm1haW50ZW5hbmNlLnJlYWQgbGJjLiouKi5tZS4qIiwic2Vzc2lvbl9pZCI6ImVkNWUyMzI" +
    "wLTA0ZmItNDI4Yi1iY2RkLWNmYzg2YWZiZTQ2MyIsInNpZCI6ImVkNWUyMzIwLTA0ZmItNDI4Yi1iY" +
    "2RkLWNmYzg2YWZiZTQ2MyIsInN1YiI6ImxiYzsxOWEzNDhiMS1iYTA4LTQ4ZmItOGQxZS04N2VkYjU" +
    "0NjFiZmQ7ODAxNjM3MTAifQ.U32cM6j0lT4KM3yZpmZYqSSnVGU9penu25XqqDyyQH5w9fRGIm6MB0" +
    "8PZeY0Allve99Rw4uGiXiViCzEKK_yOQ9VgC3xjATxIjzLLeYNalP6c_urKnfGRp5YTr5gNYfIlLBW" +
    "N5p-XHVIeZVZrJzy_5ulb_OhVP-beUN2z48F_RhvHSjZm4pvzOsPdNg9YWiv4RbkZrMHkjl_c1yVON" +
    "GcMpKxRQ-df3nu1W63tmDj-st1Ety_bqDYXVoTKbSuw2J6r1LHyxtleYLDsKvnE2K7JuNxAPHvVVgT" +
    "b3Hy_1Z4cZ8Dmuf9wWHmIqH9IjLJGsEyU52MK1--U5Fx0o34n3Ekg8mTH8UUAOrX_FnAdSOHET1ixm" +
    "LpYFC6nTMYscny1YA7T056EZvUuFFHT8OmZXUSNbeERkjxzf8h7dNATiu0dLv1hA6YpFjPZTebWoOE" +
    "exK8RUO7333R-yDS8_xqgv9MJKwBhuon_p68UwaEkwZ72oARglsF-5maO9kAZdWPzbMatNeBBf272I" +
    "f6mgMNarnIfiCCLsWTFmnX3NfudaC7nuLu1Zm4Z7mIajNCWDLmZGmyCqUCwHzZInDPVM_D_XTPDNKF" +
    "3Ikn6TrBg5yUukrfWCmUOFT6mjXI4p9xswtaZB7qwFWdQcXqQrFYaP8AQwXiwKzyuXGWxjM1yLF-hg" +
    "gY7_o"

const payload = {
    "user_journey": "deposit",
    "page_name": "description",
    "classifieds": [
        {
            "category": 9
        }
    ],
    "is_edit_refused": false,
    "with_metadata": [
        "photos"
    ]
}

const config = {
    headers: {
        'Authorization': `Bearer ${bearerToken}`
    }
}

export const testSubmit = async (userId) => {
    try {
        // returns a browser and page instance with the user cookies attached
        const result = await loginWithCookies(userId)

        if (!result) {
            throw new Error("unable to create new page");
        }

        const { page, browser } = result;

        // open add-post page
        await goToPage(page, "https://www.leboncoin.fr/deposer-une-annonce", 5000)

        console.log("opened main page...");

        // accept the cookies mesage if it appears
        // await acceptCookies(page)

        await takeScreenshot(page, "newPost", "pageLoaded")
        // await takeScreenshot(page, "requestTest", "postPageLoaded")

        // // navigate to form page
        // await addTitleAndCategory(page, post)

        // // check if the page has loaded
        // await page.waitForSelector("form")
        // await waitForMilliseconds(13000)
        // const body = await page.$("body") if (!body) {     throw new Error("no body
        // found for the html page"); }

        const newData = await page.evaluate(async (requestData) => {
            const { payload, post, bearerToken } = requestData
            const lebonPricingResponse = await fetch(
                "https://api.leboncoin.fr/api/options/v2/pricing/classifieds",
                {
                    method: "POST",
                    body: JSON.stringify(payload),
                    headers: {
                        'Authorization': `Bearer ${bearerToken}`
                    }
                }
            )
                .then(data => data.json())
                .catch(error => console.log("first request error:", error));
            console.log("🚀 ~ newData ~ lebonPricingResponse:", lebonPricingResponse)
            return lebonPricingResponse
        }, { payload, post, bearerToken })

        console.log("🚀 ~ newData ~ newData:", newData)
        await takeScreenshot(page, "requestTest", "result")
        await browser.close()
    } catch (error) {
        console.error("🚀 ~ loginWithCookies ~ error:", error)
    }
}
