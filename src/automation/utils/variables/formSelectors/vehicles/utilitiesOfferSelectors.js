export const utilitiesOffer = {
    plateNumber: "#licence_plate_number",
    validatePlate: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(1) > div > div.relative.inline-flex.w-full.after\\:hidden.after\\:hidden > div.rounded-r-lg > button",

    selectBrand: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(2) > div > div.flex.items-start.gap-md.min-h-sz-44.text-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high.bg-surface.text-on-surface.cursor-text",
    brandOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(2) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

    selectModelYear: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(4) > div > div.flex.items-start.gap-md.min-h-sz-44.text-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high.bg-surface.text-on-surface.cursor-text",
    modelYearOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(4) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

    fuelOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(8) > div > div > button:nth-child(${index})`,

    gearBox: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(9) > div > div.flex.flex-col.gap-lg > div:nth-child(${index}) > button`,

    selectNumberOfDoors: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(10) > div > div.flex.items-start.gap-md.min-h-sz-44.text-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high.bg-surface.text-on-surface.cursor-text",
    numberOfDoorsOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(10) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

    selectNumberOfPlace: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(11) > div > div.flex.items-start.gap-md.min-h-sz-44.text-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high.bg-surface.text-on-surface.cursor-text",
    numberOfPlaceOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(11) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

    selectColor: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(12) > div > div.flex.items-start.gap-md.min-h-sz-44.text-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high.bg-surface.text-on-surface.cursor-text",
    colorOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(12) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

    taxPower: "#horse_power",
    dinPower: "#horse_power_din",
    mileage: "#mileage",

    airOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(16) > div > div > button:nth-child(${index})`,

    selectDurationOfAvailabilityOfSpareParts: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(20) > div > div.flex.items-start.gap-md.min-h-sz-44.text-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high.bg-surface.text-on-surface.cursor-text",
    DurationOfAvailabilityOfSparePartsOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(20) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

    
}

