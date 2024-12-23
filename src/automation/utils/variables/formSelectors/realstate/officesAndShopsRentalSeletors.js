export const officesAndShopsRental = {
    selectTypeOfActivity: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(1) > div > div.flex.items-start.gap-md.min-h-sz-44.text-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high.bg-surface.text-on-surface.cursor-text",
    typeOfActivityOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(1) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

    selectFeatures: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(2) > div > button",
    featuresOption: (index) => `    #form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(2) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

    livingArea: "#square",
    minimumDivisibleSurface: "#real_estate_minimum_divisible_area",
    numberOfFloors: "#nb_floors",
    floorOfYourProperty: "#floor_number",
    elevatorSwitch: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(7) > div > div.flex.items-center.gap-md.text-body-1 > button",

    selectOutside: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(8) > div > button",
    outsideOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(8) > div > ul > li:nth-child(${index})`,

    selectParkingSpaces: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(9) > div > div.flex.items-start.gap-md.min-h-sz-44.text-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high.bg-surface.text-on-surface.cursor-text",
    parkingSpacesOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(9) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

    yearOfConstruction: "#building_year",

    energyClassOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(11) > div > div > div:nth-child(2) > button:nth-child(${index})`,
    ghgOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(12) > div > div > div:nth-child(2) > button:nth-child(${index})`,

    virtualTourUrl: "#virtual_tour",
    youtubeVideoUrl: "#video_url",

    monthlyRentIncludingCharges: "#price",
    caution: "#security_deposit",
    rentalCharges: "#monthly_charges",

    redirectLinkToYourRates: "#pro_rates_link"

}