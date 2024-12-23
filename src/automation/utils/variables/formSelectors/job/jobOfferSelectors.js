export const jobOffers = {
    selectContractType: "div.max-w-none:nth-child(1) > div:nth-child(1) > div:nth-child(2)",
    contractTypeOption: (index) => `#form > div > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-\\[calc\\(100vh-6rem\\)\\].pb-\\[7rem\\] > div.grid.grid-cols-1.gap-xl > div:nth-child(1) > div > div:nth-child(3) > ul > li:nth-child(${index})`,
    selectSector: "div.max-w-none:nth-child(2) > div:nth-child(1) > div:nth-child(2)",
    sectorOption: (index) => `#form > div > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-\\[calc\\(100vh-6rem\\)\\].pb-\\[7rem\\] > div.grid.grid-cols-1.gap-xl > div:nth-child(2) > div > div:nth-child(3) > ul > li:nth-child(${index})`,
    selectJobType: "div.max-w-none:nth-child(3) > div:nth-child(1) > div:nth-child(2)",
    jobTypeOption: (index) => `#form > div > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-\\[calc\\(100vh-6rem\\)\\].pb-\\[7rem\\] > div.grid.grid-cols-1.gap-xl > div:nth-child(3) > div > div:nth-child(3) > ul > li:nth-child(${index})`,
    selectExperience: "div.max-w-none:nth-child(4) > div:nth-child(1) > div:nth-child(2)",
    experienceOption: (index) => `#form > div > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-\\[calc\\(100vh-6rem\\)\\].pb-\\[7rem\\] > div.grid.grid-cols-1.gap-xl > div:nth-child(4) > div > div:nth-child(3) > ul > li:nth-child(${index})`,
    selectEducation: "div.max-w-none:nth-child(5) > div:nth-child(1) > div:nth-child(2)",
    educationOption: (index) => `#form > div > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-\\[calc\\(100vh-6rem\\)\\].pb-\\[7rem\\] > div.grid.grid-cols-1.gap-xl > div:nth-child(5) > div > div:nth-child(3) > ul > li:nth-child(${index})`,
    workTypeOption: (index) => `div.gap-md:nth-child(${index})`,
    continueBtn: "#form > div > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-n" +
            "one.sm\\:pb-xl.min-h-\\[calc\\(100vh-6rem\\)\\].pb-\\[7rem\\] > div.flex.justi" +
            "fy-between.fixed.z-sticky.bottom-\\[0\\].left-\\[0\\].right-\\[0\\].shadow.bg-" +
            "surface.px-xl.py-md.sm\\:z-base.sm\\:relative.sm\\:mt-2xl.sm\\:shadow-none.sm" +
            "\\:p-none > button"
}