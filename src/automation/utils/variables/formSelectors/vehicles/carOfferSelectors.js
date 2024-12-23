export const carOffer = {
	plateNumber: "#licence_plate_number",
	validatePlate: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(1) > div > div.relative.inline-flex.w-full.after\\:hidden.after\\:hidden > div.rounded-r-lg > button",

	technicalInspection: "#vehicle_technical_inspection",

	gearBox: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(10) > div > div.flex.flex-col.gap-lg > div:nth-child(${index}) > button`,

	permit: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(16) > div > div.flex.flex-col.gap-lg > div:nth-child(${index}) > button`,

	mileage: "#mileage",

	selectColor: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(18) > div > div.flex.items-start.gap-md.min-h-sz-44.text-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high.bg-surface.text-on-surface.cursor-text",
	colorOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(18) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

	selectFurniture: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(19) > div > button",
	furnitureOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(19) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

	selectEquipment: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(20) > div > button",
	equipmentOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(20) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

	selectFeatures: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(21) > div > button",
	featuresOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(21) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

	selectCondition: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(22) > div > div.flex.items-start.gap-md.min-h-sz-44.text-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high.bg-surface.text-on-surface.cursor-text > div",
	conditionOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(22) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

	airOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(23) > div > div > div:nth-child(2) > button:nth-child(${index})`, 

	selectEmissionClass: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(24) > div > div.flex.items-start.gap-md.min-h-sz-44.text-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high.bg-surface.text-on-surface.cursor-text",
	emissionClassOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(24) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

	loaLld: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(25) > div > div.flex.items-center.gap-md.text-body-1 > button",

	selectPartAvaliableTime: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(26) > div > div.flex.items-start.gap-md.min-h-sz-44.text-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high.bg-surface.text-on-surface.cursor-text",
	partAvaliableTimeOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(26) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

	reference: "#form > div:nth-child(2) > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(3) > div > div.relative.inline-flex.w-full.after\\:hidden.after\\:hidden > div > input"


};
