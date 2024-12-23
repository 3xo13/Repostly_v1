export const autoEquipmentOffer = {
    yourGeneralConditionsOfSale: "#general_sales_condition",

    selectDurationOfAvailabilityOfSpareParts:"",
    durationOfAvailabilityOfSparePartsOption:"",

    selectKind: "#form > div:nth-child(2) > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(1)",
    kindOption: (index) => `#form > div:nth-child(2) > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-auto.pb-xl > div > div:nth-child(1) > div > div:nth-child(3) > ul > li:nth-child(${index})`,

    quantity: "#quantity",
    yourSellingPrice: "#price_cents",
    newPrice: "#new_item_price"

}