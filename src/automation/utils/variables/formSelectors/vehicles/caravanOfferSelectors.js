export const caravanOffer = {
    lists: [
        [
            {
                selectKind: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg" +
                        "\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.gro" +
                        "w.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-x" +
                        "l > div > div:nth-child(1) > div > div.flex.items-start.gap-md.min-h-sz-44.tex" +
                        "t-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:" +
                        "ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high" +
                        ".bg-surface.text-on-surface.cursor-text"
            }, {
                kindOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(1) > div > div:nth-child(3) > ul > li:nth-child(${index})`
            }
        ],
        [
            {
                selectBrand: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg" +
                        "\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.gro" +
                        "w.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-x" +
                        "l > div > div:nth-child(2) > div > div.flex.items-start.gap-md.min-h-sz-44.tex" +
                        "t-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:" +
                        "ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high" +
                        ".bg-surface.text-on-surface.cursor-text"
            }, {
                brandOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(2) > div > div:nth-child(3) > ul > li:nth-child(${index})`
            }
        ],
        [
            {
                selectModelYear: "#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg" +
                        "\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.gro" +
                        "w.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-x" +
                        "l > div > div:nth-child(3) > div > div.flex.items-start.gap-md.min-h-sz-44.tex" +
                        "t-body-1.h-fit.rounded-lg.px-lg.ring-1.outline-none.ring-inset.focus-within\\:" +
                        "ring-2.ring-outline.focus-within\\:ring-outline-high.hover\\:ring-outline-high" +
                        ".bg-surface.text-on-surface.cursor-text"
            }, {
                modelYearOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(3) > div > div:nth-child(3) > ul > li:nth-child(${index})`
            }
        ],
        [
            {
                selectDurationVailabilitySpareParts: "#vehicle_technical_inspection"
            }, {
                durationVailabilitySparePartsOption: (index) => `#form > div.grid.grid-cols-1.relative.mx-auto.w-full.max-w-page-max.gap-xl.lg\\:grid-cols-\\[auto_20rem\\].lg\\:pr-xl.pt-none.lg\\:pt-xl > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(7) > div > div:nth-child(3) > ul > li:nth-child(${index})`
            }
        ]
    ],
    text: [
        {
            mileage: "#mileage"
        }, {
            description: "#body"
        }, {
            dateFirstEntryCirculation: "#issuance_date"
        }, {
            reference: "#custom_ref"
        }, {
            sellingPrice: "#price"
        }
    ],
    adTitle: "#subject"
}
