import { jobOffersPro } from "./formSelectors/job/jobOfferProSelectors.js";
import {jobOffers} from "./formSelectors/job/jobOfferSelectors.js";
import {professionalTraining} from "./formSelectors/job/professionalTrainingSelectors.js";
import { carOffer } from "./formSelectors/vehicles/carOfferSelectors.js";

export const selectors = {
    continueBtn: 'form button[type="submit"]',
    menuBtn: '#container > div.relative.flex.bg-transparent.tiny\\:bg-background > div > div' +
            '.flex.max-w-full.flex-1.flex-col.min-h-screen > div > header > div.relative.fl' +
            'ex.min-h-\\[6rem\\].flex-wrap.items-center.justify-between.gap-x-md.bg-surface' +
            ' > div.flex.w-full.flex-wrap.items-center.justify-between.px-\\[max\\(var\\(--' +
            'spacing-lg\\)\\,calc\\(\\(100\\%-var\\(--page-max\\)\\)\\/2\\)\\)\\] > div.fle' +
            'x.custom\\:hidden.mr-lg > nav > button',
    sidebarAccountLink: "#radix-\\:R5kgqbudm\\: > div > div.absolute.inset-none.flex.flex-col.overflow-" +
            "auto > div:nth-child(7) > a",
    sidebarAccountDiv: "#radix-\\:R5kgqbudm\\: > div > div.absolute.inset-none.flex.flex-col.overflow-" +
            "auto > div:nth-child(7)",
    sidebarNewPostLink: "#radix-\\:r12\\: > div > div.absolute.inset-none.flex.flex-col.overflow-auto >" +
            " div:nth-child(1) > a:nth-child(1)",
        cookiesApprove: '#didomi-consent-popup > div > div > div > div > div.didomi-consent-popup-footer.didomi-popup-footer > div > button.didomi-components-button.didomi-button.didomi-button-standard.standard-button',
        cookiesDetails: '#didomi-notice-learn-more-button',
    description: "textarea",
    reference: "#custom_ref",
    address: "div.min-h-sz-44:nth-child(1) > div:nth-child(1) > input",
    // address: "#form > div:nth-child(5) > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg" +
    //     ".sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div > div > div.absolute." +
    //     "left-none.right-none.top-md.z-raised.pl-lg.pr-lg > div > div > div > div > input",
    secondAddress: "#form > div:nth-child(5) > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div > div > div.absolute.left-none.right-none.top-md.z-raised.pl-lg.pr-lg > div > div > div.flex.items-start.gap-md.min-h-sz-44.text-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high.bg-surface.text-on-surface.cursor-text > div > input",

    price: "#price_cents",
    newPost: {
        newPostTitleinput: "input",
        newPostShowCategories: "#mainContent > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap" +
                "-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-xl > div.relative.shrink.gro" +
                "w.rounded-lg.bg-surface.p-xl.sm\\:min-h-none.sm\\:pb-xl > form > div.my-xl > d" +
                "iv > button",
        categories: (index) => `#mainContent > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-xl > div.relative.shrink.grow.rounded-lg.bg-surface.p-xl.sm\\:min-h-none.sm\\:pb-xl > form > div.my-xl > div > div > li:nth-child(${index}) > a`,
        subCategories: (index) => `#mainContent > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-xl > div.relative.shrink.grow.rounded-lg.bg-surface.p-xl.sm\\:min-h-none.sm\\:pb-xl > form > div.my-xl > div > ul > li:nth-child(${index}) > a`,
        postOption: (index) => `#mainContent > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-xl > div.relative.shrink.grow.rounded-lg.bg-surface.p-xl.sm\\:min-h-none.sm\\:pb-xl > form > div:nth-child(3) > div > div:nth-child(${index})`,
        postTitlePageContinueBtn: "#mainContent > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap" +
                "-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-xl > div.relative.shrink.gro" +
                "w.rounded-lg.bg-surface.p-xl.sm\\:min-h-none.sm\\:pb-xl > form > div.flex.just" +
                "ify-end > button",
        prefillMessage: "body > div.fixed.inset-x-lg.z-toast.group.outline-none.pointer-events-none.grid.grid-rows-1.grid-cols-1.gap-lg.bottom-lg.justify-items-center",
        prefillBtn: "body > div.fixed.inset-x-lg.z-toast.group.outline-none.pointer-events-none.grid.grid-rows-1.grid-cols-1.gap-lg.bottom-lg.justify-items-center > div > button",
        forms: {
            job: {
                jobOffers,
                jobOffersPro,
                professionalTraining
            },
            vehicles: {
                carOffer
            }
        }

    }

}
