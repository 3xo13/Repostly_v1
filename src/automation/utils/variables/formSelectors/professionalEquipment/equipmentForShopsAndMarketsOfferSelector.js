export const equipmentForShopsAndMarketsOffer = {
    adTitle: "#subject",
    adDescription: "#body",
    reference: "#custom_ref",

    selectDurationOfAvailabilityOfSpareParts: "#form > div:nth-child(2) > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div > div > div.flex.items-start.gap-md.min-h-sz-44.text-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high.bg-surface.text-on-surface.cursor-text",
    durationOfAvailabilityOfSparePartsOption: (index) => `#form > div:nth-child(2) > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div > div > div:nth-child(3) > ul > li:nth-child(${index})`,

    yourSellingPrice: "#price_cents",
}