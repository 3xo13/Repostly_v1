export const diyOffer = {
    adTitle: "#subject",
    adDescription: "#body",
    reference: "#custom_ref",
    yourGeneralConditionsOfSale: "#general_sales_condition",

    selectKind: "div.grid:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)",
    kindOption: (index) => `div.grid:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > ul > li:nth-child(${index})`,

    selectProduct: "div.grid:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)",
    productOption: (index) => `div.grid:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul > li:nth-child(${index})`,

    selectState: "#form > div:nth-child(2) > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(3) > div > div.flex.items-start.gap-md.min-h-sz-44.text-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high.bg-surface.text-on-surface.cursor-text",
    stateOption: (index) => `#form > div:nth-child(2) > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(3) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

    selectDurationOfAvailabilityOfSpareParts: "#form > div:nth-child(2) > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(4) > div > div.flex.items-start.gap-md.min-h-sz-44.text-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high.bg-surface.text-on-surface.cursor-text",
    durationOfAvailabilityOfSparePartsOption: (index) => `#form > div:nth-child(2) > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(4) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

    selectWeight: ".border-basic-container > div:nth-child(2) > div:nth-child(2)",
    weightOption: (index) => `.border-basic-container > div:nth-child(2) > div:nth-child(3) > ul > li:nth-child(${index})`,

    quantity: "#quantity",
    yourSellingPrice: "#price_cents",
    newPrice: "#new_item_price"
}