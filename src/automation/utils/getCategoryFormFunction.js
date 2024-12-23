import {lebonCategoriesFunctions} from "./variables/lebonCategoriesFunctions";

export const getCategoryFormFunction = (post, isSinglePageForm) => {
    const category = post.category
    const subCategory = post.subCategory;
    const type = post.postType;
    return lebonCategoriesFunctions[category][subCategory][type]
}