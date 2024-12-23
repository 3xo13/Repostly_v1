export const tablewareOffer = {
    adTitle: "#subject",
    adDescription: "#body",
    reference: "#custom_ref",
    yourGeneralConditionsOfSale: "#general_sales_condition",

    selectCategory: "div.grid:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)",
    categoryOption: (index) => `div.grid:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > ul > li:nth-child(${index})`,

    selectProduct: "#form > div:nth-child(2) > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(2) > div > div.flex.items-start.gap-md.min-h-sz-44.text-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high.bg-surface.text-on-surface.cursor-text",
    productOption: (index) => `#form > div:nth-child(2) > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(2) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

    selectMaterial: "#form > div:nth-child(2) > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(3) > div > div.flex.items-start.gap-md.min-h-sz-44.text-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high.bg-surface.text-on-surface.cursor-text",
    materialOption: (index) => `#form > div:nth-child(2) > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(3) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

    selectColor: "#form > div:nth-child(2) > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(4) > div > div.flex.items-start.gap-md.min-h-sz-44.text-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high.bg-surface.text-on-surface.cursor-text",
    colorOption: (index) => `#form > div:nth-child(2) > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(4) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

    selectState: "#form > div:nth-child(2) > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(5) > div > div.flex.items-start.gap-md.min-h-sz-44.text-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high.bg-surface.text-on-surface.cursor-text",
    stateOption: (index) => `#form > div:nth-child(2) > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(5) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

    selectWeight: ".border-basic-container > div:nth-child(2) > div:nth-child(2)",
    weightOption: (index) => `.border-basic-container > div:nth-child(2) > div:nth-child(3) > ul > li:nth-child(${index})`,

    selectNewItemType: "div.block:nth-child(6) > div:nth-child(1) > div:nth-child(2)",
    newItemTypeOption: (index) => `div.block:nth-child(6) > div:nth-child(1) > div:nth-child(3) > ul > li:nth-child(${index})`,

    selectRefurbishedCondition: "div.grid:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2)",
    refurbishedConditionOption: (index) => `div.grid:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > ul > li:nth-child(${index})`,

    quantity: "#quantity",
    yourSellingPrice: "#price_cents",
    newPrice: "#new_item_price"
}