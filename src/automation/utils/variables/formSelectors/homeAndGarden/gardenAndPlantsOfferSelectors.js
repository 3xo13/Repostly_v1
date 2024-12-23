export const gardenAndPlantsOffer = {
    adTitle: "#subject",
    adDescription: "#body",
    reference: "#custom_ref",
    yourGeneralConditionsOfSale: "#general_sales_condition",

    selectKind: "div.grid:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)",
    kindOption: (index) => `div.grid:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > ul > li:nth-child(${index})`,

    selectProduct: "div.grid:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)",
    productOption: (index) => `div.grid:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul > li:nth-child(${index})`,

    selectState: "div.grid:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)",
    stateOption: (index) => `div.grid:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > ul > li:nth-child(${index})`,

    selectDurationOfAvailabilityOfSpareParts: "div.grid:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2)",
    durationOfAvailabilityOfSparePartsOption: (index) => `div.grid:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > ul > li:nth-child(${index})`,

    selectWeight: ".border-basic-container > div:nth-child(2) > div:nth-child(2)",
    weightOption: (index) => `.border-basic-container > div:nth-child(2) > div:nth-child(3) > ul > li:nth-child(${index})`,

    selectNewItemType: "div.grid:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2)",
    newItemTypeOption: (index) => `div.grid:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > ul > li:nth-child(${index})`,

    selectRefurbishedCondition: "div.grid:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2)",
    refurbishedConditionOption: (index) => `div.grid:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > ul > li:nth-child(${index})`,

    quantity: "#quantity",
    yourSellingPrice: "#price_cents",
    newPrice: "#new_item_price"
}